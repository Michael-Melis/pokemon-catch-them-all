import React, { useEffect } from "react";
import MainMenuInput from "../components/MainMenuInput";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { pokemonArrayDataState, selectedPokemonState } from "../atom/atom";
import SelectedPokemonInfo from "../components/SelectedPokemonInfo";

const MainPage = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonArrayDataState);
  const selectedPokemonInfo = useRecoilValue(selectedPokemonState);
  console.log(selectedPokemonInfo);

  useEffect(() => {
    const fetchPokemonData = async () => {
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
    <div>
      <h1>Pokedex</h1>
      <MainMenuInput />
      <SelectedPokemonInfo />
    </div>
  );
};

export default MainPage;
