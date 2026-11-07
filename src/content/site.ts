/**
 * Every word and number on the site lives here.
 * Lines marked SAMPLE are illustrative and must be replaced by the client.
 */
import lypkyDining from '../assets/photos/lypky-dining.jpg';
import linenDetail from '../assets/photos/linen-detail.jpg';
import bedroomAfter from '../assets/photos/bedroom-after.jpg';
import podilKitchen from '../assets/photos/podil-kitchen.jpg';

export const meta = {
  title: 'Oriel · Interiors shaped by daylight · Kyiv',
  description:
    'Oriel is an interior design studio in Podil, Kyiv. We design apartments around the light they actually get: a light study at 08:00, 13:00 and 18:00, published fees and a process with dates.',
  locale: 'en',
};

export const brand = {
  name: 'Oriel',
  tagline: 'Interiors · Kyiv',
  email: 'oriel.studio@gmail.com',
  telegram: 'https://t.me/oriel_studio', // SAMPLE
  telegramHandle: '@oriel_studio', // SAMPLE
  address: 'Podil, Kyiv', // SAMPLE (street to be supplied)
  replyWithin: '48 hours',
};

export const nav = [
  { href: '#approach', label: 'Approach' },
  { href: '#work', label: 'Work' },
  { href: '#fees', label: 'Fees' },
  { href: '#process', label: 'Process' },
  { href: '#studio', label: 'Studio' },
  { href: '#questions', label: 'Questions' },
];

export const cta = {
  primary: 'Book a 30-minute consultation',
  short: 'Book a consultation',
  secondary: 'See three flats',
};

export const hero = {
  headlineA: 'Interiors shaped by',
  headlineB: 'daylight.',
  lead: 'We design Kyiv apartments around the light they actually get. We measure it at three hours of the day before we draw a single wall.',
  // Shown when JavaScript is off; replaced by the live Kyiv time line.
  staticNote: 'We visit at 08:00, 13:00 and 18:00.',
  photo: {
    src: lypkyDining,
    alt: 'Dining room with pale pine floor, a round table and tall windows full of soft daylight',
    caption: 'Lypky Residence · 13:10 · light from the south-west', // SAMPLE project
  },
  facts: [
    { label: 'Studio', value: 'Podil, Kyiv' },
    { label: 'Light studied at', value: '08:00 · 13:00 · 18:00' },
    { label: 'Fees', value: 'Published below' },
    { label: 'Reply', value: 'Within 48 hours' },
  ],
};

export const approach = {
  hour: '07:00',
  label: 'Approach',
  title: 'We start with the light, not the sofa.',
  statement:
    'Most studios start from a mood board. We start from a window. Where the sun is at eight, at one and at six decides where you read, where you work and which wall can carry a dark colour.',
  steps: [
    {
      n: '01',
      name: 'Study',
      text: 'Three visits to your flat at set hours. We photograph the light, measure it and draw where it falls on the plan.',
    },
    {
      n: '02',
      name: 'Shape',
      text: 'The plan follows the study. Glazed partitions, mirrors and openings pull light into the rooms that never had it.',
    },
    {
      n: '03',
      name: 'Finish',
      text: 'Every plaster, oak and stone sample is approved in your window light, not under showroom lamps.',
    },
  ],
  flatsTitle: 'The flats we are good at',
  flats: [
    {
      name: 'North-facing',
      text: 'Cool, even light all day. We warm the surfaces and borrow brightness from the brightest room.',
    },
    {
      name: 'Deep-plan',
      text: 'Nine metres from window to hallway. We open the plan in the direction the light travels.',
    },
    {
      name: 'Older buildings',
      text: 'Tall windows, parquet and cornices. We keep what is worth keeping and quietly modernise the rest.',
    },
  ],
};

export type Hour = '08:00' | '13:00' | '18:00';

export interface LightState {
  hour: Hour;
  /** SVG polygon points on a 320 × 220 plan. */
  pools: string[];
  /** Sun position on the compass arc, 0 (east) to 1 (west). */
  sun: number;
  note: string;
}

