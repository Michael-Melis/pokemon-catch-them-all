import React from "react";
import styled from "styled-components";
import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useRecoilValue, useRecoilState } from "recoil";
import { pokemonArrayDataState, selectedPokemonState } from "../atom/atom";

const AutoCompletePokemons = ({ onChange, control }) => {
  const [selectedPokemon, setSelectedPokemon] =
    useRecoilState(selectedPokemonState);
  const arrPokemons = useRecoilValue(pokemonArrayDataState);
  console.log(selectedPokemon);
  return (
    <Controller
      render={() => (
        <Autocomplete
          options={arrPokemons}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              required
              label="Pokemon name"
              placeholder="Select a Pokemon"
              variant="outlined"
            />
          )}
          onChange={(_, data) => setSelectedPokemon(data)}
        />
      )}
      name="pokemon"
      control={control}
    />
  );
};

export default AutoCompletePokemons;

const StyledTextField = styled(TextField)`
  width: 100vh;
`;
