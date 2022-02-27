import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router";

function Detail() {
  const navigate = useNavigate();
  let isbn: number = Number(
    window.location.href.split("detail/")[1].split("%")[0]
  );
  const [data, setData] = useState<any>();

  const API_KEY = "36d5974e55f9a80fd96e9895520dafd8";

  useEffect(() => {
    fetch("https://dapi.kakao.com/v3/search/book?target=title&query=" + isbn, {
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json.documents[0]);
      });
  }, []);

  const gobook = () => {
    //usecontext로 만들기
    navigate("/myBook");
  };

  return (
    <>
      {data && (
        <S.Container>
          <div>
            <img src={data.thumbnail} alt="img" />
          </div>
          <div>
            <p>title, {data.title}</p>
            <p>authors, {data.authors}</p>
            <p>information, {data.contents}</p>
            <div>
              <p>price : {data.price}</p>
              <a
                href={`https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=UsedStore&SearchWord=${data.title}&x=0&y=0`}
                target="_blank"
                rel="noreferrer"
              >
                알라딘에서 중고도서 찾아보기
              </a>
              <button onClick={gobook}>내 책 추가하기</button>
            </div>
          </div>
        </S.Container>
      )}
    </>
  );
}
export default Detail;
