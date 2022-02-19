import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';

const SelectedPokemonTypeInfo = ({ type, result }) => {
  const [selectedTypeInfo, setSelectedTypeInfo] = useState();
  useEffect(() => {
    const getAbilityData = async () => {
      try {
        const res = await axios.get(type.type.url);

        setSelectedTypeInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAbilityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <div>
      <h2>{type.type.name}</h2>
      <div>
        <div>
          <h3>Double damage to:</h3>
          {selectedTypeInfo['damage_relations']['double_damage_to'].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>
        <div>
          <h3>Half damage to:</h3>
          {selectedTypeInfo['damage_relations']['half_damage_to'].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>

        <div>
          <h3>Double damage from:</h3>
          {selectedTypeInfo['damage_relations']['double_damage_from'].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>
        <div>
          <h3>Half damage from:</h3>
          {selectedTypeInfo['damage_relations']['half_damage_from'].map((obj) => (
            <p key={nanoid()}>{obj.name} type</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedPokemonTypeInfo;
