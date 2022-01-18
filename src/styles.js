//Styled
import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 5rem;
  color: white;
`;


export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  margin-right: -5rem;
  box-shadow: -0.2rem -1rem 1rem 0.2rem #0c0b10;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;