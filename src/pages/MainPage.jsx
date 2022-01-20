import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { pokemonArrayDataState, selectedPokemonState } from "../atom/atom";
import SelectedPokemonInfo from "../components/SelectedPokemonInfo";
import { StyledBody, StyledMainHeader } from "../styles/MainPage.styles";
import PokemonList from "../components/pokemonDataView/listOfPokemons/PokemonList";
import AutoCompletePokemons from "./../components/AutoCompletePokemons";
import PokemonFilter from "../components/PokemonFilter";

const MainPage = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonArrayDataState);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //151 kanto-898 all
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
        );

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
        <PokemonFilter />
      </StyledMainHeader>
      <SelectedPokemonInfo />
      <PokemonList />
    </StyledBody>
  );
};

export default MainPage;
