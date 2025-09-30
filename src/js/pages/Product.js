/*
- 도서명과 가격을 입력 후 "확인" 버튼 클릭 또는 엔터키 입력 시 도서를 추가한다. 
- 입력값이 누락되었을 경우 추가되지 않는다.
- 도서 추가가 완료되면 입력 필드는 초기화한다.
- 추가된 도서정보는 리스트 하단에 표현되어야한다.
- 도서 추가 완료 시 도서의 갯수를 카운팅 하여 화면에 표현한다. 

- 도서 정보의 "수정" 버튼 클릭시 모달 창을 통해 도서명과 가격을 수정할 수 있다.
- 모달 창이 열리면 수정할 도서의 기존 도서명과 가격이 미리 입력되어있다.

- 도서 정보의 "삭제" 버튼 클릭시 브라우저에 제공되는 confirm 인터페이스을 띄운다.
- 사용자의 삭제 의사를 확인한 뒤 삭제를 진행한다.
- 도서 삭제 완료 시 도서의 갯수를 카운팅 하여 화면에 표현한다.
 */

const $ = (selector) => document.querySelector(selector);

function Product() {
  let bookCount = 0;
  let bookForm = $("#book-regist-form");

  //미션 1
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let bookName = $("#book-name-input").value;
    console.log(bookName);
    let bookPrice = $("#book-price-input").value;
    console.log(bookPrice);
    bookCount++;
    const bookItem = `
    <li class="book-item">
      <div class="book-info">
        <span class="book-name">${bookName}</span>
        <span class="book-price">₩${bookPrice}</span>
      </div>
      <div class="book-actions">
        <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
        <button class="delete-btn">삭제</button>
      </div>
    </li>
  `;
    $("#book-list").insertAdjacentHTML("beforeend", bookItem); //beforeend
  });

  $("#book-list").addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("edit-btn")) {
      const bookName = String(
        e.target.closest(".book-item").querySelector(".book-name").innerText
      );
      const bookPrice = Number(
        e.target
          .closest(".book-item")
          .querySelector(".book-price")
          .innerText.replace(/[₩,]/g, "")
      );

      console.log(bookName, bookPrice);
    }
  });
}

const product = new Product();
