import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  background: white;
  box-shadow: 10px 10px 30px 0px #bdbdbd33;
  min-height: 3.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;

  & > div:not(:last-child) {
    cursor: pointer;
    color: #7c7c7c;
    margin: 1rem 2rem;
    :hover {
      color: pink;
    }
  }
`;

export const Input = styled.div`
  & > button {
    cursor: pointer;
    background: none;
    border: none;
    color: #7c7c7c;
    padding: 1rem;

    :hover {
      color: pink;
    }
  }
`;
