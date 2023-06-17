/*//let body = $("body");
//console.log(body[0]);

let p = $("#test");
let div = $(".my-class");
let ul = $("ul");

console.log(p, div, ul);

//console.log(p.text());
p.text("New Text");

let input = $("input");

//input.val("new val");

input.attr("placeholder", "Input Text Here");

div.prepend("<p>prepend paragraph</p>");
div.append("<p>appended paragraph</p>");
div.after("<p>after paragraph</p>");
div.before("<p>before paragraph</p>");

div.empty();
ul.remove();

input.hide();
setTimeout(() => {
    input.show()
}, 3000);*/

$.get("https://reqres.in/api/users/2", (data) => {
  console.log(data);
});

$.post(
  "http://reqres.in/api/users",
  { name: "Tommy", job: "Front End Software Developer" },
  (data) => {
    console.log(data);
  }
);
