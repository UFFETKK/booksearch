import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <div onClick={() => navigate("/")}>MyBook</div>
      <div onClick={() => navigate(`/mybook`)}></div>
      <div>My Book List</div>
      <S.Input>
        <input type="text" placeholder="Search" />
        <button type="submit">Submit</button>
      </S.Input>
    </S.Container>
  );
}
