"use strict";

let myLibrary = [
  // {
  //   title: "The Hobbit",
  //   author: "JJR Tolkien",
  //   pages: 223,
  //   read: false,
  // },
  // {
  //   title: "Hooked",
  //   author: "Nir Eyal",
  //   pages: 567,
  //   read: false,
  // },
  // {
  //   title: "After Dark",
  //   author: "Haruki Murakami",
  //   pages: 1233,
  //   read: false,
  // },
];

function Book(title, author, pages, read) {
  // this.title: document.getElementById("title").value;
  // this.author: document.getElementById("author").value;
  // this.pages: document.getElementById("pages").value;
  // this.read: document.getElementById("read").value;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.addInfo = function () {
  //   return title, author, pages, read;
  // };
}

const addBookToLibrary = (event) => {
  event.preventDefault();

  let myLibraryItem = new Book();

  // Create each object
  (myLibraryItem.title = document.getElementById("title").value),
    (myLibraryItem.author = document.getElementById("author").value),
    (myLibraryItem.pages = document.getElementById("pages").value),
    (myLibraryItem.read = document.getElementById("read").value),
    // let myLibraryItem = { // this work, but use a constructor
    //   title: document.getElementById("title").value,
    //   author: document.getElementById("author").value,
    //   pages: document.getElementById("pages").value,
    //   read: document.getElementById("read").value,
    // };

    myLibrary.push(myLibraryItem);
  document.querySelector("form").reset();

  // Display on screen make a table
  // myLibrary.forEach((myLibraryItem) => {
  const tr = document.createElement("tr");
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  // TODO: replace checkbox for true or false
  // const checkbox = document.createElement("input");

  Object.values(myLibraryItem).forEach((value) => {
    let td = document.createElement("td");
    td.innerHTML = value;
    tr.prepend(deleteButton);
    tr.appendChild(td);
    // tr.appendChild(checkbox);
  });
  document.querySelector("tbody").appendChild(tr);
  // });
};
document.getElementById("form-btn").addEventListener("click", addBookToLibrary);

// work on adding to the list

// delete a list

// toggle boolean value of read within the object
