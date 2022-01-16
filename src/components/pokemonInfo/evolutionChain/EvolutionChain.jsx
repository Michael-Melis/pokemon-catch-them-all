import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { selectedPokemonEvolutionState } from "./../../../atom/atom";
import EvolutionView from "./evolutionView/EvolutionView";

const EvolutionChain = ({ selectedPokemonInfo }) => {
  const [pokemonEvolutionInfo, setPokemonEvolutionInfo] = useRecoilState(
    selectedPokemonEvolutionState
  );

  useEffect(() => {
    const fetchSpeciesData = async () => {
      //egg group
      try {
        const res = await axios.get(selectedPokemonInfo.species.url);
        const resEvolutionChain = await axios.get(
          res.data["evolution_chain"].url
        );

        setPokemonEvolutionInfo(resEvolutionChain.data.chain);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSpeciesData();
  }, [selectedPokemonInfo]);

  return (
    <EvolutionView
      pokemonEvolutionInfo={pokemonEvolutionInfo}
      selectedPokemonInfo={selectedPokemonInfo}
    />
  );
};

export default EvolutionChain;
