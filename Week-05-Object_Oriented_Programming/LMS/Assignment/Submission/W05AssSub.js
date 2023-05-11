class Stat {
  constructor(stat, value) {
    this.stat = stat;
    this.value = value;
  }

  describe() {
    return `${this.stat} = ${this.value}`;
  }
  /* Declared new class called Stat which will be a property of User.
A property of user meaning that under each User you are able to
create a stat for that User. This can be any stat you can imagine.
The describe method will return a string with the stat and the stats value.
The new line added at the end of the string will be useful when listing multiple
stats created for that user.*/
}

class User {
  constructor(name) {
    this.name = name;
    this.stats = [];
  }

  addStat(stat) {
    if (stat instanceof Stat) {
      this.stats.push(stat);
    } else {
      throw new Error(
        `You can only add an instance of Stat Class. Argument is not a Stat instance: ${stat}`
      );
    }
  }

  describe() {
    return `User: ${this.name}`;
  }
  /* Declared new class called User which will be the user created through the prompt.
It will only have one constructor which will be name.The array stats will hold the
instance of Stat class object which will have a stat and value pair strings that
will describe anything that it had been declared to.
AddStat method will add a stat to the array only if the stat is an instance of the 
class Stat. If not it will display an error and display the stat that it is trying
to push to the array stats.
The describe method will only describe the User by it's name. */
}

class Menu {
  /* Declared new class called Menu which will have the main program to this app.
You have to declare a new variable with a new instance of Menu and then invoke
the new variable.start() to start a new menu and the program will start at the
loading of the page. Constructor takes in no parameters but declares users array.
Users array will be the array with all the users created. SelectedUsers will be
the variable that will have the current selected user attached to it for 
displaying user.*/
  constructor() {
    this.users = [];
    this.selectedUser = null;
  }

  start() {
    let selection = this.mainMenu();
    while (selection != 0 || selection == "") {
      switch (selection) {
        case "1":
          this.createUser();
          break;
        case "2":
          this.deleteUser();
          break;
        case "3":
          this.displayUsers();
          break;
        case "4":
          this.viewUser();
          break;
        default:
          selection = 0;
          break;
      }
      selection = this.mainMenu();
    }
    alert(`You are viewing Week 05 Assignment Video.`);
  }
  /* The start() method will be the main prompt menu that will be used in the app.
First it will have the selection equal to a prompt that will ask the user to input
a value. This value will then go into a while loop which will keep the prompt
persistent until the user makes an input choice.I have set - up this while loop to
have not selection if the value has an empty string or if the selection is  not zero.
If the selection is zero it will close the menu and show the assignment 05 video. */
  mainMenu() {
    return prompt(`
        0) Week 05 Assignment Video
        1) Create new User
        2) Delete User
        3) View all Users
        4) View User
        `);
  }
  /* Main menu will be the main menu of the program.depending on what input it has it
will have a function attached to each option. */

  createUser() {
    let name = prompt(`Enter Name for new User`);
    while (name == "") {
      name = prompt(`Error: Name is blank\nEnter Name for new User`);
    }
    let userName = name.toUpperCase();
    const NEWUSER = new User(userName);
    this.users.push(NEWUSER);
    alert(`[${NEWUSER.describe()}] added to users`);
    /* declared new method called CreateUser() which prompts the name for a new user.
used the same syntax as the mainMenu prompt where the prompt is persistent if the
user input is left blank.After the input has been typed.It alerts the user of the
name that was input and declares it after it converts the string to uppercase.
Pushes new user to the array called users where it will be stored. */
  }

  deleteUser() {
    /* declared new method of class menu called deleteUser() This method deletes a 
user that has been created from the createUser() method. We start by declaring a new
empty string. the if statement checks if there is users to display, if no users are 
available, it will return an alert message saying there are not users to display
and it will take you to the previous menu.*/
    let userString = "";
    if (this.users.length === 0) {
      let alertStr = (userString += `There are not users to display`);
      return alert(alertStr);
    } else {
      /*
If there is users, it will list the users available for deletion.
again, I used the same syntax as before and made the prompt persistent if the
input is left blank. Once the input is ready, it will use an alert to notify
which user was deleted.
*/
      for (let i = 0; i < this.users.length; i++) {
        userString += `${i}) ${this.users[i].name}\n`;
      }
    }
    let index = prompt(
      `${userString}\nEnter the index of the User you wish to delete:`
    );
    while (index == "") {
      index = prompt(
        `${userString}\nError: Index is blank\nEnter index of the User you wish to delete:`
      );
    }
    /*
        Declared index as a prompt input method that requires an input. Again I have made the 
prompt persistent while it is blank.
*/
    if (index > -1 && index < this.users.length) {
      alert(`You have deleted [ ${this.users[index].describe()} ].`);
      this.users.splice(index, 1);
      /* This if statement reads user input, if the index is in between 0 and the length of the
    array of users it will alert the user of the user that was deleted.
    if it is not in between those numbers, it will alert the user that it is not
    in between those numbers and displays the users again and goes back to the top of 
    the function. */
    } else {
      alert(
        `${userString}\nError: Index Invalid. please input index from current users.`
      );
      this.deleteUser();
    }
  }

  displayUsers() {
    /* 
    declared new method called dispayUsers(). When invoked from the menuOptions it will 
    declare an empty string first, then check wether there is users to display. If no users
    to display, alerts user that there are no users to display. If there is users,
    concatenates a for loop that iterates through users array and adds every user to the
    string. after it goes through all the array, it will return the string in an alert.
    */

    let userString = "";
    if (this.users.length === 0) {
      let promptStr = `There are no users to display`;
      return alert(promptStr);
    } else {
      for (let i = 0; i < this.users.length; i++) {
        userString += `${i}) ${this.users[i].describe()}\n`;
      }
    }
    return alert(userString);
  }

