import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectedPokemonAbilityInfo = ({ ability, selectedPokemonInfo }) => {
  const [selectedAbility, setSelectedAbility] = useState();
  useEffect(() => {
    const getAbilityData = async () => {
      try {
        const res = await axios.get(ability.ability.url);
        setSelectedAbility(
          res.data["effect_entries"].find((obj) => obj.language.name === "en")
        );
      } catch (error) {
        console.log(error);
      }
    };
    getAbilityData();
  }, [selectedPokemonInfo]);

  return selectedAbility ? (
    <div>
      <h2>{ability.ability.name}</h2>
      <p>{selectedAbility.effect}</p>
    </div>
  ) : (
    <>Loading ...</>
  );
};

export default SelectedPokemonAbilityInfo;
