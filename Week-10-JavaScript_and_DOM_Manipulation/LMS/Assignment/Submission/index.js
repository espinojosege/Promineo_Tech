console.log("Hello World!");

class TableRow {
  constructor(upc, name) {
    this.upc = upc;
    this.name = name;
  }
}

function createRow(obj) {
  let tRow = document.createElement("tr");

  let tData0 = document.createElement("td");
  let tData1 = document.createElement("td");

  tData0.innerHTML = obj.upc;
  tData1.innerHTML = obj.name;

  tRow.appendChild(tData0);
  tRow.appendChild(tData1);

  return tRow;
}

let tableRows = [];

let tbody = document.getElementById("tbody");
let createEntry = document.getElementById("submit");

function displayTable(array) {
  tbody.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    tbody.appendChild(createRow(array[i]));
  }
  return console.log("Table has been updated");
}

createEntry.addEventListener("click", () => {
  let upc = document.getElementById("upc").value;
  let name = document.getElementById("item-name").value;

  tableRows.push(new TableRow(upc, name));

  displayTable(tableRows);
});

tbody.addEventListener("mouseover", () => {
  tbody.setAttribute("style", "background-color: cyan;");
});
