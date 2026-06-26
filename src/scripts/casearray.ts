export type Case = {
  slug: string;
  titel: string;
  date: string;
  video: string;
  text: string[];
  displayText: string;
  imgdisplay: string[];
  programs: string[];
  url: string;
};

export const casearray: Case[] = [
  {
    slug: "aaben",
    url: "https://aaben-perlin.netlify.app/",
    titel: `Label generator for "Åben øl"`,
    date: "2026-03-06",
    programs: [
      "Figma",
      "p5.js",
      "Three.js",
      "Shoelace",
      "Photoshop",
    ],
    video: "/cases/aaben/aaben.mp4",
    text: [
      "Conceptualization, design and coded solution of a visual design system, which ÅBEN can use to create label designs for their many different beers.",
    ],
    displayText: "Conceptualization, design and coded solution of a visual design system, which ÅBEN can use to create label designs for their many different beers.",
    imgdisplay: [
      "/cases/aaben/aaben01.png",
      "/cases/aaben/aaben02.png",
      "/cases/aaben/aaben03.png",
      "/cases/aaben/aaben08.png",
      "/cases/aaben/aaben04.png",
    ],
  },
  {
    slug: "shecanplay",
    url: "",
    titel: "Rebrand of SheCanPlay",
    date: "2025-12-12",
    programs: [
      "Figma",
      "p5.js",
    ],
    video: "/cases/shecanplay/blob.mp4",
    text: [
      "Koncept: formlessness.",
      `“You can remain formless. You can take a form. You can take a form now, you can take a form later. Your choice, your need.”`,
      "SheCanPlay is a Danish nonprofit organization that works to strengthen young women's and gender minorities' participation, visibility and opportunities in the music industry. The organization offers free talent development programs, community, industry insight and access to creative facilities.",
      `The organization desires a visual identity that opens up for an 'endorsed brands' structure for the artists who wish to signal their affiliation with SheCanPlay, without overpowering the emerging artist's own identity.`,
    ],
    displayText: "This project explores the concept of formlessness as a flexible visual and conceptual framework for SheCanPlay.",
    imgdisplay: [
      "/cases/shecanplay/shecanplay3.png",
      "/cases/shecanplay/shecanplay4.png",
      "/cases/shecanplay/shecanplay9.png",
      "/cases/shecanplay/shecanplay5.png",
      "/cases/shecanplay/shecanplay7.png",
      "/cases/shecanplay/shecanplay10.png",
    ],
  },
  {
    slug: "havskaer",
    url: "https://havskaer.netlify.app/",
    titel: `Exam: "Havskær"`,
    date: "2025-01-21",
    programs: [
      "Illustrator",
      "p5.js",
    ],
    video: "/cases/havskaer/havskaer.mp4",
    text: [
      "Havskær is a conceptual jewelry brand and webshop universe inspired by the ocean, created with a focus on sustainability and storytelling.",
      "The project combines a trend-based mermaidcore aesthetic with the purpose of raising awareness about ocean conservation through jewelry design.",
      "As part of the project, I developed the brand identity and visual direction, including the logo, color palette, typography, and an organic visual language inspired by the movements and structures of the sea.",
      "In addition, I designed and developed an interactive certification generator that creates unique certificates with each jewelry purchase and communicates the customer’s contribution to ocean preservation through generative patterns based on Perlin noise algorithms.",
    ],
    displayText: `This project presents "Havskær", a conceptual jewelry brand inspired by the ocean, with a strong focus on sustainability and storytelling.`,
    imgdisplay: [
      "/cases/havskaer/havskaer-1.png",
      "/cases/havskaer/havskaer-10.png",
      "/cases/havskaer/havskaer-3.png",
      "/cases/havskaer/havskaer-6.png",
      "/cases/havskaer/havskaer-8.png",
      "/cases/havskaer/havskaer-9.png",
    ],
  },
  {
    slug: "space",
    url: "https://hovedrum.netlify.app/",
    titel: "Space - take your thoughts out",
    date: "2026-06-19",
    programs: [
      "Astro",
      "Generative AI",
      "Tailwind"
    ],
    video: "/cases/space/space.mp4",
    text: [
      `Space is a concept for a digital tool that helps young people process their thoughts and feelings by combining an AI conversation with the principle behind "walk and talk" therapy.`,
      "The tool is made for Headspace. Headspace is a free and anonymous counselling service for young people aged 12 to 25, where volunteer counsellors listen without judgement and take their starting point in the young person's own needs.",
      `The user is met by a chat interface designed to lower the threshold by meeting young people in a format they already know. The messages disappear along the way, so it feels safe to open up and reflect honestly. The AI guides the conversation rather than "treating" it, and the entire experience is designed with ethical and psychological considerations in mind.`,
      "The aim is to leave the user with greater clarity, to make them feel better equipped to handle their life, and to create a habit of movement in nature while giving the user a bodily experience that it works.",
      "The visual elements in the product were created using a generative text-to-video AI (Creative Fabrica's AI Video Generator), where I used prompts to train the model to deliver the desired output."
    ],
    displayText: `Space is a concept for a digital tool that helps young people process their thoughts and feelings by combining an AI conversation with the principle behind "walk and talk" therapy.`,
    imgdisplay: [
      "/cases/space/space-1.png",
      "/cases/space/space-2.png",
      "/cases/space/space.gif",
    ],
  },
  {
    slug: "munich",
    url: "",
    titel: "City Branding: Munich",
    date: "2026-02-06",
    programs: [
      "Figma",
    ],
    video: "/cases/munich/munich.mp4",
    text: [
      "I have designed a dynamic visual identity for Munich based on the city's flag, which consists of black and yellow diamonds.",
      "The diamond is split into triangles, which serve as the identity's modular building blocks. The triangles can be combined freely and create a dynamic, changeable system.",
    ],
    displayText: "This project presents a dynamic visual identity for Munich inspired by the city's iconic flag with black and yellow diamonds.",
    imgdisplay: [
      "/cases/munich/munich02.png",
      "/cases/munich/munich03.png",
      "/cases/munich/munich04.png",
      "/cases/munich/munich07.png",
      "/cases/munich/munich05.png",
      "/cases/munich/munich06.png",
    ],
  },
  {
    slug: "ikeamapper",
    url: "",
    titel: "Projection Mapping X IKEA",
    date: "2026-03-27",
    programs: [
      "TouchDesigner",
      "MadMapper",
    ],
    video: "/cases/ikea/ikea1.mp4",
    text: [
      `An interactive projection mapping project created for IKEA, exploring how everyday objects become part of people's lives over time.`,
      "Through three rice paper lamps the installation visualizes changing life situations and relationships surrounding the same product.",
      "By integrating authentic, user-submitted material, the project highlights emotional value, reuse, and longevity, conveying a sustainable narrative of design as something that follows us throughout life.",
    ],
    displayText: "This interactive projection mapping project for IKEA explores how everyday objects become part of people's lives over time.",
    imgdisplay: [
      "/cases/ikea/ikea-2.gif",
      "/cases/ikea/ikea-1.png",
      "/cases/ikea/ikea-5.png",
      "/cases/ikea/ikea-3.png",
    ],
  },
];