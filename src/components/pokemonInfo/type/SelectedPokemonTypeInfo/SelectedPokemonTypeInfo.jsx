import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledSelectedPokemonTypeInfo,
  StyledDamage,
} from "./SelectedPokemonTypeInfo.styles";
import { nanoid } from "nanoid";

const SelectedPokemonTypeInfo = ({ type, selectedPokemonInfo }) => {
  const [selectedTypeInfo, setSelectedTypeInfo] = useState();
  useEffect(() => {
    const getAbilityData = async () => {
      try {
        const res = await axios.get(type.type.url);

        setSelectedTypeInfo(res.data["damage_relations"]);
      } catch (error) {
        console.log(error);
      }
    };
    getAbilityData();
  }, [selectedPokemonInfo]);
  console.log(selectedTypeInfo);
  return selectedTypeInfo ? (
    <StyledSelectedPokemonTypeInfo type={type}>
      <h2>{type.type.name}</h2>
      <div>
        <div>
          <h3>Double damage to:</h3>
          {selectedTypeInfo["double_damage_to"].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>
        <div>
          <h3>Half damage to:</h3>
          {selectedTypeInfo["half_damage_to"].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>

        <div>
          <h3>Double damage from:</h3>
          {selectedTypeInfo["double_damage_from"].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>
        <div>
          <h3>Half damage from:</h3>
          {selectedTypeInfo["half_damage_from"].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>
      </div>
    </StyledSelectedPokemonTypeInfo>
  ) : (
    <>Loading ...</>
  );
};

export default SelectedPokemonTypeInfo;
