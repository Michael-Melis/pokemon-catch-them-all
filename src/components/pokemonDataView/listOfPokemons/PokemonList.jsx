import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  pokemonArrayDataState,
  allPokemonsDataViewState,
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

const PokemonList = () => {
  const allPokemons = useRecoilValue(pokemonArrayDataState);
  const [allPokemonArray, setAllPokemonArray] = useRecoilState(
    allPokemonsDataViewState
  );
  const pokemonTypeSelect = useRecoilValue(pokemonTypeSelectState);

  const renderTypeSwitch = (pokemonTypeSelect) => {
    if (pokemonTypeSelect === "all") {
      return allPokemonArray;
    }

    return allPokemonArray.filter((obj) => {
      return obj.types.some((type) => {
        return type.type.name === pokemonTypeSelect;
      });
    });
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
