import React, { useEffect, useState } from "react";
import axios from "axios";

const SelectedPokemonAbilityInfo = ({ ability, selectedPokemonInfo }) => {
  const [selectedAbility, setSelectedAbility] = useState();
  useEffect(() => {
    const getAbilityData = async () => {
      try {
        const res = await axios.get(ability.ability.url);

        setSelectedAbility(
          res.data["effect_entries"].filter(
            (obj) => obj.effect.language.name === "en"
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getAbilityData();
  }, [selectedPokemonInfo]);
  console.log(selectedAbility);
  return selectedAbility ? (
    <div>
      <h2>{ability.ability.name}</h2>
      {selectedAbility.effect}
    </div>
  ) : (
    <></>
  );
};

export default SelectedPokemonAbilityInfo;
