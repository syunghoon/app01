import { $ } from "../utils/dom.js";
import { store } from "../store/store.js";

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

function Product() {
  // Prodocut내에서의 상태 기반으로 관리할 데이터

  // 도서 상태 관리를 위한 변수 (추가/수정/삭제)
  this.books = [];

  // 카테고리 상태 관리를 위한 변수 (왜?)
  this.currentCategory = {};

  // 초기화 메소드
  this.init = () => {
    this.currentCategory = {
      code: "it",
      name: "IT",
    };
    rendorCategory();

    // 도서 상태 초기화
    this.books = store.getLocalStorage("books") || [];
    if (this.books.length !== 0) {
      // 첫 렌더링
      renderBookItem(this.currentCategory.code);
    }
  };

  // 단축 평가 공부했으면서 왜 안 써
  // if (!store.getLocalStorage("books")) {
  //   store.setLocalStorage("books", []);
  // } else {
  //   this.books = store.getLocalStorage("books");
  // }

  const renderBookItem = (categoryCode) => {
    if (this.books) {
      const bookItems = this.books
        .filter((book) => book.category === categoryCode)
        .map((book) => {
          return `
        <li class="book-item">
          <div class="book-info">
            <span class="book-name">${book.title}</span>
            <span class="book-price">₩${book.price.toLocaleString()}</span>
          </div>
          <div class="book-actions">
          ${
            book.inStock === false
              ? `<button class="soldout-btn">품절</button>`
              : ""
          }
            <button class="edit-btn modal-toggle-btn" data-modal-target="editModal">수정</button>
            <button class="delete-btn">삭제</button>
          </div>
        </li>
      `;
        })
        .join("");
      updateBookCount();

      console.log(bookItems);
      $("#book-list").innerHTML = bookItems;
    }
  };

  const rendorCategory = () => {
    document.querySelectorAll(".category-btn").forEach((categoryBtn) => {
      categoryBtn.classList.toggle(
        "active",
        categoryBtn.dataset.categoryCode === this.currentCategory.code
      );
    });

    $("#book-category-name").innerText = this.currentCategory.name;
  };

  const updateBookCount = () => {
    $("#book-count").innerText = this.books.filter(
      (book) => book.category === this.currentCategory.code
    ).length;
  };

  const registBook = () => {
    const bookName = $("#book-name-input").value;
    const bookPrice = Number($("#book-price-input").value);

    // 1 도서 상태 변경 (새로운 도서 추가)
    this.books.push({ title: bookName, price: bookPrice });
    // 2 변경된 도서 성태 저장
    store.setLocalStorage("books", this.books);
    // 3 변경 상태에 맞추어 요소 렌더링

    renderBookItem();

    $("#book-regist-form").reset();
    $("#book-name-input").focus();

    updateBookCount();
  };

  const updateBookForm = (e) => {
    const $bookItem = e.target.closest(".book-item");

    // 수정할 도서 목록의 식별자를 숨겨놔야, 수정 값을 반영할 수 있다
    // <input type="hidden" id="edit-book-index" />

    // this.books 에서, $bookItem의 bookName을 가진 객체의 배열 순서를 찾아온다.
    // const bookIndex = Array.from($("#book-list").children).indexOf($bookItem);
    const bookName = String($bookItem.querySelector(".book-name").innerText);
    const bookPrice = Number(
      $bookItem.querySelector(".book-price").innerText.replace(/[₩,]/g, "")
    );
    const bookIndex = this.books.findIndex((book) => book.title === bookName);
    console.log(bookIndex);

    $("#edit-book-name").value = bookName;
    $("#edit-book-price").value = bookPrice;
    $("#edit-book-index").value = bookIndex;
  };

  const deleteBook = (bookIndex) => {
    if (confirm("정말로 삭제하겠습니까?")) {
      //오예 내가 한 방법이 틀리지 않았다.
      // const deleteBookIndex = Array.from($("#book-list").children).indexOf(
      //   e.target.closest(".book-item")
      // );
      this.books.splice(bookIndex, 1);
      // 변경된 도서 성태 저장
      store.setLocalStorage("books", this.books);
      renderBookItem(this.currentCategory.code);
    }
  };

  const updateBook = (e) => {
    const editBookName = $("#edit-book-name").value;
    const editBookPrice = Number($("#edit-book-price").value);
    const editBookIndex = $("#edit-book-index").value;

    this.books[editBookIndex] = {
      title: editBookName,
      price: editBookPrice,
      category: this.currentCategory.code,
    };
    // 2 변경된 도서 성태 저장
    store.setLocalStorage("books", this.books);
    // 3 변경 상태에 맞추어 요소 렌더링
    renderBookItem(this.currentCategory.code);

    // closeModal(modal);
    $("#editModal .modal-close").click();
  };

  // 미션 1 - 생성, 등록
  $("#book-regist-form").addEventListener("submit", (e) => {
    e.preventDefault();
    registBook();
  });

  // 미션 2, 3, 5 - 수정, 삭제, 품절
  $("#book-list").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const $bookItem = e.target.closest(".book-item");
      const bookName = String($bookItem.querySelector(".book-name").innerText);
      const bookPrice = Number(
        $bookItem.querySelector(".book-price").innerText.replace(/[₩,]/g, "")
      );
      const bookIndex = this.books.findIndex((book) => book.title === bookName);

      // 미션 2 - 수정 버튼 클릭 시 모달
      if (e.target.classList.contains("edit-btn")) {
        $("#edit-book-name").value = bookName;
        $("#edit-book-price").value = bookPrice;
        $("#edit-book-index").value = bookIndex;
      }

      // 미션 3 - 삭제 버튼 클릭 시 삭제
      else if (e.target.classList.contains("delete-btn")) {
        if (confirm("정말로 삭제하겠습니까?")) {
          this.books.splice(bookIndex, 1);
          store.setLocalStorage("books", this.books);
          renderBookItem(this.currentCategory.code);
        }
      }
      // 미션 5 - 품절 버튼 삭제 시 불리언값 변경
      else if (e.target.classList.contains("soldout-btn")) {
        this.books[bookIndex].inStock = true;
        store.setLocalStorage("books", this.books);
        renderBookItem(this.currentCategory.code);
      }
    }
  });

  // 미션 2 - 수정 모달 닫기 및 렌더
  $("#book-edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    updateBook(e);
  });

  // 미션 4 - 카테고리 기능
  $(".category-select").addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      // $(".active").classList.remove("active");
      // e.target.classList.add("active");

      // const categoryCode = e.target.getAttribute("data-category-code");
      // const currentCategoryCode = e.target.dataset.categoryCode;
      // const currentCategoryName = e.target.innerText;

      // 카테고리 상태 관리를 통한 렌더링을 위해...
      this.currentCategory = {
        code: e.target.dataset.categoryCode,
        name: e.target.innerText,
      };

      rendorCategory();

      renderBookItem(this.currentCategory.code);
    }
  });

  // 미션 6 - 정렬 기능
}

const product = new Product();
product.init();
