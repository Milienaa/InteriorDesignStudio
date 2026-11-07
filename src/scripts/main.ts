/**
 * Oriel: the only JavaScript on the page.
 * 1. Menu on small screens.  2. Current section hour in the header.
 * 3. Live Kyiv time in the hero.  4. Photo fade-in.  5. Contact form → email draft.
 * Everything degrades: without this file the page still reads and the form still posts to mailto.
 */

const $ = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

/* 1. Menu */
const menu = $<HTMLButtonElement>('[data-menu]');
const nav = $<HTMLElement>('[data-nav]');
if (menu && nav) {
  const setOpen = (open: boolean) => {
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };
  menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
  $$('[data-nav-link]', nav).forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      menu.focus();
    }
  });
}

/* 2. Which hour of the day are we in? */
const indicator = $<HTMLElement>('[data-hour-indicator] .hour');
const navLinks = $$<HTMLAnchorElement>('[data-nav-link]');
const sections = $$<HTMLElement>('[data-section-hour]');
if (indicator && sections.length && 'IntersectionObserver' in window) {
  const show = (hour: string | null, id: string | null) => {
    indicator.textContent = hour ?? '';
    navLinks.forEach((a) => {
      const current = id !== null && a.getAttribute('href') === `#${id}`;
      if (current) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) show(en.target.getAttribute('data-section-hour'), en.target.id);
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  );
  sections.forEach((s) => io.observe(s));
  const hero = $<HTMLElement>('.hero');
  if (hero) {
    new IntersectionObserver(([en]) => en && en.isIntersecting && show(null, null), {
      rootMargin: '-45% 0px -50% 0px',
    }).observe(hero);
  }
}

/* 3. Now in Kyiv */
const timeEl = $<HTMLElement>('[data-kyiv-time]');
if (timeEl && typeof Intl !== 'undefined') {
  try {
    const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Kyiv', hour: '2-digit', minute: '2-digit', hour12: false });
    const tick = () => {
      const now = new Date();
      const time = fmt.format(now);
      const h = Number(time.slice(0, 2));
      const phrase =
        h >= 6 && h < 10
          ? 'the hour we check east windows.'
          : h >= 10 && h < 15
            ? 'the hour we check how deep the light reaches.'
            : h >= 15 && h < 19
              ? 'the hour we check west glare.'
              : 'the hour we check the lamps.';
      timeEl.textContent = `Now in Kyiv: ${time}, ${phrase}`;
    };
    tick();
    window.setInterval(tick, 30_000);
  } catch {
    /* keep the static note */
  }
}

/* 4. Photos fade in once, when they have loaded */
$$<HTMLImageElement>('img.fade').forEach((img) => {
  const done = () => img.classList.add('is-loaded');
  if (img.complete && img.naturalWidth > 0) done();
  else {
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  }
});

/* 5. Contact form: validate, then open an email draft with the details */
const form = $<HTMLFormElement>('[data-contact-form]');
if (form) {
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
  const setError = (name: string, bad: boolean) => {
    const el = field(name);
    const msg = $<HTMLElement>(`#e-${name}`);
    if (!el || !msg) return;
    msg.hidden = !bad;
    if (bad) el.setAttribute('aria-invalid', 'true');
    else el.removeAttribute('aria-invalid');
  };
  const validate = () => {
    const name = field('name')?.value.trim() ?? '';
    const email = field('email')?.value.trim() ?? '';
    const area = Number(field('area')?.value);
    const bad = {
      name: name.length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      area: !(area >= 20 && area <= 1000),
    };
    (Object.keys(bad) as (keyof typeof bad)[]).forEach((k) => setError(k, bad[k]));
    const first = (Object.keys(bad) as (keyof typeof bad)[]).find((k) => bad[k]);
    if (first) field(first)?.focus();
    return !first;
  };
  ['name', 'email', 'area'].forEach((n) => field(n)?.addEventListener('input', () => setError(n, false)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    const v = (n: string) => field(n)?.value.trim() ?? '';
    const subject = `Consultation request: ${v('area')} m², ${v('facing').toLowerCase()}, ${v('service').toLowerCase()}`;
    const body = [
      `Name: ${v('name')}`,
      `Email: ${v('email')}`,
      `Area: ${v('area')} m²`,
      `Main windows face: ${v('facing')}`,
      `Service: ${v('service')}`,
      `Budget: ${v('budget')}`,
      `Start: ${v('start')}`,
      '',
      v('message'),
    ].join('\n');
    const to = form.dataset.email ?? '';
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const help = $<HTMLElement>('[data-form-help]');
    const sent = $<HTMLElement>('[data-form-sent]');
    if (help) help.hidden = true;
    if (sent) {
      sent.hidden = false;
      sent.setAttribute('tabindex', '-1');
      sent.focus();
    }
  });
}

/* 6. Light reveal on scroll: each block fades up once, siblings slightly staggered */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window) {
  const selectors = [
    'main section:not(.hero) .sec-head',
    '#approach .statement',
    '#approach .steps > li',
    '#approach .flat',
    '.plate > *',
    '#fees .row',
    '#fees .foot',
    '#process .weeks',
    '#process .steps > li',
    '#studio .photo',
    '#studio .text',
    '#questions .item',
    '#contact .direct',
    '#contact .form',
  ];
  // Only blocks still below the fold are hidden; anything already on screen stays put.
  const els = $$<HTMLElement>(selectors.join(',')).filter((el) => el.getBoundingClientRect().top > window.innerHeight);
  els.forEach((el) => {
    const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => els.includes(c as HTMLElement)) : [];
    const i = Math.max(0, siblings.indexOf(el));
    el.style.setProperty('--d', `${Math.min(i, 5) * 90}ms`);
    el.setAttribute('data-reveal', '');
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));

  // Safety net: if the observer is ever starved (background tab, odd embed), reveal by position.
  const pending = new Set(els);
  const sweep = window.setInterval(() => {
    pending.forEach((el) => {
      if (el.classList.contains('is-in') || el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('is-in');
        pending.delete(el);
      }
    });
    if (!pending.size) window.clearInterval(sweep);
  }, 700);
}
