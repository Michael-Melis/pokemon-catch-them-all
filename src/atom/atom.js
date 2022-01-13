import { atom } from "recoil";

export const pokemonArrayDataState = atom({
  key: "pokemonArrayDataState",
  default: [],
});

export const selectedPokemonState = atom({
  key: "selectedPokemonState",
  default: {},
});
