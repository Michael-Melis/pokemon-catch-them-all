import React from "react";
import { StyledPokemonType } from "./PokemonType.styles";

const PokemonType = ({ selectedPokemonInfo }) => {
  return (
    <StyledPokemonType>
      <h1>{`${selectedPokemonInfo.name}'s type: `}</h1>
      {selectedPokemonInfo.types.map((type) => (
        <h2 key={type.slot}>- {type.type.name}</h2>
      ))}
    </StyledPokemonType>
  );
};

export default PokemonType;