export interface Project {
  id: string;
  n: string;
  name: string;
  photo: { src: ImageMetadata; alt: string; caption: string };
  facts: { label: string; value: string }[];
  story: string;
  plan: {
    rooms: { x: number; y: number; w: number; h: number; name: string }[];
    windows: { x1: number; y1: number; x2: number; y2: number }[];
    states: LightState[];
  };
  materials: { name: string; spec: string; tone: string }[];
}

// All three projects are SAMPLE content for a fictional studio.
export const work = {
  hour: '09:00',
  label: 'Selected work',
  title: 'Three flats, three kinds of light.',
  intro:
    'Each plate shows the numbers a client decides on: area, scope, time and budget. The daylight plan shows what changed in the light, not just how the room looks.',
  lightStudyLabel: 'Light study',
  projects: [
    {
      id: 'podil',
      n: '01',
      name: 'Podil Apartment',
      photo: {
        src: podilKitchen,
        alt: 'Kitchen with an oak tall cabinet, white stone counters and a sloped skylight',
        caption: '13:40 · north light under the new skylight',
      },
      facts: [
        { label: 'Place', value: 'Podil, Kyiv · 1912 building' },
        { label: 'Year', value: '2025' },
        { label: 'Area', value: '74 m²' },
        { label: 'Faces', value: 'North' },
        { label: 'Scope', value: 'Design + delivery' },
        { label: 'Time', value: '7 months' },
        { label: 'Budget', value: '$60–75k, works + furniture' },
      ],
      story:
        'A north-facing flat with a nine-metre hallway that saw no sun. A glazed oak partition, lime plaster and one long mirror now pull daylight from the living room to the front door. The hallway is lit from 10:00 to 15:00 without a lamp.',
      plan: {
        rooms: [
          { x: 20, y: 20, w: 150, h: 110, name: 'Living' },
          { x: 170, y: 20, w: 130, h: 70, name: 'Kitchen' },
          { x: 170, y: 90, w: 130, h: 40, name: 'Bath' },
          { x: 20, y: 130, w: 280, h: 40, name: 'Hallway' },
          { x: 20, y: 170, w: 280, h: 30, name: 'Entrance' },
        ],
        windows: [
          { x1: 40, y1: 20, x2: 90, y2: 20 },
          { x1: 110, y1: 20, x2: 160, y2: 20 },
          { x1: 200, y1: 20, x2: 260, y2: 20 },
        ],
        states: [
          {
            hour: '08:00',
            sun: 0.1,
            pools: ['40,20 90,20 100,60 50,60', '110,20 160,20 170,60 120,60', '200,20 260,20 262,50 206,50'],
            note: 'Soft, even light stays within two metres of the windows.',
          },
          {
            hour: '13:00',
            sun: 0.5,
            pools: [
              '40,20 160,20 165,130 35,130',
              '200,20 260,20 258,90 202,90',
              '60,130 165,130 175,170 70,170',
            ],
            note: 'The glazed partition carries light through the living room into the hallway.',
          },
          {
            hour: '18:00',
            sun: 0.9,
            pools: ['40,20 160,20 150,100 50,100', '20,100 60,100 58,130 22,130'],
            note: 'The mirror on the west wall bounces the last light back toward the entrance.',
          },
        ],
      },
      materials: [
        { name: 'Lime plaster', spec: 'chalk, hand-trowelled', tone: '#E8E3D8' },
        { name: 'White oak', spec: 'oiled, rift-sawn', tone: '#C9B18C' },
        { name: 'Travertine', spec: 'honed, unfilled', tone: '#D6CBB8' },
        { name: 'Linen', spec: 'natural, sheer', tone: '#EFEAE0' },
      ],
    },
    {
      id: 'lypky',
      n: '02',
      name: 'Lypky Residence',
      photo: {
        src: lypkyDining,
        alt: 'Dining room with pale pine floor, a round table and tall windows full of soft daylight',
        caption: '13:10 · light from the south-west',
      },
      facts: [
        { label: 'Place', value: 'Lypky, Kyiv · 1936 building' },
        { label: 'Year', value: '2024' },
        { label: 'Area', value: '118 m²' },
        { label: 'Faces', value: 'South-west' },
        { label: 'Scope', value: 'Design + delivery' },
        { label: 'Time', value: '9 months' },
        { label: 'Budget', value: '$110–130k, works + furniture' },
      ],
      story:
        'Too much afternoon sun, not too little. Three-metre windows made the dining room unusable after four. Sheer linen, a pale pine floor that does not glare and a deep plaster reveal turned the glare into a slow, warm evening.',
      plan: {
        rooms: [
          { x: 20, y: 20, w: 170, h: 100, name: 'Dining' },
          { x: 190, y: 20, w: 110, h: 100, name: 'Kitchen' },
          { x: 20, y: 120, w: 110, h: 80, name: 'Study' },
          { x: 130, y: 120, w: 170, h: 80, name: 'Bedrooms' },
        ],
        windows: [
          { x1: 20, y1: 40, x2: 20, y2: 100 },
          { x1: 20, y1: 140, x2: 20, y2: 190 },
          { x1: 50, y1: 200, x2: 110, y2: 200 },
        ],
        states: [
          {
            hour: '08:00',
            sun: 0.1,
            pools: ['20,40 60,45 60,95 20,100'],
            note: 'Morning is quiet on this side. Breakfast happens in the shade.',
          },
          {
            hour: '13:00',
            sun: 0.5,
            pools: ['20,40 130,50 130,110 20,100', '20,140 90,150 90,190 20,190', '50,200 110,200 100,160 60,160'],
            note: 'Light reaches the middle of the dining room. The sheers soften it.',
          },
          {
            hour: '18:00',
            sun: 0.9,
            pools: ['20,40 190,30 190,120 20,100', '20,140 130,140 130,200 20,190'],
            note: 'Full west sun. The pale floor and reveal turn it warm instead of harsh.',
          },
        ],
      },
      materials: [
        { name: 'Pine', spec: 'wide board, soaped', tone: '#DCCDB0' },
        { name: 'Lime plaster', spec: 'warm grey', tone: '#D9D3C7' },
        { name: 'Linen sheers', spec: 'double width', tone: '#F0ECE3' },
        { name: 'Brass', spec: 'unlacquered', tone: '#B8955A' },
      ],
    },
    {
      id: 'tatarka',
      n: '03',
      name: 'Tatarka Flat',
      photo: {
        src: bedroomAfter,
        alt: 'Bedroom with a low bed, linen curtains and soft morning light on a pale wall',
        caption: '08:20 · east light on the bedroom wall',
      },
      facts: [
        { label: 'Place', value: 'Tatarka, Kyiv · new build' },
        { label: 'Year', value: '2025' },
        { label: 'Area', value: '65 m²' },
        { label: 'Faces', value: 'East' },
        { label: 'Scope', value: 'Design project' },
        { label: 'Time', value: '10 weeks' },
        { label: 'Budget', value: '$35–45k, works + furniture' },
      ],
      story:
        'A concrete shell for a product manager who works from home. The desk sits where the morning light is and folds away at six. Storage runs along the dark wall so the bright one stays empty.',
      plan: {
        rooms: [
          { x: 20, y: 20, w: 180, h: 110, name: 'Living + desk' },
          { x: 200, y: 20, w: 100, h: 110, name: 'Bedroom' },
          { x: 20, y: 130, w: 100, h: 70, name: 'Kitchen' },
          { x: 120, y: 130, w: 80, h: 70, name: 'Bath' },
          { x: 200, y: 130, w: 100, h: 70, name: 'Entrance' },
        ],
        windows: [
          { x1: 40, y1: 20, x2: 180, y2: 20 },
          { x1: 220, y1: 20, x2: 280, y2: 20 },
        ],
        states: [
          {
            hour: '08:00',
            sun: 0.1,
            pools: ['40,20 180,20 190,110 30,110', '220,20 280,20 285,100 215,100'],
            note: 'The whole east wall is lit. The desk is here, by design.',
          },
          {
            hour: '13:00',
            sun: 0.5,
            pools: ['40,20 180,20 175,60 45,60', '220,20 280,20 278,50 222,50'],
            note: 'Light retreats to the window line. Time for the storage wall to disappear.',
          },
          {
            hour: '18:00',
            sun: 0.9,
            pools: ['60,20 160,20 155,35 65,35'],
            note: 'Evening is lamp-lit. Warm bulbs, 2700 K, on dimmers.',
          },
        ],
      },
      materials: [
        { name: 'Birch ply', spec: 'clear oil', tone: '#E6D6B8' },
        { name: 'Microcement', spec: 'bone', tone: '#DDD8CE' },
        { name: 'Linen', spec: 'undyed', tone: '#ECE6DA' },
        { name: 'Steel', spec: 'powder-coated, slate', tone: '#5B6B78' },
      ],
    },
  ] satisfies Project[],
};

