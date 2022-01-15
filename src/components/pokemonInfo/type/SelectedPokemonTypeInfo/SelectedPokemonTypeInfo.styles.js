import styled from "styled-components";

export const StyledSelectedPokemonTypeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 15px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  padding: 1rem;
  margin: 1rem;
  h2 {
    width: 20vw;
    text-align: center;
    margin-bottom: 1.5rem;
    ${({ type }) => {
      if (type.type.name === "fire") {
        return `
          color:#EE8130;
        `;
      } else if (type.type.name === "grass") {
        return `
          color:#7AC74C;
        `;
      } else if (type.type.name === "poison") {
        return `
          color:#A33EA1;
        `;
      } else if (type.type.name === "water") {
        return `
          color:#6390F0;
        `;
      } else if (type.type.name === "electric") {
        return `
          color:#F7D02C;
        `;
      } else if (type.type.name === "ice") {
        return `
          color:#96D9D6;
        `;
      } else if (type.type.name === "fighting") {
        return `
          color:#C22E28;
        `;
      } else if (type.type.name === "ground") {
        return `
          color:#E2BF65;
        `;
      } else if (type.type.name === "flying") {
        return `
          color:#A98FF3;
        `;
      } else if (type.type.name === "psychic") {
        return `
          color:#F95587;
        `;
      } else if (type.type.name === "bug") {
        return `
          color:#A6B91A;
        `;
      } else if (type.type.name === "rock") {
        return `
          color:#B6A136;
        `;
      } else if (type.type.name === "ghost") {
        return `
          color:#735797;
        `;
      } else if (type.type.name === "dragon") {
        return `
          color:#6F35FC;
        `;
      } else if (type.type.name === "dark") {
        return `
          color:#705746;
        `;
      } else if (type.type.name === "steel") {
        return `
          color:#B7B7CE;
        `;
      } else if (type.type.name === "fairy") {
        return `
          color:#D685AD;
        `;
      } else if (type.type.name === "normal") {
        return `
          color:#A8A77A;
        `;
      }
    }};
  }
`;
