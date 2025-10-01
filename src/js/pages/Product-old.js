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

/*
- 도서 데이터를 localStorage에 저장(기록, Write) 한다.
  - 신규 도서 추가 시 저장
  - 기존 도서 수정 시 저장
  - 기존 도서 삭제 시 저장

- 도서 데이터를 localStorage에 읽어(조회, Read) 온다.
  - 상품 관리 페이지 최초 로드 시 "IT" 카테고리의 도서 데이터를 읽어온다.
  - 각 카테고리 클릭시마다 해당 카테고리의 도서 데이터를 localStorage에서 읽어온다.

- 관리할 도서들의 카테고리는 다음과 같다:
  - "IT" "기술과학" "문학" "역사"
 */

const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

function Product() {
  // Prodocut내에서의 상태 기반으로 관리할 데이터
  // 도서 와 도서 갯수 (갯수의 경우 데이터로 설정하지 않아도 충분히 가능)
  // 추후 학습할 리액트 컴포넌트를 위해, 프로퍼티 값으로 관리해보자.

  // 도서 상태 관리를 위한 변수 (추가/수정/삭제)
  this.books = [];
  this.books = store.getLocalStorage("books");

  // 첫 렌더링
  const bookItems = this.books
    .map((book) => {
      return `
        <li class="book-item">
          <div class="book-info">
            <span class="book-name">${book.title}</span>
            <span class="book-price">₩${book.price.toLocaleString()}</span>
          </div>
          <div class="book-actions">
            <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
            <button class="delete-btn">삭제</button>
          </div>
        </li>
      `;
    })
    .join("");
  // updateBookCount();
  let bookCount = this.books.length;
  $("#book-count").innerText = bookCount;
  console.log(bookItems);
  $("#book-list").innerHTML = bookItems;

  function updateBookCount() {
    // 생성 방식에 따른 함수 호이스팅 차이 사례!!!
    // let bookCount = this.books.length;
    $("#book-count").innerText = this.books.length;

    // let bookCount = $("#book-list").children.length;
    // console.log(bookCount);
    // $("#book-count").innerText = bookCount;
  }

  const registBook = () => {
    const bookName = $("#book-name-input").value;
    const bookPrice = Number($("#book-price-input").value);

    // 1 도서 상태 변경 (새로운 도서 추가)
    this.books.push({ title: bookName, price: bookPrice });
    // 2 변경된 도서 성태 저장
    store.setLocalStorage("books", this.books);
    // 3 변경 상태에 맞추어 요소 렌더링

    const bookItems = this.books
      .map((book) => {
        return `
        <li class="book-item">
          <div class="book-info">
            <span class="book-name">${book.title}</span>
            <span class="book-price">₩${book.price.toLocaleString()}</span>
          </div>
          <div class="book-actions">
            <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
            <button class="delete-btn">삭제</button>
          </div>
        </li>
      `;
      })
      .join("");

    console.log(bookItems);
    $("#book-list").innerHTML = bookItems;

    //   this.books.forEach((item) => {
    //     const bookItem = `
    //   <li class="book-item">
    //     <div class="book-info">
    //       <span class="book-name">${item.bookName}</span>
    //       <span class="book-price">₩${Number(
    //         item.bookPrice
    //       ).toLocaleString()}</span>
    //     </div>
    //     <div class="book-actions">
    //       <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
    //       <button class="delete-btn">삭제</button>
    //     </div>
    //   </li>
    // `;
    //     $("#book-list").insertAdjacentHTML("beforeend", bookItem); //beforeend
    //   });

    //   const bookItem = `
    //   <li class="book-item">
    //     <div class="book-info">
    //       <span class="book-name">${bookName}</span>
    //       <span class="book-price">₩${bookPrice.toLocaleString()}</span>
    //     </div>
    //     <div class="book-actions">
    //       <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
    //       <button class="delete-btn">삭제</button>
    //     </div>
    //   </li>
    // `;
    //   $("#book-list").insertAdjacentHTML("beforeend", bookItem); //beforeend

    $("#book-regist-form").reset(); // 입력폼 초기화
    $("#book-name-input").focus();

    updateBookCount();
  };

  const updateBookForm = (e) => {
    const $bookItem = e.target.closest(".book-item");

    // 수정할 도서 목록의 식별자를 숨겨놔야, 수정 값을 반영할 수 있다
    // <input type="hidden" id="edit-book-index" />
    const bookIndex = Array.from($("#book-list").children).indexOf($bookItem);
    const bookName = String($bookItem.querySelector(".book-name").innerText);
    const bookPrice = Number(
      $bookItem.querySelector(".book-price").innerText.replace(/[₩,]/g, "")
    );

    $("#edit-book-name").value = bookName;
    $("#edit-book-price").value = bookPrice;
    $("#edit-book-index").value = bookIndex;
  };

  const deleteBook = (e) => {
    if (confirm("정말로 삭제하겠습니까?")) {
      // const bookIndex = Array.from($("#book-list").children).indexOf(
      //   e.target.closest(".book-item")
      // );
      // Array.from($("#book-list").children).splice(bookIndex, 1);
      // 그냥 element의 remove 메소드를 사용하면 된다.. 핫

      // e.target.closest(".book-item").remove();
      // updateBookCount();

      //오예 내가 한 방법이 틀리지 않았다.
      const deleteBookIndex = Array.from($("#book-list").children).indexOf(
        e.target.closest(".book-item")
      );
      this.books.splice(deleteBookIndex, 1);
      const bookItems = this.books
        .map((book) => {
          return `
        <li class="book-item">
          <div class="book-info">
            <span class="book-name">${book.title}</span>
            <span class="book-price">₩${book.price.toLocaleString()}</span>
          </div>
          <div class="book-actions">
            <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
            <button class="delete-btn">삭제</button>
          </div>
        </li>
      `;
        })
        .join("");
      updateBookCount();
      // let bookCount = this.books.length;
      // $("#book-count").innerText = bookCount;
      console.log(bookItems);
      $("#book-list").innerHTML = bookItems;
    }
  };

  const updateBook = (e) => {
    const editBookName = $("#edit-book-name").value;
    const editBookPrice = Number($("#edit-book-price").value);
    const editBookIndex = $("#edit-book-index").value;

    this.books[editBookIndex] = { title: editBookName, price: editBookPrice };
    // 2 변경된 도서 성태 저장
    store.setLocalStorage("books", this.books);
    // 3 변경 상태에 맞추어 요소 렌더링
    const bookItems = this.books
      .map((book) => {
        return `
        <li class="book-item">
          <div class="book-info">
            <span class="book-name">${book.title}</span>
            <span class="book-price">₩${book.price.toLocaleString()}</span>
          </div>
          <div class="book-actions">
            <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
            <button class="delete-btn">삭제</button>
          </div>
        </li>
      `;
      })
      .join("");

    console.log(bookItems);
    $("#book-list").innerHTML = bookItems;

    // $("#book-list").children[editBookIndex].querySelector(
    //   ".book-name"
    // ).innerText = editBookName;
    // $("#book-list").children[editBookIndex].querySelector(
    //   ".book-price"
    // ).innerText = `₩${editBookPrice.toLocaleString()}`;

    // closeModal(modal);
    $("#editModal .modal-close").click();
  };

  // 미션 1 - 생성, 등록
  $("#book-regist-form").addEventListener("submit", (e) => {
    e.preventDefault();
    registBook();
  });

  // 미션 2 - 수정 모달
  $("#book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      updateBookForm(e);
    }

    // 미션 3 - 삭제
    if (e.target.classList.contains("delete-btn")) {
      deleteBook(e);
    }
  });

  // 미션 2 - 수정 모달 닫기 및 리스트 업데이트
  $("#book-edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    updateBook(e);
  });
}

const product = new Product();
