import React from "react";
import { StyledBasicInfo, StyledStats } from "./PokemonBasicInfo.styles";
import { nanoid } from "nanoid";
import PokemonStatsInfo from "./pokemonStatsInfo/PokemonStatsInfo";

const PokemonBasicInfo = ({ pokemonImg, selectedPokemonInfo }) => {
  return (
    <div>
      <StyledBasicInfo>
        <h1>
          You choosed:
          <span>
            #{selectedPokemonInfo.id}{" "}
            {`${selectedPokemonInfo.name
              .charAt(0)
              .toUpperCase()}${selectedPokemonInfo.name.slice(1)}`}
          </span>
        </h1>

        <img src={pokemonImg} alt={selectedPokemonInfo.name} />
      </StyledBasicInfo>
      <div>
        {selectedPokemonInfo.stats.map((obj) => (
          <StyledStats key={nanoid()}>
            <PokemonStatsInfo obj={obj} />
          </StyledStats>
        ))}
      </div>
    </div>
  );
};

export default PokemonBasicInfo;
