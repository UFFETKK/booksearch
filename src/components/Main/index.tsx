import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function Main() {
  const [word, setWord] = useState<string>("");
  const [data, setData] = useState<any>();
  const navigate = useNavigate();

  const API_KEY = "36d5974e55f9a80fd96e9895520dafd8";
  const submit = async (word: string) => {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=" + word, {
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json.documents);
      });
    return data;
  };
  console.log(data);
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
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            submit(word);
          }}
        >
          Submit
        </button>
      </S.Input>
      <S.ResultContainer>
        {data &&
          data.map((a: any) => {
            return (
              <div key={a} /*onClick={() => navigate(`/detail?${a.title}`)}*/>
                <div>
                  <img src={a.thumbnail} alt="img" />
                </div>
                <div>
                  <p>{a.title}</p>
                  <p>{a.authors}</p>
                </div>
              </div>
            );
          })}
      </S.ResultContainer>
      <p>
        마음에 드는 검색 결과를 찾지 못하셨다면 조금 더 정확한 검색어를
        사용해주세요!
      </p>
    </S.Container>
  );
}
export default Main;
