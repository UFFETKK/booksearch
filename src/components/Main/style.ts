import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  align-items: center;
  & > div:first-child {
    font-size: 2rem;
    color: #7c7c7c;
    & > span {
      color: pink;
    }
  }
`;
export const Input = styled.div`
  display: flex;
  gap: 1rem;
  & > input {
    width: 100%;
  }
  & > button {
    cursor: pointer;
    border: none;
    color: #7c7c7c;
    padding: 0.5rem 1rem;
    border-radius: 10%;

    :hover {
      color: pink;
    }
  }
`;
