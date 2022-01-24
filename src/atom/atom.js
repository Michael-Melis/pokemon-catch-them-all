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
  default: {},
});

export const selectedPokemonImgState = atom({
  key: "selectedPokemonImgState",
  default: "",
});

export const selectedPokemonEvolutionState = atom({
  key: "selectedPokemonEvolutionState",
  default: {},
});
export const allPokemonsDataViewState = atom({
  key: "allPokemonsDataViewState",
  default: [],
});

export const allPokemonsTypeInfoState = atom({
  key: "allPokemonsTypeInfoState",
  default: [],
});
export const pokemonTypeSelectState = atom({
  key: "pokemonTypeSelectState",
  default: "all",
});
export const selectedPokemonInformationState = atom({
  key: "selectedPokemonInformationState",
  default: [],
});
