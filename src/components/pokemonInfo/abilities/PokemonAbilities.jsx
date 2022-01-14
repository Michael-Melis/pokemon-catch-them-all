import React from "react";
import { StyledPokemonAbilities } from "./PokemonAbilities.styles";

const PokemonAbilities = ({ selectedPokemonInfo }) => {
  return (
    <StyledPokemonAbilities>
      <h1>Main abilities:</h1>
      <div>
        {selectedPokemonInfo.abilities.map((ability) => (
          <h2 key={ability.slot}>- {ability.ability.name}</h2>
        ))}
      </div>
    </StyledPokemonAbilities>
  );
};

export default PokemonAbilities;
