import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <div onClick={() => navigate("/")}>Search</div>
      <div>
        <input type="text" placeholder="Search" />
        <button type="submit">Submit</button>
      </div>
      <div>Profile</div>
    </S.Container>
  );
}
