class Member {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class Team {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  deleteMember(member) {
    let index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }
}

let teams = [];
let teamId = 0;

function onClick(id, action) {
  console.log(`Clicked on ${id} button`);
  let element = document.getElementById(id);
  element.addEventListener("click", action);
  console.log(`The action that was invoked was ${action}`);
  return element;
}

onClick("new-team", () => {
  teams.push(new Team(teamId++, getValue("new-team-name")));
  drawDOM();
});

function getValue(id) {
  return document.getElementById(id).value;
}

function createDeleteButton() {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.innerHTML = "Delete";
  return btn;
}

function drawDOM() {
  let teamDiv = document.getElementById("teams");
  clearElement(teamDiv);
  for (team of teams) {
    let table = createTeamTable(team);
    let title = document.createElement("h2");
    title.innerHTML = team.name;
    title.appendChild(createDeleteTeamButton(team));
    teamDiv.appendChild(title);
    teamDiv.appendChild(table);
    for (member of team.members) {
      console.log(`Member ${member} of team ${team}`);
      createMemberRow(team, table, member);
    }
  }
}

function createMemberRow(team, table, member) {
  let row = table.insertRow(2);
  row.insertCell(0).innerHTML = member.name;
  row.insertCell(1).innerHTML = member.position;
  console.log(team.name, member.name, member.position, "From CreateMemberRow");
  let action = row.insertCell(2);
  action.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
  let btn = createDeleteButton();
  btn.onclick = () => {
    console.log(team, member, "From CreateDeleteRowButton");
    let index = team.members.indexOf(member);
    team.members.splice(index, 1);
    drawDOM();
  };

  return btn;
}

function createDeleteTeamButton(team) {
  let btn = createDeleteButton();
  btn.onclick = () => {
    console.log(team, "From createDeleteTeamButton");
    let index = teams.indexOf(team);
    teams.splice(index, 1);
    drawDOM();
  };

  return btn;
}

function clearElement(element) {
  while (element.firstChild) {
    console.log("First child removed", element.firstChild);
    element.removeChild(element.firstChild);
  }
}

function createTeamTable(team) {
  console.log(team, "From createTeamTable");
  let table = document.createElement("table");
  table.className = "table table-dark table-striped";
  let row = table.insertRow(0);
  let nameColumn = document.createElement("th");
  let positionColumn = document.createElement("th");
  nameColumn.innerHTML = "Name";
  positionColumn.innerHTML = "Position";
  row.appendChild(nameColumn);
  row.appendChild(positionColumn);
  let formRow = table.insertRow(1);
  let nameTh = document.createElement("th");
  let positionTh = document.createElement("th");
  let createTh = document.createElement("th");
  let nameInput = document.createElement("input");
  nameInput.setAttribute("id", `name-input-${team.id}`);
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("class", "form-control");
  let positionInput = document.createElement("input");
  positionInput.setAttribute("id", `position-input-${team.id}`);
  positionInput.setAttribute("type", "text");
  positionInput.setAttribute("class", "form-control");
  let newMemberButton = createNewMemberButton(team);
  nameTh.appendChild(nameInput);
  positionTh.appendChild(positionInput);
  createTh.appendChild(newMemberButton);
  formRow.appendChild(nameTh);
  formRow.appendChild(positionTh);
  formRow.appendChild(createTh);
  return table;
}

function createNewMemberButton(team) {
  let btn = createDeleteButton();
  btn.innerHTML = "Create";
  btn.onclick = () => {
    team.members.push(
      new Member(
        getValue(`name-input-${team.id}`),
        getValue(`position-input-${team.id}`)
      )
    );
    drawDOM();
  };
  return btn;
}
