import React from "react";
import { StyledSinglePokemonViewDiv } from "./PokemonView.styles";

const PokemonView = ({ pokemon, index }) => {
  const number = (index) => {
    if (index < 10) {
      return "00" + index;
    } else if (index > 9 && index < 100) {
      return "0" + index;
    } else {
      return index;
    }
  };
  return (
    <StyledSinglePokemonViewDiv>
      <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
      <h2>
        {`
        #${number(index + 1)} ${pokemon.name}`}
      </h2>
    </StyledSinglePokemonViewDiv>
  );
};

export default PokemonView;