export const fees = {
  hour: '12:00',
  label: 'Services & fees',
  title: 'Fees you can read before you call.',
  intro:
    'Design is priced per square metre, as it usually is in Kyiv. Builders, furniture and materials are paid by you, at cost, with invoices you can see.',
  // SAMPLE figures throughout.
  items: [
    {
      name: 'Light audit',
      price: '$280',
      unit: 'one visit',
      time: '1 week',
      text: 'One day in your flat at 08:00, 13:00 and 18:00. You receive a light report, a marked-up plan and a list of what to change, with or without us.',
      includes: ['3 timed visits', 'Daylight plan', 'Written recommendations'],
    },
    {
      name: 'Design project',
      price: 'from $45',
      unit: 'per m²',
      time: '8–10 weeks',
      text: 'The light audit, the plan, full working drawings, and every finish approved in your window light. Enough for any builder to price and build.',
      includes: ['Light audit', 'Working drawings', 'Finishes & furniture list', '3 revisions'],
    },
    {
      name: 'Design + delivery',
      price: 'from $75',
      unit: 'per m²',
      time: '6–9 months',
      text: 'The design project plus procurement, site supervision and a written update every week. Built for owners who live abroad or simply do not want to visit a tile shop.',
      includes: ['Everything above', 'Procurement at cost', 'Weekly site visit + report', 'Handover walk-through'],
    },
  ],
  note: 'Example: a 74 m² design project from $3,330. Minimum project area 45 m².',
};

