import React from "react";
import { StyledPokemonAbilities } from "./PokemonAbilities.styles";
import SelectedPokemonAbilityInfo from "./selectedPokemonAbilityInfo/SelectedPokemonAbilityInfo";

const PokemonAbilities = ({ selectedPokemonInfo }) => {
  return (
    <StyledPokemonAbilities>
      <h1>Main abilities:</h1>
      <div>
        {selectedPokemonInfo.abilities.map((ability) => (
          <div key={ability.slot}>
            <SelectedPokemonAbilityInfo
              ability={ability}
              selectedPokemonInfo={selectedPokemonInfo}
            />
          </div>
        ))}
      </div>
    </StyledPokemonAbilities>
  );
};

export default PokemonAbilities;
