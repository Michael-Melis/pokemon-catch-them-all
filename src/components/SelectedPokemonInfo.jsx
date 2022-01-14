import React, { useEffect } from "react";
import {
  selectedPokemonImgState,
  selectedPokemonInfoState,
  selectedPokemonState,
} from "./../atom/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";

import { StyledSelectedPokemonDiv } from "./../styles/SelectedPokemonInfo.styles";

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
        <h1>{selectedPokemonInfo.name}</h1>
        {pokemonImg ? (
          <img src={pokemonImg} alt={selectedPokemonInfo.name} />
        ) : null}
      </StyledSelectedPokemonDiv>
    </>
  );
};

export default SelectedPokemonInfo;
