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
  this.read == true ? (this.read = false) : (this.read = true);
};

const addBookToLibrary = (event) => {
  event.preventDefault();

  let myLibraryItem = new Book(); // constructor

  // Create each object from form inputs
  (myLibraryItem.title = document.getElementById("title").value),
    (myLibraryItem.author = document.getElementById("author").value),
    (myLibraryItem.pages = document.getElementById("pages").value),
    (myLibraryItem.read = document.getElementById("read").value === "true");
  myLibrary.push(myLibraryItem);
  document.querySelector("form").reset();

  // Display in a table
  const tr = document.createElement("tr");
  const deleteBtn = document.createElement("button");
  const readBtn = document.createElement("button");
  readBtn.setAttribute("class", "status");

  deleteBtn.innerHTML = "Delete";

  //delete an item
  deleteBtn.addEventListener("click", function () {
    const itemTitle = this.nextSibling.textContent; // not elegant
    const itemPos = myLibrary.findIndex((item) => item.title == itemTitle);

    myLibrary.splice(itemPos, 1);

    this.parentNode.parentNode.removeChild(tr);
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

  console.log(myLibraryItem);

  // toggle boolean value of read within the object
  const readStats = document.querySelectorAll(".status");
  // if (readStats) {
  readStats.forEach((readStat) => {
    readStat.addEventListener("click", function () {
      console.log("is readStats working??");
      myLibraryItem.toggle(this);
      this.innerHTML = myLibraryItem.read;
    });
  });
  // }
};

document.getElementById("form-btn").addEventListener("click", addBookToLibrary);
