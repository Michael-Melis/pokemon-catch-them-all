import React, { useEffect, useState } from "react";
import { StyledSinglePokemonViewDiv } from "./PokemonView.styles";
import axios from "axios";
import { nanoid } from "nanoid";
import { allPokemonsTypeInfoState } from "../../../../atom/atom";
import { useRecoilState } from "recoil";

const PokemonView = ({ pokemon }) => {
  const [typeInfo, setTypeInfo] = useRecoilState(allPokemonsTypeInfoState);

  // const number = (index) => {
  //   if (index < 10) {
  //     return "00" + index;
  //   } else if (index > 9 && index < 100) {
  //     return "0" + index;
  //   } else {
  //     return index;
  //   }
  // };

  useEffect(() => {
    const fetchAllPokemonsData = async () => {
      const array = [];
      pokemon.types.forEach((obj) => {
        try {
          const res = axios.get(obj.type.url);
          array.push(res);
        } catch (error) {
          console.log(error);
        }
      });
      const result = await Promise.all(array);
      // setTypeInfo(result);
    };

    fetchAllPokemonsData();
  }, [pokemon]);

  return (
    <StyledSinglePokemonViewDiv>
      <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
      <h2>
        {`
         ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}
      </h2>
    </StyledSinglePokemonViewDiv>
  );
};

export default PokemonView;