  viewUser() {
    /* 
Declared a new method on this class Menu called viewUser() which displays a menu in
which you can create stats for a user after you have selected which user to view.
Displays a menu from method called UserOptions().
*/
    let userString = "";
    if (this.users.length === 0) {
      let alertStr = `There are no users to display`;
      return alert(alertStr);
      /* 
checks wether there are users to display. If no users found, alerts user that there
is no users to display. If users found, adds users to empty string UserString.
Prompts user to input which user to view. If it is an empty string the prompt will be persistent again like in previous methods.
*/
    } else {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].stats.length === 0) {
                userString += `${i}) ${this.users[i].describe()} [add Stats]\n`;
            } else {
                userString += `${i}) ${this.users[i].describe()} [${this.users[i].stats[0].describe()}]\n`
            }
        };
      };
    let index = prompt(
      `${userString}\nEnter the index of the user you wish to view:`
    );
    while (index == "") {
      index = prompt(
        `${userString}\nError: Index is blank\nEnter index of the User you wish to view:`
      );
      };
    if (index > -1 && index < this.users.length) {
      this.selectedUser = this.users[index];
      let description = `${this.selectedUser.describe()}`;
      for (let i = 0; i < this.selectedUser.stats.length; i++) {
        description += `\n${i}) ${this.selectedUser.stats[i].describe()}`;
        };
/* 
Once the selection has been made, the description variable string will hold the
selectedUsers stats and it will pass the description string onto another function
called UserOptions which will be a menu that will display selectedUser and it's stats
*/

        let select = this.userOptions(description);
                switch (select) {
                    case "1":
                        this.createStat();
                        break;
                    case "2":
                        this.deleteStat();
                };
            /* 
            Description string will be given as an argument of userOptions function which is
            a menu that will prompt user to either create a stat or delete a stat.
            */
        } else {
            /* 
            if the selection index was invalid it will alert user that the index is invalid
            and to please select an index from current users and it will display
            userString which is a string that has all the users from users array 
            concatenated into one string.        
            */
           alert(
               `${userString}\nError: Index Invalid. please input index from current users.`
               );
               this.viewUser();
            };
        };
        
        userOptions(userInfo) {
            /* 
Declared new method for class menu called UserOptions() which is a submenu of viewUsers
() method. The parameters include only one which is a string, the string has the 
selected user from ViewUser() prompt input selection. UserOptions() method has two
new methods available for currently selectedUser. These methods will be create stats.
or delete Stats.
*/

return prompt(`
${userInfo}
--------------------
0) Back
1) Create Stat
2) Delete Stat
`)
}

createStat() {
/* 
declared new method for class Menu called createStat which is accessible from the
submenu of viewUser(). This method when invoked from UserOptions() prompt, will allow
input of a new STAT that will be created from class Stat. This object called stat will
have a stat, value pair of arguments that will be stored in array called stats inside
current selectedUser. The strings have been set to lowercase to distinguish from the
user name. further more, once completed creating new stat for selectedUSer. An alert
message will be displayed with the stat created. At the end of the function after
the alert, the program will return to viewUser() method to select a new user.
 */    
    let stat = prompt(`Enter stat for ${this.selectedUser.describe()}`);
    while (stat == "") {
        stat = prompt(`Error: Stat is blank\nEnter stat for ${this.selectedUser.describe()}`);
    };
    let newStat = stat.toLowerCase();
    let value = prompt(`Enter value for ${newStat}`);
    while (value == "") {
        value = prompt(`Error: Value is blank\n Enter value for ${newStat}`);
    };
    let newValue = value.toLowerCase();
    const NEWSTAT = new Stat(newStat, newValue);
    this.selectedUser.stats.push(NEWSTAT);
    alert(`[${NEWSTAT.describe()}] added to [${this.selectedUser.describe()}] stats.`);
    let description = `${this.selectedUser.describe()}`;
    for (let i = 0; i < this.selectedUser.stats.length; i++){
        description += `\n${i}) ${this.selectedUser.stats[i].describe()}`;
    }
    return this.viewUser();
};

deleteStat() {
/* 
created new method for class menu() called delete deleteStat() which is a sub
menu of method viewUser(). This method declared from userOptions menu where
input was 2. first declares a string variable with selectedUser displayed.
checks if array of selectedUsers stats exist, if not displays alert no stats
to display. next prompts which index to delete if stats do exist.
has the persistent prompt until input is met with current menu options.
finally, when use finally selects which stat to delete, a alert will display
which stat was deleted from selectedUser. finally returns to the viewuser() 
method.
*/    


    let description = `\n${this.selectedUser.describe()}`;
    if (this.selectedUser.stats.length === 0) {
            let alrtStr = (description += `\nThere are no stats to display`);
            return alert(alrtStr);
        } else {
            for (let i = 0; i < this.selectedUser.stats.length; i++) {
                description += `\n${i}) ${this.selectedUser.stats[i].describe()}`;
            };
        };
        let index = prompt(`${description}\nEnter the index of the stat you wish to delete:`);
        while (index == "") {
            index = prompt(`${description}\nError: index is blank\nEnter index of the stat you wish to delete:`)
        };
        if (index > -1 && index < this.selectedUser.stats.length) {
            alert(`You have deleted [${this.selectedUser.stats[index].describe()}]`)
            this.selectedUser.stats.splice(index, 1);
        } else {
            alert(`${description}\nError: Index invalid. Please input index from current stats.`);
            this.deleteStat();
    };
        return this.viewUser();
    };


}

const MENU = new Menu();

MENU.start();
