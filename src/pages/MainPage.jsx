import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { pokemonArrayDataState, selectedPokemonState } from "../atom/atom";
import SelectedPokemonInfo from "../components/SelectedPokemonInfo";
import { StyledBody, StyledMainHeader } from "../styles/MainPage.styles";

import AutoCompletePokemons from "./../components/AutoCompletePokemons";

const MainPage = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonArrayDataState);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //151 kanto-898 all
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
        );
        console.log(res);
        setPokemons(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemonData();
  }, []);

  return (
    <StyledBody>
      <StyledMainHeader>
        <h1>Pokedex</h1>
        <AutoCompletePokemons />
      </StyledMainHeader>
      <SelectedPokemonInfo />
    </StyledBody>
  );
};

export default MainPage;
