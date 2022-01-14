import React from "react";
import { StyledBasicInfo } from "./PokemonBasicInfo.styles";

const PokemonBasicInfo = ({ pokemonImg, selectedPokemonInfo }) => {
  return (
    <StyledBasicInfo>
      <h1>
        You choosed:
        <span>
          {" "}
          #{selectedPokemonInfo.id} {selectedPokemonInfo.name}
        </span>
      </h1>

      <img src={pokemonImg} alt={selectedPokemonInfo.name} />
    </StyledBasicInfo>
  );
};

export default PokemonBasicInfo;
