"use strict";

let myLibrary = [];

function Book(id, title, author, pages, read) {
  this.id = Date.now();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggle = function () {
  return this.read == "Yes" ? (this.read = "Nope") : (this.read = "Yes");
};

const addBookToLibrary = (event) => {
  event.preventDefault();

  let myLibraryItem = new Book();

  // Create each object from form inputs
  (myLibraryItem.title = document.getElementById("title").value),
    (myLibraryItem.author = document.getElementById("author").value),
    (myLibraryItem.pages = document.getElementById("pages").value),
    (myLibraryItem.read = document.getElementById("read").value);
  myLibrary.push(myLibraryItem);
  document.querySelector("form").reset();

  // Display in a table
  const tr = document.createElement("tr");
  const deleteBtn = document.createElement("button");
  const icon = document.createElement("i");
  const readBtn = document.createElement("button");
  readBtn.setAttribute("id", "read-button");
  deleteBtn.setAttribute("id", "delete-button");
  deleteBtn.appendChild(icon);
  icon.setAttribute("class", "ph-trash-bold");

  //delete an item
  deleteBtn.addEventListener("click", function () {
    const itemTitle = this.nextSibling.textContent; // not elegant :P
    const itemPos = myLibrary.findIndex((item) => item.title == itemTitle);

    myLibrary.splice(itemPos, 1);

    this.parentNode.parentNode.removeChild(tr);
  });

  // toggle boolean value of read within the object
  readBtn.addEventListener("click", function () {
    myLibraryItem.toggle();
    this.innerHTML = myLibraryItem.read;
  });

  Object.values(myLibraryItem)
    .slice(1)
    .forEach((value) => {
      let td = document.createElement("td");
      td.innerHTML = value;
      tr.prepend(deleteBtn);
      tr.appendChild(td);
    });

  readBtn.innerHTML = tr.lastChild.innerHTML;
  tr.lastChild.replaceWith(readBtn);

  document.querySelector("tbody").appendChild(tr);
};

document
  .getElementById("form-button")
  .addEventListener("click", addBookToLibrary);

document.getElementById("new-button").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "flex";
});

document.addEventListener("mouseup", function (event) {
  const form = document.querySelector("form");
  if (!form.contains(event.target)) {
    document.querySelector(".form-container").style.display = "none";
  }
});
