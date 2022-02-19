import React from 'react';
import { StyledPokemonType, StyledPokemonTypesDiv } from './PokemonType.styles';
import SelectedPokemonTypeInfo from './SelectedPokemonTypeInfo/SelectedPokemonTypeInfo';

const PokemonType = ({ selectedPokemonInfo }) => {
  return (
    <StyledPokemonType>
      <h1>{`${selectedPokemonInfo.name.charAt(0).toUpperCase()}${selectedPokemonInfo.name.slice(1)}'s type: `}</h1>
      <StyledPokemonTypesDiv>
        {selectedPokemonInfo.types.map((type) => (
          <div key={type.slot}>
            <SelectedPokemonTypeInfo type={type} selectedPokemonInfo={selectedPokemonInfo} />
          </div>
        ))}
      </StyledPokemonTypesDiv>
    </StyledPokemonType>
  );
};

export default PokemonType;