export const process = {
  hour: '15:00',
  label: 'Process',
  title: 'Five steps, each with a date.',
  intro: 'For a design project. Delivery adds the build, with the same weekly rhythm.',
  // SAMPLE durations.
  steps: [
    { n: '1', name: 'Light study', when: 'Week 1', text: 'Three visits at set hours. We measure, photograph and draw the light on your plan.', span: 1 },
    { n: '2', name: 'Concept', when: 'Weeks 2–3', text: 'One plan, one palette, one page. We agree what to keep and what to open up.', span: 2 },
    { n: '3', name: 'Drawings', when: 'Weeks 4–7', text: 'Working drawings for builders: walls, electrics, plumbing, joinery and lighting.', span: 4 },
    { n: '4', name: 'Finishes in your light', when: 'Weeks 8–9', text: 'Plaster, wood and stone samples approved on your wall at the hours that matter.', span: 2 },
    { n: '5', name: 'Handover', when: 'Week 10', text: 'The full set, a procurement list with prices, and an introduction to two builders we trust.', span: 1 },
  ],
};

export const studio = {
  hour: '17:00',
  label: 'Studio',
  title: 'A small studio that visits three times before it draws.',
  text: 'Oriel is three people in a courtyard studio in Podil: two designers and one site manager. We take on six flats a year, so each one gets the same three visits, the same drawings and the same weekly letter.',
  photo: {
    src: linenDetail,
    alt: 'White room with a sheer curtain, a small table and a plant in morning light',
    caption: 'The studio · 08:20 · north light through linen',
  },
  // SAMPLE numbers.
  numbers: [
    { value: '2021', label: 'Founded' },
    { value: '3', label: 'People' },
    { value: '24', label: 'Flats completed' },
    { value: '6', label: 'Projects a year' },
  ],
  // SAMPLE quote. Replace with a real client's words and permission.
  quote: {
    text: 'They came at eight in the morning with a light meter. Nobody else had even asked which way the windows faced.',
    by: 'Owner, Podil Apartment',
  },
};

