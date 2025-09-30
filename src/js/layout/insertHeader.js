// layer/header.html 웹 문서 요청하기
fetch("/layout/header.html")
  .then((response) => response.text())
  .then((responseText) => {
    document
      .querySelector(".container")
      .insertAdjacentHTML("afterbegin", responseText);
  });
