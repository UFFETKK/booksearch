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
    font-weight: 600;
    & > span {
      color: pink;
    }
  }
  & > p {
    text-align: center;
    padding: 0.4rem;
    background-color: rgba(255, 0, 0, 0.12);
    border-radius: 0.5rem;
    color: gray;
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

export const ResultContainer = styled.div`
  display: flex;
  width: inherit;
  flex-wrap: wrap;
  & > div {
    padding: 1rem;
    margin: 0.5rem;
    flex: 1;
    border: 1px solid #7c7c7c;
    max-width: 10rem;
    & > div:first-child > img {
      width: 8rem;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
    }
  }
`;