export const faq = {
  hour: '19:00',
  label: 'Questions',
  title: 'Honest answers to the six questions we always get.',
  items: [
    {
      q: 'What does a design project really cost for my flat?',
      a: 'Multiply your area by the rate: a 74 m² flat is from $3,330 for the design project, from $5,550 with delivery. The light audit is a flat $280 and is deducted if you continue with us.',
    },
    {
      q: 'I live abroad. Can you run the whole thing without me?',
      a: 'Yes, with the design + delivery service. You get a written update with photos every Friday, a shared budget sheet with every invoice, and a video call whenever you need one.',
    },
    {
      q: 'Do you work with my builder, or only with yours?',
      a: 'Either. Our drawings are detailed enough for any competent crew. If you need a builder, we introduce two we have worked with and you contract them directly.',
    },
    {
      q: 'How soon can you start?',
      a: 'We take on six projects a year, so usually within four to eight weeks. The light audit can often happen sooner, and it is useful on its own.',
    },
    {
      q: 'My flat faces north and feels dark. Is it hopeless?',
      a: 'No. North light is even and kind to colour. Most dark north flats are dark because of deep plans and heavy finishes, and both can be changed.',
    },
    {
      q: 'What if I only want advice, not a full project?',
      a: 'Book the light audit. You leave with a plan of what to change, and you can do it yourself, with your builder, or with us later.',
    },
  ],
};

export const contact = {
  hour: '21:00',
  label: 'Contact',
  title: 'Book a 30‑minute consultation.',
  text: 'Tell us about the flat. We reply within 48 hours with a time to talk and an honest view of whether we are the right studio for it.',
  form: {
    name: { label: 'Your name' },
    email: { label: 'Email', placeholder: 'name@example.com' },
    area: { label: 'Area of the flat', unit: 'm²' },
    facing: {
      label: 'Which way the main windows face',
      options: ['North', 'South', 'East', 'West', 'Two or more sides', 'Not sure'],
    },
    service: {
      label: 'Service',
      options: ['Light audit', 'Design project', 'Design + delivery', 'Not sure yet'],
    },
    budget: {
      label: 'Budget for works and furniture',
      options: ['Under $30k', '$30–60k', '$60–100k', 'Over $100k', 'Not decided'],
    },
    start: {
      label: 'When you would like to start',
      options: ['Within a month', 'In 1–3 months', 'Later this year', 'Just exploring'],
    },
    message: { label: 'Anything else', placeholder: 'Building, floor, what bothers you about the light.' },
    submit: 'Send request by email',
    help: 'Opens your email app with the details filled in. Nothing is sent until you press send there.',
    sent: 'Your email app should now be open. If it is not, write to',
    errors: {
      name: 'Enter your name.',
      email: 'Enter an email address with an @.',
      area: 'Enter the area in square metres, from 20 to 1000.',
    },
  },
  direct: [
    { label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
    { label: 'Telegram', value: brand.telegramHandle, href: brand.telegram },
    { label: 'Studio', value: 'Podil, Kyiv · by appointment', href: null },
  ],
};

export const footer = {
  disclaimer: 'Oriel is a concept studio. Projects, people and figures are illustrative.',
  copyright: `© ${new Date().getFullYear()} Oriel`,
};
