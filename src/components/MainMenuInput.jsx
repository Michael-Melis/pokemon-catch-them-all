import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useRecoilValue } from "recoil";
import { pokemonArrayDataState } from "../atom/atom";
import styled from "styled-components";
import AutoCompletePokemons from "./AutoCompletePokemons";

const schema = yup.object().shape({
  pokemonName: yup.string().required(),
});

const MainMenuInput = () => {
  const arrPokemons = useRecoilValue(pokemonArrayDataState);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({});

  const handlePokemonSearch = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handlePokemonSearch)}>
      {arrPokemons ? (
        <>
          <AutoCompletePokemons control={control} />

          {/* //   <Controller
        //     name="pokemonName"
        //     control={control}
        //     defaultValue=""
        //     render={({ field }) => (
        //       <TextField
        //         {...field}
        //         size="small"
        //         label="Pokemon name"
        //         type="text"
        //         variant="outlined"
        //         error={!!errors.pokemonName}
        //         helperText={errors ? errors.pokemonName?.message : ""}
        //       />
        //     )}
        //   /> */}
          {/* <Autocomplete
            options={arrPokemons}
            getOptionLabel={(pokemon) => pokemon.name}
            renderInput={(params) => (
              <Controller
                name="pokemonName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <StyledTextField                  
                    {...params}
                    onChange={handleChange}
                    name="Choice"
                    fullWidth
                  />
                )}
              />
            )}
          /> */}

          <Button type="submit">Search</Button>
        </>
      ) : (
        "Loading..."
      )}
    </form>
  );
};

export default MainMenuInput;
