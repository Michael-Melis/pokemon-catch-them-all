import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledEvolutionComponent,
  StyledPokemonEvolutionDiv,
  StyledSinglePokemonDiv,
} from "./EvolutionView.styles";
import { ArrowForward } from "@mui/icons-material";

const EvolutionView = ({ pokemonEvolutionInfo, selectedPokemonInfo }) => {
  const [firstPokemonInChain, setFirstPokemonInChain] = useState({});
  const [firstPokemonInChainImg, setFirstPokemonInChainImg] = useState("");
  const [secondPokemonInChain, setSecondPokemonInChain] = useState({});
  const [secondPokemonInChainImg, setSecondPokemonInChainImg] = useState("");
  const [thirdPokemonInChain, setThirdPokemonInChain] = useState({});
  const [thirdPokemonInChainImg, setThirdPokemonInChainImg] = useState("");

  useEffect(() => {
    const fetchEvoPokemons = async () => {
      try {
        const resFirstPokemon = await axios.get(
          pokemonEvolutionInfo.species.url
        );
        setFirstPokemonInChain(resFirstPokemon.data);
        setSecondPokemonInChain(null);
        setThirdPokemonInChain(null);
        const resFirstImg = await axios.get(
          resFirstPokemon.data.varieties[0].pokemon.url
        );
        setFirstPokemonInChainImg(
          resFirstImg.data.sprites.other["official-artwork"].front_default
        );

        if (pokemonEvolutionInfo["evolves_to"][0].species.url) {
          const resSecondPokemon = await axios.get(
            pokemonEvolutionInfo["evolves_to"][0].species.url
          );
          setSecondPokemonInChain(resSecondPokemon.data);

          const resSecondImg = await axios.get(
            resSecondPokemon.data.varieties[0].pokemon.url
          );
          setSecondPokemonInChainImg(
            resSecondImg.data.sprites.other["official-artwork"].front_default
          );
        } else {
          setSecondPokemonInChain(null);
        }

        if (
          pokemonEvolutionInfo["evolves_to"][0]["evolves_to"][0].species.url
        ) {
          const resThirdPokemon = await axios.get(
            pokemonEvolutionInfo["evolves_to"][0]["evolves_to"][0].species.url
          );
          setThirdPokemonInChain(resThirdPokemon.data);
          const resThirdImg = await axios.get(
            resThirdPokemon.data.varieties[0].pokemon.url
          );
          setThirdPokemonInChainImg(
            resThirdImg.data.sprites.other["official-artwork"].front_default
          );
        } else {
          setThirdPokemonInChain(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvoPokemons();
  }, [pokemonEvolutionInfo]);
  //riesime if else conditional aby som zorbazil pokemon ak nemaju napr vyvoj

  return firstPokemonInChain ? (
    <StyledEvolutionComponent>
      <h1>Evolution chain</h1>
      <StyledPokemonEvolutionDiv>
        <StyledSinglePokemonDiv>
          <h2>{firstPokemonInChain.name}</h2>
          <img src={firstPokemonInChainImg} alt={firstPokemonInChain.name} />
        </StyledSinglePokemonDiv>
        <ArrowForward fontSize="large" />
        <StyledSinglePokemonDiv>
          {secondPokemonInChain !== null ? (
            <>
              <h2>{secondPokemonInChain.name}</h2>
              <img
                src={secondPokemonInChainImg}
                alt={firstPokemonInChain.name}
              />
            </>
          ) : (
            ""
          )}
        </StyledSinglePokemonDiv>
        <ArrowForward fontSize="large" />
        <StyledSinglePokemonDiv>
          {thirdPokemonInChain !== null ? (
            <>
              {" "}
              <h2>{thirdPokemonInChain.name}</h2>{" "}
              <img src={thirdPokemonInChainImg} alt="" />{" "}
            </>
          ) : (
            ""
          )}
        </StyledSinglePokemonDiv>
      </StyledPokemonEvolutionDiv>
    </StyledEvolutionComponent>
  ) : (
    <p>Loading...</p>
  );
};

export default EvolutionView;
