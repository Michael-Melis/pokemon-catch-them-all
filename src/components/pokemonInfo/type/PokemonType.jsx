import React from "react";
import { StyledPokemonType } from "./PokemonType.styles";
import SelectedPokemonTypeInfo from "./SelectedPokemonTypeInfo/SelectedPokemonTypeInfo";

const PokemonType = ({ selectedPokemonInfo }) => {
  console.log(selectedPokemonInfo);
  return (
    <StyledPokemonType>
      <h1>{`${selectedPokemonInfo.name}'s type: `}</h1>
      <div>
        {selectedPokemonInfo.types.map((type) => (
          <div key={type.slot}>
            <SelectedPokemonTypeInfo
              type={type}
              selectedPokemonInfo={selectedPokemonInfo}
            />
          </div>
        ))}
      </div>
    </StyledPokemonType>
  );
};

export default PokemonType;
