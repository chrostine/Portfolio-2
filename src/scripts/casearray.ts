export type Case = {
  slug: string;
  titel: string;
  date: string;
  billede: string;
  gif: string;
  gifImg: string;
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
            "3D",
            "Photoshop",
        ],
        billede: "/cases/aaben/aaben08.png",
        gif: "/cases/aaben/aaben.gif",
        gifImg: "/cases/aaben/aaben.jpg",
        text: [
            "Conceptualization, design and coded solution of a visual design system, which ÅBEN can use to create label designs for their many different beers.",
        ],
        displayText: "Conceptualization, design and coded solution of a visual design system, which ÅBEN can use to create label designs for their many different beers.",
        imgdisplay: [
            "/cases/aaben/aaben08.png",
            "/cases/aaben/aaben06.png",
            "/cases/aaben/aaben05.png",
        ],
    },
    {
        slug: "shecanplay",
        url: "",
        titel: "Rebrand of SheCanPlay",
        date: "2025-12-12",
        programs: [
            "Figma",
            "p5.js"
        ],
        billede: "/cases/shecanplay/shecanplay9.png",
        gif: "/cases/shecanplay/shecanblob.gif",
        gifImg: "/cases/shecanplay/shecanblob.jpg",
        text: [
            "Koncept: formlessness.",
            `“You can remain formless. You can take a form. You can take a form now, you can take a form later. Your choice, your need.”`,
            "SheCanPlay is a Danish nonprofit organization that works to strengthen young women's and gender minorities' participation, visibility and opportunities in the music industry. The organization offers free talent development programs, community, industry insight and access to creative facilities.",
            `The organization desires a visual identity that opens up for an 'endorsed brands' structure for the artists who wish to signal their affiliation with SheCanPlay, without overpowering the emerging artist's own identity.`
        ],
        displayText: "This project explores the concept of formlessness as a flexible visual and conceptual framework for SheCanPlay.",
        imgdisplay: [
            "/cases/shecanplay/shecanplay3.png",
            "/cases/shecanplay/shecanplay4.png",
            "/cases/shecanplay/shecanplay5.png",
            "/cases/shecanplay/shecanplay9.png",
            "/cases/shecanplay/shecanplay7.png",
            "/cases/shecanplay/shecanplay10.png",
        ],
    },
    {
        slug: "munich",
        url: "",
        titel: "City Branding: Munich",
        date: "2026-02-06",
        programs: [
        "Figma"
        ],
        billede: "/cases/munich/munich07.png",
        gif: "/cases/munich/munich.gif",
        gifImg: "/cases/munich/munich.jpg",
        text: [
        "I have designed a dynamic visual identity for Munich based on the city's flag, which consists of black and yellow diamonds.",
        "The diamond is split into triangles, which serve as the identity's modular building blocks. The triangles can be combined freely and create a dynamic, changeable system."
        ],
        displayText: "This project presents a dynamic visual identity for Munich inspired by the city's iconic flag with black and yellow diamonds. By dividing the diamond shape into modular triangles, a flexible and adaptable design system is created that can be used across different media and platforms.",
        imgdisplay: [
            "/cases/munich/munich07.png",
            "/cases/munich/munich02.png",
            "/cases/munich/munich03.png",
            "/cases/munich/munich04.png",
            "/cases/munich/munich05.png",
            "/cases/munich/munich06.png",
        ],
    },
    {
    slug: "vikinggame",
    url: "",
    titel: "Game Jam: Dont't drink and bike",
    date: "2026-04-30",
    programs: [
      "Unity",
      "C#",
    ],
    billede: "/cases/viking/viking-2.png",
    gif: "/cases/viking/viking.gif",
    gifImg: "/cases/viking/viking.jpg",
    text: [
      "A simple yet engaging game created for Rådet for Sikker Trafik, designed to raise awareness among young people about the consequences of cycling under the influence.",
      "The game uses a surreal, adventure-like journey as a metaphor for intoxication, illustrating how being caught up in the moment can distort perception and disconnect players from reality.",
      "The game was created in four days as a part of a group project.",
    ],
    displayText: `A game developed for "Rådet for Sikker Trafik" to raise awareness among young people about the risks of cycling under the influence.`,
    imgdisplay: [
      "/cases/viking/viking-2.png",
      "/cases/viking/viking-5.png",
      "/cases/viking/viking-6.png",
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
    billede: "/cases/havskaer/havskaer-10.png",
    gif: "/cases/havskaer/havskaer.gif",
    gifImg: "/cases/havskaer/havskaer.jpg",
    text: [
      "Havskær is a conceptual jewelry brand and webshop universe inspired by the ocean, created with a focus on sustainability and storytelling.",
      "The project combines a trend-based mermaidcore aesthetic with the purpose of raising awareness about ocean conservation through jewelry design.",
      "As part of the project, I developed the brand identity and visual direction, including the logo, color palette, typography, and an organic visual language inspired by the movements and structures of the sea.",
      "In addition, I designed and developed an interactive certification generator that creates unique certificates with each jewelry purchase and communicates the customer’s contribution to ocean preservation through generative patterns based on Perlin noise algorithms.",

    ],
    displayText: `This project presents "Havskær", a conceptual jewelry brand and webshop universe inspired by the ocean, with a strong focus on sustainability and storytelling. The project includes a full visual identity and an interactive certification generator.`,
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
    slug: "ikeamapper",
    url: "",
    titel: "Projection Mapping X IKEA",
    date: "2026-03-27",
    programs: [
      "TouchDesigner",
      "MadMapper",
    ],
    billede: "/cases/ikea/ikea-1.png",
    gif: "/cases/ikea/ikea-1.gif",
    gifImg: "/cases/ikea/ikea-1.jpg",
    text: [
      `An interactive projection mapping project created for IKEA, exploring how everyday objects become part of people's lives over time.`,
      "Through three rice paper lamps the installation visualizes changing life situations and relationships surrounding the same product.",
      "By integrating authentic, user-submitted material, the project highlights emotional value, reuse, and longevity, conveying a sustainable narrative of design as something that follows us throughout life."
    ],
    displayText: "This interactive projection mapping project for IKEA explores how everyday objects become part of people's lives over time. Using three rice paper lamps, the installation visualizes changing life situations and relationships centered around the same product.",
    imgdisplay: [
      "/cases/ikea/ikea-2.gif",
      "/cases/ikea/ikea-1.png",
      "/cases/ikea/ikea-5.png",
    ],
  },
]