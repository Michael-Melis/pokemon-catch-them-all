import React from "react";
import { useRecoilValue } from "recoil";
import {
  pokemonArrayDataState,
  selectedPokemonInfoState,
} from "./../../../atom/atom";

const PokemonAbilities = () => {
  const selectedPokemonInfo = useRecoilValue(selectedPokemonInfoState);
  const arrPokemons = useRecoilValue(pokemonArrayDataState);

  console.log(selectedPokemonInfo);
  return (
    <div>
      <h2>Abilities</h2>
    </div>
  );
};

export default PokemonAbilities;
