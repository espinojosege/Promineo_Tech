// https://6298beb2f2decf5bb74a9eb.mockapi.io
// https://6298beb2f2decf5bb74a9edb.mockapi.io/books

let bookNameInput = document.getElementById("bookName-input");
console.log(bookNameInput);

let bookAuthorInput = document.getElementById("bookAuthor-input");
console.log(bookAuthorInput);

let bookStatus = document.getElementById("status");
console.log(bookStatus);

let submitButton = document.getElementById("submit");
console.log(submitButton);

let wantDisplay = document.getElementById("want-display");
console.log(wantDisplay)

let currentDisplay = document.getElementById("current-display");
console.log(currentDisplay)

let readDisplay = document.getElementById("read-display");
console.log(readDisplay);


const url = "https://6298beb2f2decf5bb74a9edb.mockapi.io/books"
let bookList = []; // storing books from the api.

async function getBooks() {
    //try catch block
    try {
        // get a response from the api
        let response = await fetch(url);
        console.log("response: ", response)

        let data = await response.json();
        console.log("data from the api:", data);

        // assign data to the bookList;
        bookList = data;
        createBookDiv();
        console.table(bookList);

    } catch (error) {
        console.log(error)
    }
};

getBooks();

// function to post books (send) to the api

async function postBooks() {
    console.log("inside the postBooks function: ");

    // create response

    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          // what's being sent to the api
          bookName: bookNameInput.value,
          bookAuthor: bookAuthorInput.value,
          read: bookStatus.value === "read",
          currentlyReading: bookStatus.value === "currently-reading",
          wantToRead: bookStatus.value === "want-to-read",
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
        getBooks();
      console.log("Printing response from postBooksL", response);
    } catch (error) {
      console.log(error);
    }
}


// creating an event to listen to the button click and send information to the api.
submitButton.addEventListener('click', () => {
    postBooks();
    clearInputs();
});

function clearInputs() {
    bookNameInput.value = "";
    bookAuthorInput.value = "";
    bookStatus.value = "";
}

function createBookDiv() {
    let books = bookList.map((book) => {
        return `
        <div>
        <h1>
        ${book.bookName}
        </h1>
        <h4>
        ${book.bookAuthor}
        </h4>
        <h4>${getReadStatus(book)}
        </h4>
        </div>
        `
    });
    organizeBooks(books);
    return books;
}


function getReadStatus(book) {
    //if the book read status is true
    if (book.read === true) {
        return "Read"
    } else if (book.currentlyReading === true) {
        return "Currently Reading"
    } else if (book.wantToRead === true) {
        return "Want to Read"
    } else {
        return "Unknown"
    }

    // if the book currently reading is true

    // if the book want to read is true

    // if the data is bad (not above, then give uncat status)
}

function organizeBooks(books) {
    for (let book of books) {
        if (book.includes("Want to Read")) {
            wantDisplay.innerHTML += book;
            console.log("book from organizedBooks", book)
        } else if (book.includes("Currently Reading")) {
            currentDisplay.innerHTML += book;
            console.log("currently reading:", book);
        } else if (book.includes("Read")) {
            readDisplay.innerHTML += book;
            console.log("read:", book);
        }
    }
}
