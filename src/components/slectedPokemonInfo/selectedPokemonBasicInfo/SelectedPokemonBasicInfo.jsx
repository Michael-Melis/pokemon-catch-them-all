import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedPokemonInformationState } from "../../../atom/atom";
import { StyledBasicInfo } from "../../pokemonInfo/basicInfo/PokemonBasicInfo.styles";
import { nanoid } from "nanoid";
import { StyledStats } from "../../pokemonInfo/basicInfo/PokemonBasicInfo.styles";
import PokemonStatsInfo from "../../pokemonInfo/basicInfo/pokemonStatsInfo/PokemonStatsInfo";
import { StyledPokemonAbilities } from "./../../pokemonInfo/abilities/PokemonAbilities.styles";
import SelectedPokemonAbilityInfo from "./../../pokemonInfo/abilities/selectedPokemonAbilityInfo/SelectedPokemonAbilityInfo";
import { StyledPokemonType } from "../../pokemonInfo/type/PokemonType.styles";
import { StyledPokemonTypesDiv } from "../../pokemonInfo/type/PokemonType.styles";

import SelectedPokemonTypeInfo from "./../../pokemonInfo/type/SelectedPokemonTypeInfo/SelectedPokemonTypeInfo";
import SelectedPokemonEvoChain from "./SelectedPokemonEvoChain";
import { Link } from "react-router-dom";
import axios from "axios";

const SelectedPokemonBasicInfo = () => {
  const [selectedPokemonObject, setSelectedPokemonObject] = useRecoilState(
    selectedPokemonInformationState
  );
  let { name } = useParams();
  console.log(name);
  useEffect(() => {
    const fecthActualPokemonPage = async () => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setSelectedPokemonObject(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthActualPokemonPage();
  }, [name]);

  return selectedPokemonObject !== undefined ? (
    <div>
      <Link to="/">Back</Link>
      <StyledBasicInfo>
        <h1>
          You choosed:
          <span>
            #{selectedPokemonObject?.id}{" "}
            {`${selectedPokemonObject?.name
              ?.charAt(0)
              .toUpperCase()}${selectedPokemonObject?.name?.slice(1)}`}
          </span>
        </h1>

        <img
          src={
            selectedPokemonObject?.sprites?.other["official-artwork"][
              "front_default"
            ]
          }
          alt={selectedPokemonObject?.name}
        />
      </StyledBasicInfo>
      <div>
        {selectedPokemonObject?.stats?.map((obj) => (
          <StyledStats key={nanoid()}>
            <PokemonStatsInfo obj={obj} />
          </StyledStats>
        ))}
      </div>
      <StyledPokemonAbilities>
        <h1>Main abilities:</h1>
        <div>
          {selectedPokemonObject?.abilities?.map((ability) => (
            <div key={ability.slot}>
              <SelectedPokemonAbilityInfo ability={ability} />
            </div>
          ))}
        </div>
      </StyledPokemonAbilities>
      <StyledPokemonType>
        <h1>
          {" "}
          {`${selectedPokemonObject?.name
            ?.charAt(0)
            .toUpperCase()}${selectedPokemonObject?.name?.slice(1)}'s type is:`}
        </h1>
        <StyledPokemonTypesDiv>
          {selectedPokemonObject?.types?.map((type) => (
            <div key={type.slot}>
              <SelectedPokemonTypeInfo
                type={type}
                selectedPokemonObject={selectedPokemonObject}
              />
            </div>
          ))}
        </StyledPokemonTypesDiv>
      </StyledPokemonType>
      <SelectedPokemonEvoChain selectedPokemonObject={selectedPokemonObject} />
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export default SelectedPokemonBasicInfo;
