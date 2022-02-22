import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { bookState } from "../../recoil/bookState";

function Detail() {
  const [dataRecoil, setDataRecoil] = useRecoilState<any>(bookState);

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

  const usedBook = (isbn: number) => {
    fetch(
      `http://www.aladin.co.kr/ttb/api/ItemOffStoreList.aspx?ttbkey=ttbsoyoungan020032001&itemIdType=ISBN&ItemId=${isbn}&output=xml`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const gobook = () => {
    const copy = { ...dataRecoil };
    copy.title = data.title;
    copy.url = data.thumbnail;
    copy.authors = data.authors;
    setDataRecoil(copy);
  };

  console.log("recoil", dataRecoil);
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
              <button onClick={() => usedBook(isbn)}>중고도서 찾아보기</button>
              <button onClick={() => gobook()}>내 책 추가하기</button>
            </div>
          </div>
        </S.Container>
      )}
    </>
  );
}
export default Detail;
