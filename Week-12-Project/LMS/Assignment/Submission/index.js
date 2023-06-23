let btn_CreateRunePage = document.getElementById("createRunePage");
let div_pages = document.getElementById("pages");
pages = [];

btn_CreateRunePage.onmouseover = () => {
  btn_CreateRunePage.classList = "btn btn-success";
};
btn_CreateRunePage.onmouseout = () => {
  btn_CreateRunePage.classList = "btn btn-secondary";
};

btn_CreateRunePage.onclick = () => {
  let newRunePage = new RunesPage(document.getElementById("name").value);
  pages.push(newRunePage);
  newRunePage.id = pages.indexOf(newRunePage);
  document.getElementById("name").value = "";
  newRunePage.display();
};

class OptionsObject {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

class RunesPage {
  constructor(name) {
    this.name = name;
    this.id = undefined;
    this.keystone = undefined;
    this.slot1 = undefined;
    this.slot2 = undefined;
    this.slot3 = undefined;
  }

  display() {
    div_pages.innerHTML = "";
    div_pages.classList = "";
    pages.forEach((page) => {
      let index = pages.indexOf(page);
      console.log(index);
      let div_col_12_classList = "";
      let div_col_12 = document.createElement("div");
      if (index == pages.length - 1) {
        div_col_12_classList = "col-12 pt-2 border";
      } else {
        div_col_12_classList = "col-12 pt-2 border mb-1";
      }
      div_col_12.classList = div_col_12_classList;
      let divId = `${this.name}_${this.id}`;
      div_col_12.setAttribute("id", divId);
      console.log(divId);
      let h2 = document.createElement("h2");
      h2.innerHTML = page.name;
      let btn_remove_page = document.createElement("button");
      btn_remove_page.classList = "btn btn-secondary float-right";
      btn_remove_page.setAttribute("type", "button");
      btn_remove_page.innerHTML = "Remove Page";
      btn_remove_page.onmouseover = () => {
        btn_remove_page.classList = "btn btn-warning float-right";
        div_col_12.classList.add("border-warning");
        div_col_12.classList.add("bg-dark");
        div_col_12.classList.add("text-light");
      };
      btn_remove_page.onmouseout = () => {
        btn_remove_page.classList = "btn btn-secondary float-right";
        div_col_12.classList = div_col_12_classList;
      };
      btn_remove_page.onclick = () => {
        let index = pages.indexOf(page);
        //console.log(index);
        pages.splice(index, 1);
        this.display();
      };
      div_col_12.appendChild(btn_remove_page);
      div_col_12.appendChild(h2);
      div_pages.appendChild(div_col_12);
    });
    if (div_pages.firstChild) {
      div_pages.classList.add("border");
      div_pages.classList.add("p-2");
    }
  }

  keystone() {
    let keystone = [
      "Electrocute",
      "Predator",
      "Dark Harvest",
      "Hail of Blades",
    ];
    return keystone;
  }

  slot1() {
    let slot1 = ["Cheap Shot", "Taste of Blood", "Sudden Impact"];
    return slot1;
  }

  slot2() {
    let slot2 = ["Zombie Ward", "Ghost Poro", "Eyeball Collection"];
    return slot2;
  }

  slot3() {
    let slot3 = [
      "Treasure Hunter",
      "Ingenious Hunter",
      "Relentless Hunter",
      "Ultimate Hunter",
    ];
    return slot3;
  }
}
