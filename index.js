/* create a link element
const link = document.createElement('a');

set the href and textContent properties
link.href = 'https://www.example.com';
link.textContent = 'Click here to visit Example.com';

add the link to the document
document.body.appendChild(link);
 */
let htmlLinks = [
  `Week-01-Variables\\Labs\\index.html`,
  `Week-03-CLI_Source_Control_and_Arrays_and_Functions\\index.html`,
  "Week-04-ECMAScript_6_and_Intermediate_JavaScript\\LMS\\Assignment\\Submission\\week04Assignment.html",
  "Week-05-Object_Oriented_Programming\\LMS\\Assignment\\Submission\\W05AssSub.html",
  "Week-06-DevTools_Debugging_and_Unit_Tests\\LMS\\Assignment\\Submission\\W06AssSub.html",
  "Week-07-HTML\\LMS\\Assignment\\Submission\\index.html",
  `Week-08-CSS\\LMS\\Assignment\\Submission\\html\\index.html`,
  "Week-09-Bootstrap\\LMS\\Assignment\\Submission\\index.html",
  "Week-10-JavaScript_and_DOM_Manipulation\\LMS\\Assignment\\Submission\\index.html",
  "Week-11-JQuery_and_AJAX\\LMS\\Assignment\\Submission\\index.html",
  "Week-12-Project\\LMS\\Assignment\\Submission\\index.html",
];
let olLinks = document.getElementById("htmlLinks");

function createLinks(linkUrl) {
  let li = document.createElement("li");
  let link = document.createElement("a");
  link.href = linkUrl;

  let linkStringArray = linkUrl.split("\\");
  let LinkTextContent = `${linkStringArray[0]} ${
    linkStringArray[linkStringArray.length - 1]
  }`;
  link.textContent = LinkTextContent;
  li.appendChild(link);

  return li;
}
function addlinks(url, name) {
  let li = document.createElement("li");
  let link = document.createElement("a");
  link.href = url;
  let LinkTextContent = `${name}`;
  link.textContent = LinkTextContent;
  li.appendChild(link);

  return li;
}
let links = htmlLinks.forEach((element) =>
  olLinks?.appendChild(createLinks(element))
);

olLinks.appendChild(
  addlinks(`https://espinojosege.github.io/reactAppWeek13/`, `Week 13 ReactApp`)
);
