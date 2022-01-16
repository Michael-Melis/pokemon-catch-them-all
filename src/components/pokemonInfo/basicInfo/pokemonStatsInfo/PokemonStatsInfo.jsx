import React from "react";

const PokemonStatsInfo = ({ obj }) => {
  const actualStat = obj.stat.name;
  const renderSwitch = (actualStat) => {
    switch (actualStat) {
      case "hp":
        return Math.round((obj["base_stat"] * 100) / 255);
      case "attack":
        return Math.round((obj["base_stat"] * 100) / 190);
      case "defense":
        return Math.round((obj["base_stat"] * 100) / 230);
      case "special-attack":
        return Math.round((obj["base_stat"] * 100) / 180);
      case "special-defense":
        return Math.round((obj["base_stat"] * 100) / 230);
      case "speed":
        return Math.round((obj["base_stat"] * 100) / 200);
      default:
        return obj;
    }
  };
  console.log(renderSwitch(actualStat));

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
