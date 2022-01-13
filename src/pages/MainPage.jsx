import React, { useEffect } from "react";
import MainMenuInput from "../components/MainMenuInput";
import axios from "axios";
import { useRecoilState } from "recoil";
import { pokemonArrayDataState } from "../atom/atom";

const MainPage = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonArrayDataState);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50"
        );
        console.log(res.data);
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
    </div>
  );
};

export default MainPage;
