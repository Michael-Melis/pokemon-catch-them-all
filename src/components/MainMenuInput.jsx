import React from "react";
import { useRecoilValue } from "recoil";
import { pokemonArrayDataState, selectedPokemonState } from "../atom/atom";
import AutoCompletePokemons from "./AutoCompletePokemons";

const MainMenuInput = () => {
  const arrPokemons = useRecoilValue(pokemonArrayDataState);

  return (
    <form>
      {arrPokemons ? (
        <>
          <AutoCompletePokemons />
        </>
      ) : (
        "Loading..."
      )}
    </form>
  );
};

export default MainMenuInput;
