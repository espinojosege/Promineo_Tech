async function logJSONData() {
  let array = [];
  const response = await fetch(mockAPI);
  const jsonData = await response.json();
  //console.log(jsonData.length);
  array = jsonData;
  return array;
}
// Example POST method implementation:
async function postDataDelete(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
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
async function postDataPut(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
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
function getEl(id) {
  let element = document.getElementById(id);
  return element;
}
function createEl(el) {
  let element = document.createElement(el);
  return element;
}
function div_room(room) {
  let div_parent = createEl("div");
  div_parent.classList = "col border";
  let div_childRow = createEl("div");
  div_childRow.classList = "row row-cols-2";
  div_childRow.setAttribute("id", `${room.name}${room.id}`);
  let div_childRowChild1 = createEl("div");
  div_childRowChild1.classList = "col";
  div_childRowChild1.innerHTML = `${room.name} - Moths:${room.moths} `;
  if (room.moths == -1) {
    let form_group = createEl("div");
    form_group.classList = "form-group";
    let label = createEl("label");
    label.innerHTML = "Moths in this room:";
    label.setAttribute("for", `${room.name}${room.id}_input`);
    let inputMoths = createEl("input");
    inputMoths.setAttribute("type", "text");
    inputMoths.setAttribute("class", "form-control");
    inputMoths.setAttribute("id", `${room.name}${room.id}_input`);
    form_group.appendChild(label);
    form_group.appendChild(inputMoths);
    let btn_submitMoths = createEl("button");
    btn_submitMoths.classList = "btn btn-info";
    btn_submitMoths.setAttribute("type", "button");
    btn_submitMoths.setAttribute("id", `${room.name}${room.id}_submitMoths`);
    btn_submitMoths.innerHTML = "Submit";
    btn_submitMoths.onclick = () => {
      console.log(room.name, room.id, inputMoths.value);
      let tempRooms = [];
      tempRooms = rooms;
      console.log(tempRooms);
      console.log(rooms);
      let index = tempRooms.indexOf(room);
      console.log(index);
      console.log(tempRooms[index]);
      tempRooms[index].moths = inputMoths.value;
      console.log(tempRooms[index]);
      postDataPut(`${mockAPI}/${room.id}`, tempRooms[index]).then((data) => {
        console.log(data);
        logJSONData().then((data) => {
          rooms = data;
          console.log(rooms);
          div_rooms.innerHTML = "";
          rooms.forEach((room) => {
            div_rooms.appendChild(div_room(room));
          });
        });
      });
    };
    form_group.appendChild(btn_submitMoths);
    div_childRowChild1.innerHTML = `${room.name}: `;
    div_childRowChild1.appendChild(form_group);
  }
  let div_childRowChild2 = createEl("div");
  div_childRowChild2.classList = "col";
  let btn_delete = createEl("button");
  btn_delete.classList = "btn btn-warning";
  btn_delete.setAttribute("type", "button");
  btn_delete.setAttribute("id", `${room.name}${room.id}_delete`);
  btn_delete.innerHTML = "delete";
  btn_delete.onclick = () => {
    console.log(`button clicked for ${room.name}`);
    postDataDelete(mockAPI + `/${room.id}`).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call

      logJSONData().then((data) => {
        rooms = data;
        console.log(rooms);
        div_rooms.innerHTML = "";
        rooms.forEach((room) => {
          div_rooms.appendChild(div_room(room));
        });
      });
    });
  };
  let btn_edit = createEl("button");
  btn_edit.classList = "btn btn-success";
  btn_edit.setAttribute("type", "button");
  btn_edit.setAttribute("id", `${room.name}${room.id}_edit`);
  btn_edit.innerHTML = "edit";
  div_childRowChild2.appendChild(btn_delete);
  //div_childRowChild2.appendChild(btn_edit);
  div_childRow.appendChild(div_childRowChild1);
  div_childRow.appendChild(div_childRowChild2);
  div_parent.appendChild(div_childRow);
  return div_parent;
}
class Room {
  constructor(name) {
    this.name = name;
    this.moths = -1;
    this.id = undefined;
  }
}
const div_rooms = getEl("rooms");
const btn_createRoom = getEl("createRoom");
let input_name = getEl("name");
btn_createRoom.onclick = () => {
  let room = new Room(input_name.value);
  postData(mockAPI, room).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call

    logJSONData().then((data) => {
      rooms = data;
      console.log(rooms);
      div_rooms.innerHTML = "";
      rooms.forEach((room) => {
        div_rooms.appendChild(div_room(room));
      });
    });
  });
};
const mockAPI = "https://64954eacb08e17c91791e500.mockapi.io/page";
let rooms = [];

//postData(mockAPI, ).then((data) => {
//console.log(data); // JSON data parsed by `data.json()` call
//});

logJSONData().then((data) => {
  rooms = data;
  console.log(rooms);
  div_rooms.innerHTML = "";
  rooms.forEach((room) => {
    div_rooms.appendChild(div_room(room));
  });
});
