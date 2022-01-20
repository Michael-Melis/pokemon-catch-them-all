import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import {
  StyledInputDiv,
  StyledInputTextField,
} from "../styles/AutoCompletePokemons.styles";

const PokemonFilter = () => {
  const typeArray = [
    {
      id: 1,
      name: "fire",
    },
    {
      id: 2,
      name: "grass",
    },
    {
      id: 3,
      name: "poison",
    },
    {
      id: 4,
      name: "water",
    },
    {
      id: 5,
      name: "electric",
    },
    {
      id: 6,
      name: "ice",
    },
    {
      id: 7,
      name: "fighting",
    },
    {
      id: 8,
      name: "ground",
    },
    {
      id: 9,
      name: "flying",
    },
    {
      id: 10,
      name: "psychic",
    },
    {
      id: 11,
      name: "bug",
    },
    {
      id: 12,
      name: "rock",
    },
    {
      id: 13,
      name: "ghost",
    },
    {
      id: 14,
      name: "dark",
    },
    {
      id: 15,
      name: "steel",
    },
    {
      id: 16,
      name: "fairy",
    },
    {
      id: 17,
      name: "normal",
    },
  ];
  return (
    <StyledInputDiv>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={typeArray}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Pokemon Types" />
        )}
      />
    </StyledInputDiv>
  );
};

export default PokemonFilter;
