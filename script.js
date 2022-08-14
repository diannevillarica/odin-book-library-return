"use strict";

let myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = Date.now();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (event) => {
  event.preventDefault();

  let myLibraryItem = new Book();

  // Create each object
  myLibraryItem.id,
    (myLibraryItem.title = document.getElementById("title").value),
    (myLibraryItem.author = document.getElementById("author").value),
    (myLibraryItem.pages = document.getElementById("pages").value),
    (myLibraryItem.read = document.getElementById("read").value),
    myLibrary.push(myLibraryItem);
  document.querySelector("form").reset();

  console.log(myLibraryItem.read);

  // Display in a table
  const tr = document.createElement("tr");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.innerHTML = "Delete";

  //delete an item
  deleteButton.addEventListener("click", function () {
    const itemTitle = this.nextSibling.textContent;
    const itemPos = myLibrary.findIndex((item) => item.title == itemTitle);

    myLibrary.splice(itemPos, 1);

    this.parentNode.parentNode.removeChild(tr);
  });

  // TODO: replace checkbox for true or false
  // const checkbox = document.createElement("input");

  Object.values(myLibraryItem)
    .slice(1)
    .forEach((value) => {
      let td = document.createElement("td");
      td.innerHTML = value;
      tr.prepend(deleteButton);
      tr.appendChild(td);
      // tr.appendChild(checkbox);
    });

  document.querySelector("tbody").appendChild(tr);

  // console.log(myLibrary);
  console.log(myLibraryItem);
};

document.getElementById("form-btn").addEventListener("click", addBookToLibrary);

// delete a list

// toggle boolean value of read within the object

// value true is being stored?
// find a way to delete array element within delete button
