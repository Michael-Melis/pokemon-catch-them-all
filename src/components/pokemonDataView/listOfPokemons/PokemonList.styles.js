import styled from "styled-components";

export const StyledAllPokemonsView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 2rem;
`;
export const StyledPokemonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTypeDivBg = styled.div`
  display: flex;
  justify-content: center;
  ${({ type }) => {
    if (type.type.name === "fire") {
      return `
        border: 2px solid #EE8130; 
        border-radius: 15px;
         background:#EE8130;
         
        `;
    } else if (type.type.name === "grass") {
      return `
        border: 2px solid #7AC74C; 
        border-radius: 15px;
        background:#7AC74C;
        
        `;
    } else if (type.type.name === "poison") {
      return `
        border: 2px solid #A33EA1; 
        border-radius: 15px;
        background:#A33EA1;
        `;
    } else if (type.type.name === "water") {
      return `
        border: 2px solid #6390F0; 
        border-radius: 15px;
        background:#6390F0;
        `;
    } else if (type.type.name === "electric") {
      return `
        border: 2px solid #F7D02C; 
        border-radius: 15px;
        background:#F7D02C;
        `;
    } else if (type.type.name === "ice") {
      return `
        border: 2px solid #96D9D6; 
        border-radius: 15px;
        background:#96D9D6;
        `;
    } else if (type.type.name === "fighting") {
      return `
        border: 2px solid #C22E28; 
        border-radius: 15px;
        background:#C22E28;
        `;
    } else if (type.type.name === "ground") {
      return `
        border: 2px solid #E2BF65; 
        border-radius: 15px;
        background:#E2BF65;
        `;
    } else if (type.type.name === "flying") {
      return `
        border: 2px solid #A98FF3; 
        border-radius: 15px;
        background:#A98FF3;
        `;
    } else if (type.type.name === "psychic") {
      return `
        border: 2px solid #F95587; 
        border-radius: 15px;
        background:#F95587;
        `;
    } else if (type.type.name === "bug") {
      return `
        border: 2px solid #A6B91A; 
        border-radius: 15px;
        background:#A6B91A;
        `;
    } else if (type.type.name === "rock") {
      return `
        border: 2px solid #B6A136; 
        border-radius: 15px;
        background:#B6A136;
        `;
    } else if (type.type.name === "ghost") {
      return `
        border: 2px solid #735797; 
        border-radius: 15px;
        background:#735797;
        `;
    } else if (type.type.name === "dragon") {
      return `
        border: 2px solid #6F35FC; 
        border-radius: 15px;
        background:#6F35FC;
        `;
    } else if (type.type.name === "dark") {
      return `
        border: 2px solid #705746; 
        border-radius: 15px;
        background:#705746;
        `;
    } else if (type.type.name === "steel") {
      return `
        border: 2px solid #B7B7CE; 
        border-radius: 15px;
        background:#B7B7CE;
        `;
    } else if (type.type.name === "fairy") {
      return `
        border: 2px solid #D685AD; 
        border-radius: 15px;
        background:#D685AD;
        `;
    } else if (type.type.name === "normal") {
      return `
        border: 2px solid #A8A77A; 
        border-radius: 15px;
        background:#A8A77A;
        `;
    }
  }};
`;
