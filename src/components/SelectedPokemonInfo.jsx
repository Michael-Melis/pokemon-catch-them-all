import React, { useEffect } from "react";
import {
  selectedPokemonImgState,
  selectedPokemonInfoState,
  selectedPokemonState,
} from "./../atom/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";
import PokemonType from "./pokemonInfo/type/PokemonType";
import {
  StyledSelectedPokemonDiv,
  StyledInfoSection,
} from "./../styles/SelectedPokemonInfo.styles";
import EvolutionChain from "./pokemonInfo/evolutionChain/EvolutionChain";
import PokemonAbilities from "./pokemonInfo/abilities/PokemonAbilities";
import PokemonBasicInfo from "./pokemonInfo/basicInfo/PokemonBasicInfo";

const SelectedPokemonInfo = () => {
  const selectedPokemon = useRecoilValue(selectedPokemonState);
  const [selectedPokemonInfo, setSelectedPokemonInfo] = useRecoilState(
    selectedPokemonInfoState
  );
  const [pokemonImg, setPokemonImg] = useRecoilState(selectedPokemonImgState);

  useEffect(() => {
    const fetchActivePokemonData = async () => {
      try {
        const res = await axios.get(selectedPokemon.url);
        setSelectedPokemonInfo(res.data);
        setPokemonImg(
          res.data.sprites.other["official-artwork"]["front_default"]
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchActivePokemonData();
  }, [selectedPokemon]);

  return (
    <>
      <StyledSelectedPokemonDiv>
        {pokemonImg ? (
          <>
            <StyledInfoSection>
              <PokemonBasicInfo
                selectedPokemonInfo={selectedPokemonInfo}
                pokemonImg={pokemonImg}
              />
            </StyledInfoSection>
            <StyledInfoSection>
              <PokemonAbilities selectedPokemonInfo={selectedPokemonInfo} />
            </StyledInfoSection>
            <StyledInfoSection>
              <PokemonType selectedPokemonInfo={selectedPokemonInfo} />
            </StyledInfoSection>
            <StyledInfoSection>
              <EvolutionChain selectedPokemonInfo={selectedPokemonInfo} />
            </StyledInfoSection>
          </>
        ) : null}
      </StyledSelectedPokemonDiv>
    </>
  );
};

export default SelectedPokemonInfo;
