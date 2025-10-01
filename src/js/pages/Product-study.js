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
  this.books = [];
  this.books = store.getLocalStorage("books");

  const renderBookItem = () => {
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
    console.log(bookItems);
    $("#book-list").innerHTML = bookItems;
  };

  function updateBookCount() {
    $("#book-count").innerText = this.books.length;
  }

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
      //오예 내가 한 방법이 틀리지 않았다.
      const deleteBookIndex = Array.from($("#book-list").children).indexOf(
        e.target.closest(".book-item")
      );
      this.books.splice(deleteBookIndex, 1);
      renderBookItem();
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
    renderBookItem();

    // closeModal(modal);
    $("#editModal .modal-close").click();
  };
  // 첫 렌더링
  renderBookItem();

  // 미션 1 - 생성, 등록
  $("#book-regist-form").addEventListener("submit", (e) => {
    e.preventDefault();
    registBook();
  });

  // 미션 2, 3 - 수정 모달, 삭제
  $("#book-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
      updateBookForm(e);
    }

    // 미션 3 - 삭제
    if (e.target.classList.contains("delete-btn")) {
      deleteBook(e);
    }
  });

  // 미션 2 - 수정 모달 닫기 및 렌더
  $("#book-edit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    updateBook(e);
  });
}

const product = new Product();
