import styled from "styled-components";

export const StyledSelectedPokemonDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    width: 30vw;
    height: 30vh;
    object-fit: contain;
  }
`;
export const StyledInfoSection = styled.div`
  border: 6px solid black;
  border-radius: 15px;
  margin: 1rem 0;
  width: 80vw;
  padding: 1rem;
`;
