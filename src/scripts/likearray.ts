export type Like = Readonly<{
  img: readonly string[];
  text: string;
}>;

const likes: readonly Like[] = [
  {
    img: [
      "/like/buma_1.png",
      "/like/buma_2.png",
      "/like/buma_3.png",
    ],
    text: "My cat",
  },
  {
    img: [
      "/like/gustav_1.png",
      "/like/gustav_2.png",
      "/like/gustav_3.png",
    ],
    text: "My boyfriend",
  },
  {
    img: [
      "/like/garn_1.png",
      "/like/garn_2.png",
      "/like/garn_3.png",
    ],
    text: "Knitting and crocheting",
  },
  {
    img: [
      "/like/kaffe_1.png",
      "/like/kaffe_2.png",
      "/like/kaffe_3.png",
      "/like/kaffe_4.png",
    ],
    text: "Coffee",
  },
  {
    img: [
      "/like/rejse_1.png",
      "/like/rejse_2.png",
    ],
    text: "Traveling",
  },
];

export const likearray = Object.freeze(likes);