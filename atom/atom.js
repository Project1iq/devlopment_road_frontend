import { atom } from "recoil";

export const langState = atom({
  key: "langState",
  default: null,
});

export const scrollPositionState = atom({
  key: "scrollPositionState",
  default: 0,
});

export const navHeightState = atom({
  key: "navHeightState",
  default: 0,
});

