import React, { useEffect, useState } from "react";
import {
  selectedPokemonImgState,
  selectedPokemonInfoState,
  selectedPokemonState,
} from "./../atom/atom";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";

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
  console.log(selectedPokemonInfo);

  return (
    <>
      <h1>{selectedPokemonInfo.name}</h1>
      <img src={pokemonImg} alt="" />
    </>
  );
};

export default SelectedPokemonInfo;
