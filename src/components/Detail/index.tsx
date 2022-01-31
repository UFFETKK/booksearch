import React, { useEffect, useState } from "react";
import * as S from "./style";

function Detail() {
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

  //   const usedBook = (isbn:number)=>{
  // fetch('')
  //   }

  console.log(data);
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
              <button /*onClick={()=>usedBook(isbn)}*/>
                중고도서 찾아보기
              </button>
            </div>
          </div>
        </S.Container>
      )}
    </>
  );
}
export default Detail;
