import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 5.5rem;
  width: 100%;
  gap: 3rem;
  align-items: center;
  background-color: pink;
  & > div {
    cursor: pointer;
  }
  & > div:not(:nth-child(2)) {
    margin: 1rem 2rem;
  }
`;
