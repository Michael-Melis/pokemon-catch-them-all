import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { StyledInputDiv } from "../styles/AutoCompletePokemons.styles";
import { typeArray } from "../utils/pokemonTypeArray";
import { useRecoilState } from "recoil";
import { pokemonTypeSelectState } from "../atom/atom";

const TypeSelectOfPokemon = () => {
  const [pokemonTypeSelect, setPokemonTypeSelect] = useRecoilState(
    pokemonTypeSelectState
  );

  return (
    <StyledInputDiv>
      <Autocomplete
        options={typeArray}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.name}
        // defaultValue={{ id: 0, name: "all" }}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            placeholder="Select a Pokemon"
            variant="standard"
          />
        )}
        onChange={(_, data) => setPokemonTypeSelect(data.name)}
      />
    </StyledInputDiv>
  );
};

export default TypeSelectOfPokemon;
