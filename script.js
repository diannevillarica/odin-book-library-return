"use strict";

let myLibrary = [
  {
    title: "The Hobbit",
    author: "JJR Tolkien",
    pages: 223,
    read: false,
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    pages: 567,
    read: false,
  },
  {
    title: "After Dark",
    author: "Haruki Murakami",
    pages: 1233,
    read: false,
  },
];

myLibrary.forEach((myLibraryItem) => {
  const tr = document.createElement("tr");
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  // TODO: replace checkbox for true or false
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  Object.values(myLibraryItem).forEach((value) => {
    let td = document.createElement("td");
    td.innerHTML = value;
    tr.prepend(deleteButton);
    tr.appendChild(td);
    tr.appendChild(checkbox);
  });
  document.querySelector("table").appendChild(tr);
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
  this.addInfo = function () {
    return title, author, pages, read;
  };
}

function AddBookToLibrary() {}

// work on adding to the list

// delete a list

// toggle boolean value of read within the object
