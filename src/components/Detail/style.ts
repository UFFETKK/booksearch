import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: inherit;
  padding: 2rem 0;
  & > div:first-child > img {
    width: 12rem;
    padding: 1rem;
  }
  & > div:nth-child(2) {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      & > button {
        width: 8rem;
        margin: 2rem auto;
      }
    }
  }
`;
