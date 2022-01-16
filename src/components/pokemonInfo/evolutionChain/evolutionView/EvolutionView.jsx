import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledEvolutionComponent,
  StyledPokemonEvolutionDiv,
  StyledSinglePokemonDiv,
  StyledImgArrowDiv,
} from "./EvolutionView.styles";

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
          <div>
            <h2>
              {firstPokemonInChain.name
                ? firstPokemonInChain.name.charAt(0).toUpperCase() +
                  firstPokemonInChain.name.slice(1)
                : firstPokemonInChain.name}
            </h2>
          </div>
          <StyledImgArrowDiv>
            <img src={firstPokemonInChainImg} alt={firstPokemonInChain.name} />
          </StyledImgArrowDiv>
        </StyledSinglePokemonDiv>

        <StyledSinglePokemonDiv>
          {secondPokemonInChain !== null ? (
            <>
              <div>
                <h2>
                  {secondPokemonInChain.name
                    ? secondPokemonInChain.name.charAt(0).toUpperCase() +
                      secondPokemonInChain.name.slice(1)
                    : secondPokemonInChain.name}
                </h2>
              </div>
              <StyledImgArrowDiv>
                <img
                  src={secondPokemonInChainImg}
                  alt={secondPokemonInChain.name}
                />
              </StyledImgArrowDiv>
            </>
          ) : null}
        </StyledSinglePokemonDiv>

        <StyledSinglePokemonDiv>
          {thirdPokemonInChain !== null ? (
            <>
              <h2>
                {thirdPokemonInChain.name
                  ? thirdPokemonInChain.name.charAt(0).toUpperCase() +
                    thirdPokemonInChain.name.slice(1)
                  : thirdPokemonInChain.name}
              </h2>
              <StyledImgArrowDiv>
                <img
                  src={thirdPokemonInChainImg}
                  alt={thirdPokemonInChain.name}
                />
              </StyledImgArrowDiv>
            </>
          ) : null}
        </StyledSinglePokemonDiv>
      </StyledPokemonEvolutionDiv>
    </StyledEvolutionComponent>
  ) : (
    <p>Loading...</p>
  );
};

export default EvolutionView;
