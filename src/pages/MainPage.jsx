import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { pokemonArrayDataState } from '../atom/atom';
import SelectedPokemonInfo from '../components/SelectedPokemonInfo';
import { StyledBody, StyledMainHeader } from '../styles/MainPage.styles';
import PokemonList from '../components/pokemonDataView/listOfPokemons/PokemonList';
import AutoCompletePokemons from './../components/AutoCompletePokemons';
import TypeSelectOfPokemon from '../components/TypeSelectOfPokemon';

const MainPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [pokemons, setPokemons] = useRecoilState(pokemonArrayDataState);

  useEffect(() => {
    const fetchPokemonData = async () => {
      //151 kanto-898 all
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');

        setPokemons(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledBody>
      <StyledMainHeader>
        <h1>Pokedex</h1>
        <AutoCompletePokemons />
        <TypeSelectOfPokemon />
      </StyledMainHeader>

      <SelectedPokemonInfo />
      <PokemonList />
    </StyledBody>
  );
};

export default MainPage;
