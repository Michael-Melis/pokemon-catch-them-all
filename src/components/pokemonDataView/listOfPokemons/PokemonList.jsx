import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  pokemonArrayDataState,
  allPokemonsDataViewState,
  allPokemonsTypeInfoState,
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
  const [typeArr, setTypeArr] = useState([]);

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
  console.log(typeArr);
  return allPokemonArray ? (
    <StyledAllPokemonsView>
      {allPokemonArray.map((pokemon, index) => (
        <StyledPokemonDiv key={nanoid()}>
          <PokemonView pokemon={pokemon} index={index} />
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
