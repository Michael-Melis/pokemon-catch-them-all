import React from "react";

const PokemonStatsInfo = ({ obj }) => {
  const actualStat = obj.stat.name;
  const maxHp = 255;
  const maxAttack = 190;
  const maxDefense = 230;
  const maxSpecialAttack = 180;
  const maxSpecialDefense = 230;
  const maxSpeed = 200;
  const renderSwitch = (actualStat) => {
    switch (actualStat) {
      case "hp":
        return Math.round((obj["base_stat"] * 100) / maxHp);
      case "attack":
        return Math.round((obj["base_stat"] * 100) / maxAttack);
      case "defense":
        return Math.round((obj["base_stat"] * 100) / maxDefense);
      case "special-attack":
        return Math.round((obj["base_stat"] * 100) / maxSpecialAttack);
      case "special-defense":
        return Math.round((obj["base_stat"] * 100) / maxSpecialDefense);
      case "speed":
        return Math.round((obj["base_stat"] * 100) / maxSpeed);
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>{obj.stat.name}</h2>

      <p
        style={{
          background: `-webkit-linear-gradient(left, #70d9dd ${renderSwitch(
            actualStat
          )}%, white 0%)`,
        }}
      >
        {obj["base_stat"]}
      </p>
    </div>
  );
};

export default PokemonStatsInfo;
