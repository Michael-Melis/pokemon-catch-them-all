import React from "react";
import { StyledBasicInfo, StyledStats } from "./PokemonBasicInfo.styles";
import { nanoid } from "nanoid";

const PokemonBasicInfo = ({ pokemonImg, selectedPokemonInfo }) => {
  console.log(selectedPokemonInfo);
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
            <div>
              <h2>{obj.stat.name}</h2>
            </div>
            <div>
              <p
                style={{
                  background: `-webkit-linear-gradient(left, #70d9dd ${obj["base_stat"]}%, white 0%)`,
                }}
              >
                {obj["base_stat"]}
              </p>
            </div>
          </StyledStats>
        ))}
      </div>
    </div>
  );
};

export default PokemonBasicInfo;
