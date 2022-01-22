import React from "react";
import * as S from "./style";

function Main() {
  return (
    <S.Container>
      <div>
        <span>찾고 싶은</span> 도서의 이름을 검색해주세요!
      </div>
      <S.Input>
        <input
          type="text"
          placeholder="검색할 책 이름을 입력해주세요"
          maxLength={40}
        />
        <button type="submit">Submit</button>
      </S.Input>
    </S.Container>
  );
}
export default Main;
