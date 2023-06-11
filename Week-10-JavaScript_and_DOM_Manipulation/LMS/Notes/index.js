//let button = document.getElementById('my-button');
//console.log(button);

//let buttonsByTag = document.getElementsByTagName('button');
//console.log(buttonsByTag);

//let buttonsByClass = document.getElementsByClassName('my-class');
//console.log(buttonsByClass);

//button.innerHTML = 'hello'

//for (let i = 0; i < buttonsByClass.length; i++) {
//    const element = buttonsByClass[i];
//    element.innerHTML = 'class-button'
//}

//let buttonsByCssSelector = document.querySelectorAll('button.my-class');
//console.log(buttonsByCssSelector)

let button = document.getElementById("btn");
let content = document.getElementById("content");

button.addEventListener("click", () => {
  if (content.innerHTML == "Goodbye.") {
    content.innerHTML = "Hello.";
  } else {
    content.innerHTML = "Goodbye.";
  }
});

document.getElementById("remove").addEventListener("click", () => {
  let idToRemove = document.getElementById("remove-id").value;
  let elementToRemove = document.getElementById(idToRemove);
  elementToRemove.parentNode.removeChild(elementToRemove);
  document.getElementById('remove-id').value = '';
});

let id = 1;

document.getElementById("add").addEventListener("click", () => {
  pid = id++;
  var parent = document.getElementById("paragraphs");
  var newElement = document.createElement("p");
  newElement.setAttribute("id", pid);
  newElement.innerHTML = document.getElementById("new-text").value + " " + pid;
  parent.appendChild(newElement);
  document.getElementById("new-text").value = "";
});
