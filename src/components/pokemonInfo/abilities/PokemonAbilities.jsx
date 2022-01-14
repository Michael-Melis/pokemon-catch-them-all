import React from "react";
import { useRecoilValue } from "recoil";
import {
  pokemonArrayDataState,
  selectedPokemonInfoState,
} from "./../../../atom/atom";

const PokemonAbilities = ({ ability }) => {
  const selectedPokemonInfo = useRecoilValue(selectedPokemonInfoState);

  console.log(selectedPokemonInfo);
  return (
    <div>
      <h2>{ability.ability.name}</h2>
    </div>
  );
};

export default PokemonAbilities;
