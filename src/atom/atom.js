import { atom } from "recoil";

export const pokemonArrayDataState = atom({
  key: "pokemonArrayDataState",
  default: [],
});

export const selectedPokemonState = atom({
  key: "selectedPokemonState",
  default: {},
});

export const selectedPokemonInfoState = atom({
  key: "selectedPokemonInfoState",
  default: [],
});

export const selectedPokemonImgState = atom({
  key: "selectedPokemonImgState",
  default: "",
});