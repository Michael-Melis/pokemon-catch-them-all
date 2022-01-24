import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { selectedPokemonEvolutionState } from "../../../atom/atom";
import axios from "axios";
import EvolutionView from "../../pokemonInfo/evolutionChain/evolutionView/EvolutionView";

const SelectedPokemonEvoChain = ({ selectedPokemonObject }) => {
  const [pokemonEvolutionInfo, setPokemonEvolutionInfo] = useRecoilState(
    selectedPokemonEvolutionState
  );

  useEffect(() => {
    const fetchSpeciesData = async () => {
      //egg group
      try {
        const res = await axios.get(selectedPokemonObject.species.url);
        const resEvolutionChain = await axios.get(
          res.data["evolution_chain"].url
        );

        setPokemonEvolutionInfo(resEvolutionChain.data.chain);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSpeciesData();
  }, [selectedPokemonObject]);
  let selectedPokemonInfo = selectedPokemonObject;
  return (
    <EvolutionView
      pokemonEvolutionInfo={pokemonEvolutionInfo}
      selectedPokemonInfo={selectedPokemonInfo}
    />
  );
};

export default SelectedPokemonEvoChain;
