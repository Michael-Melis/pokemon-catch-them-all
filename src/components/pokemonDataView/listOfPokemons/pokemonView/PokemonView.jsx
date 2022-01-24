import React from "react";
import { StyledSinglePokemonViewDiv } from "./PokemonView.styles";
import { Link } from "react-router-dom";

const PokemonView = ({ pokemon }) => {
  const createPokemonId = (id) => {
    if (id < 10) {
      return `#00${id}`;
    } else if (id > 9 && id < 100) {
      return `#0${id}`;
    } else return `#${id}`;
  };
  return (
    <StyledSinglePokemonViewDiv>
      <Link to={`${pokemon.name}`}>
        <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />

        <h2>
          {`${createPokemonId(pokemon.id)}
         ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}
        </h2>
      </Link>
    </StyledSinglePokemonViewDiv>
  );
};

export default PokemonView;
