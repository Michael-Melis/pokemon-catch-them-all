import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  pokemonArrayDataState,
  allPokemonsDataViewState,
  allPokemonsTypeInfoState,
  pokemonTypeSelectState,
} from "../../../atom/atom";
import PokemonView from "./pokemonView/PokemonView";
import { nanoid } from "nanoid";
import axios from "axios";
import {
  StyledAllPokemonsView,
  StyledTypeDivBg,
  StyledPokemonDiv,
} from "./PokemonList.styles";
import { Autocomplete, TextField } from "@mui/material";

const PokemonList = () => {
  const allPokemons = useRecoilValue(pokemonArrayDataState);
  const [allPokemonArray, setAllPokemonArray] = useRecoilState(
    allPokemonsDataViewState
  );
  const pokemonTypeSelect = useRecoilValue(pokemonTypeSelectState);

  const renderTypeSwitch = (pokemonTypeSelect) => {
    switch (pokemonTypeSelect) {
      case "fire":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "grass":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "poison":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "water":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "electric":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "ice":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "fighting":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "ground":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "flying":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "psychic":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "bug":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "rock":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "ghost":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "dragon":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "dark":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "steel":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "fairy":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );
      case "normal":
        return allPokemonArray.filter(
          (obj) => obj.types[0].type.name === pokemonTypeSelect
        );

      default:
        return allPokemonArray;
    }
  };

  useEffect(() => {
    const fetchAllPokemonsData = async () => {
      const pokemonInfoArray = [];
      allPokemons.forEach((obj) => {
        const res = axios.get(obj.url);
        pokemonInfoArray.push(res);
      });
      const results = await Promise.all(pokemonInfoArray);
      setAllPokemonArray(results.map((result) => result.data));
    };
    fetchAllPokemonsData();
  }, [allPokemons]);
  console.log(renderTypeSwitch(pokemonTypeSelect));
  return allPokemonArray ? (
    <StyledAllPokemonsView>
      {renderTypeSwitch(pokemonTypeSelect).map((pokemon, index) => (
        <StyledPokemonDiv key={nanoid()}>
          <PokemonView pokemon={pokemon} />
          {pokemon.types.map((type) => (
            <StyledTypeDivBg type={type} key={nanoid()}>
              {type.type.name}
            </StyledTypeDivBg>
          ))}
        </StyledPokemonDiv>
      ))}
    </StyledAllPokemonsView>
  ) : (
    ""
  );
};

export default PokemonList;
