import { useForm } from "react-hook-form";
import React from "react";
import { useRecoilValue } from "recoil";
import { pokemonArrayDataState } from "../atom/atom";
import AutoCompletePokemons from "./AutoCompletePokemons";

const MainMenuInput = () => {
  const arrPokemons = useRecoilValue(pokemonArrayDataState);

  const { handleSubmit, reset, control } = useForm();

  const handlePokemonSearch = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handlePokemonSearch)}>
      {arrPokemons ? (
        <>
          <AutoCompletePokemons control={control} />
        </>
      ) : (
        "Loading..."
      )}
    </form>
  );
};

export default MainMenuInput;
