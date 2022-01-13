import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemons = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState();

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(`${pokemon.url}`);
      console.log(res.data.sprites.other["official-artwork"]["front_default"]);
      setPokemonData(res.data.sprites.other["official-artwork"].front_default);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemonData} />
      <button onClick={fetchPokemon}>Link</button>
    </div>
  );
};

export default Pokemons;
