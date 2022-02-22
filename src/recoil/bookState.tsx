import { atom } from "recoil";

export const bookState = atom({
  key: "bookState",
  default: {
    title: null,
    authors: null,
    url: null,
  },
});
