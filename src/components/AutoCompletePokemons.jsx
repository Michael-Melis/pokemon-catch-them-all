import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRecoilValue, useRecoilState } from "recoil";
import { pokemonArrayDataState, selectedPokemonState } from "../atom/atom";
import {
  StyledInputTextField,
  StyledInputDiv,
} from "../styles/AutoCompletePokemons.styles";

const AutoCompletePokemons = () => {
  const [selectedPokemon, setSelectedPokemon] =
    useRecoilState(selectedPokemonState);

  const arrPokemons = useRecoilValue(pokemonArrayDataState);

  return (
    <StyledInputDiv>
      <Autocomplete
        options={arrPokemons}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <StyledInputTextField
            {...params}
            required
            placeholder="Select a Pokemon"
            variant="standard"
          />
        )}
        onChange={(_, data) => setSelectedPokemon(data)}
      />
    </StyledInputDiv>
  );
};

export default AutoCompletePokemons;
