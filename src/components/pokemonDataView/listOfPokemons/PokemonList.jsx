import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  pokemonArrayDataState,
  allPokemonsDataViewState,
} from "../../../atom/atom";
import PokemonView from "./pokemonView/PokemonView";
import { nanoid } from "nanoid";
import axios from "axios";
import { StyledAllPokemonsView } from "./PokemonList.styles";

const PokemonList = () => {
  const allPokemons = useRecoilValue(pokemonArrayDataState);
  const [allPokemonArray, setAllPokemonArray] = useRecoilState(
    allPokemonsDataViewState
  );

  useEffect(() => {
    const fetchAllPokemonsData = async () => {
      const promises = [];

      allPokemons.forEach((obj) => {
        const res = axios.get(obj.url);
        promises.push(res);
      });
      const results = await Promise.all(promises);
      setAllPokemonArray(results.map((result) => result.data));
    };
    fetchAllPokemonsData();
  }, [allPokemons]);

  console.log(allPokemonArray);
  return allPokemonArray ? (
    <StyledAllPokemonsView>
      {allPokemonArray.map((pokemon, index) => (
        <div key={nanoid()}>
          <PokemonView pokemon={pokemon} index={index} />
        </div>
      ))}
    </StyledAllPokemonsView>
  ) : (
    ""
  );
};

export default PokemonList;
