import buma1 from "../assets/like/buma_1.png";
import buma2 from "../assets/like/buma_2.png";
import buma3 from "../assets/like/buma_3.png";

import gustav1 from "../assets/like/gustav_1.png";
import gustav2 from "../assets/like/gustav_2.png";
import gustav3 from "../assets/like/gustav_3.png";

import garn1 from "../assets/like/garn_1.png";
import garn2 from "../assets/like/garn_2.png";
import garn3 from "../assets/like/garn_3.png";

import kaffe1 from "../assets/like/kaffe_1.png";
import kaffe2 from "../assets/like/kaffe_2.png";

import rejse1 from "../assets/like/rejse_1.png";
import rejse2 from "../assets/like/rejse_2.png";

import type { ImageMetadata } from "astro";

export type Like = Readonly<{
  img: readonly ImageMetadata[];
  text: string;
}>;

const likes: readonly Like[] = [
  {
    img: [buma1, buma2, buma3],
    text: "My cat",
  },
  {
    img: [gustav3, gustav1, gustav2],
    text: "My boyfriend",
  },
  {
    img: [garn3, garn1, garn2],
    text: "Knitting and crocheting",
  },
  {
    img: [kaffe1, kaffe2],
    text: "Coffee",
  },
  {
    img: [rejse1, rejse2],
    text: "Traveling",
  },
];

export const likearray = Object.freeze(likes);