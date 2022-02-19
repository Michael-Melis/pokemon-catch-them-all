import styled from 'styled-components';

export const StyledSelectedPokemonTypeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 15px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  padding: 1rem;
  margin: 1rem;
  h2 {
    width: 20vw;
    text-align: center;
    margin-bottom: 1.5rem;
    ${({ type }) => {
      if (type.type.name === 'fire') {
        return `
        border: 2px solid #EE8130; 
        border-radius: 15px;
          color:#EE8130;
        `;
      } else if (type.type.name === 'grass') {
        return `
        border: 2px solid #7AC74C; 
        border-radius: 15px;
          color:#7AC74C;
        `;
      } else if (type.type.name === 'poison') {
        return `
        border: 2px solid #A33EA1; 
        border-radius: 15px;
          color:#A33EA1;
        `;
      } else if (type.type.name === 'water') {
        return `
        border: 2px solid #6390F0; 
        border-radius: 15px;
          color:#6390F0;
        `;
      } else if (type.type.name === 'electric') {
        return `
        border: 2px solid #F7D02C; 
        border-radius: 15px;
          color:#F7D02C;
        `;
      } else if (type.type.name === 'ice') {
        return `
        border: 2px solid #96D9D6; 
        border-radius: 15px;
          color:#96D9D6;
        `;
      } else if (type.type.name === 'fighting') {
        return `
        border: 2px solid #C22E28; 
        border-radius: 15px;
          color:#C22E28;
        `;
      } else if (type.type.name === 'ground') {
        return `
        border: 2px solid #E2BF65; 
        border-radius: 15px;
          color:#E2BF65;
        `;
      } else if (type.type.name === 'flying') {
        return `
        border: 2px solid #A98FF3; 
        border-radius: 15px;
          color:#A98FF3;
        `;
      } else if (type.type.name === 'psychic') {
        return `
        border: 2px solid #F95587; 
        border-radius: 15px;
          color:#F95587;
        `;
      } else if (type.type.name === 'bug') {
        return `
        border: 2px solid #A6B91A; 
        border-radius: 15px;
          color:#A6B91A;
        `;
      } else if (type.type.name === 'rock') {
        return `
        border: 2px solid #B6A136; 
        border-radius: 15px;
          color:#B6A136;
        `;
      } else if (type.type.name === 'ghost') {
        return `
        border: 2px solid #735797; 
        border-radius: 15px;
          color:#735797;
        `;
      } else if (type.type.name === 'dragon') {
        return `
        border: 2px solid #6F35FC; 
        border-radius: 15px;
          color:#6F35FC;
        `;
      } else if (type.type.name === 'dark') {
        return `
        border: 2px solid #705746; 
        border-radius: 15px;
          color:#705746;
        `;
      } else if (type.type.name === 'steel') {
        return `
        border: 2px solid #B7B7CE; 
        border-radius: 15px;
          color:#B7B7CE;
        `;
      } else if (type.type.name === 'fairy') {
        return `
        border: 2px solid #D685AD; 
        border-radius: 15px;
          color:#D685AD;
        `;
      } else if (type.type.name === 'normal') {
        return `
        border: 2px solid #A8A77A; 
        border-radius: 15px;
          color:#A8A77A;
        `;
      }
    }};
  }
`;
