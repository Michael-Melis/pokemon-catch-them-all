import styled from 'styled-components';

export const StyledBasicInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: bolder;
  }
`;

export const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 50vw;
    border: 2px solid black;
  }
`;
