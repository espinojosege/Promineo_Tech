function getElement(id = "") {
  let element = document.getElementById(id);
  return element;
}
function createElement(element) {
  let ele = document.createElement(element);
  return ele;
}
class Room {
  constructor(name, moths) {
    this.name = name;
    this.moths = moths;
    this.id = undefined;
  }
}
let rooms = [];
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
//postData("https://64954eacb08e17c91791e500.mockapi.io/page", magePage).then(
//  (data) => {
//    console.log(data); // JSON data parsed by `data.json()` call
//  }
//);
async function logJSONData(array) {
  const response = await fetch(
    "https://64954eacb08e17c91791e500.mockapi.io/page"
  );
  const jsonData = await response.json();
  for (let i = 0; i < jsonData.length; i++) {
    let currentData = jsonData[i];
    //console.log(currentData);
    let room = new Room(currentData.name, currentData.moths);
    room.id = currentData.id;
    //console.log(runePage)
    array.push(room);
  }
  array.forEach((item) => {
    console.log(item);
  });
}
//logJSONData();
/*<button type="button" class="btn btn-secondary" id="createRunePage">*/
let b_createPage = getElement("createRunePage");
/*<div class="row" id="pages">*/
let div_pages = getElement("pages");
/*<input type="text" class="form-control" id="name" aria-describedby="nameHelp"/>*/
let nameInput = getElement("name");
const mockAPI = "https://64954eacb08e17c91791e500.mockapi.io/page";
b_createPage.onclick = () => {
  let room = new Room(nameInput.value, 0);
  postData(mockAPI, room).then((data) => {
    console.log(data);
  });
  logJSONData(rooms);
  //console.log(runePage);
};

//logJSONData(rooms);
