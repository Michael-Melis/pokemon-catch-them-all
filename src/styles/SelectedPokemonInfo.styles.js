import styled from "styled-components";

export const StyledSelectedPokemonDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 1rem 0;
    span {
      font-size: 3rem;
    }
  }
  img {
    width: 60vw;
    height: 60vh;
    object-fit: contain;
  }
`;
