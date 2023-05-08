class Favorites { // declared Favorites class that will be created for User instance.
    constructor(drink, food) { // has two constructor parameters
        this.drink = drink;     // drink will be drink
        this.food = food;       // food will be food
    }

    describe() {    // this method will be used to describe the drink.
        return `Favorite Drink:\t${this.drink} Favorite Food:\t${this.food}`;
    }
}

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.favorites = [];
    }

    addFavorites(favorite) {
        if (favorite instanceof Favorites) {
            this.favorites.push(favorite)
        } else {
            throw new Error(`You can only add an instance of Favorites. Argument is not a favorites: ${favorite}`);
        }
    }

    describe() {
        return `User:\t${this.name}\n
                Age:\t${this.age}`;
    }
}

class Menu {
    constructor() {
        this.users = [];
        this.selectedUser = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0 || selection == "") {
            switch (selection) {
                case '1':
                    this.createUser();
                    break;
                case '2':
                    this.displayUsers();
                    break;
                case '3':
                    this.viewUser();
                    break;
                case '4':
                    this.deleteUser();
                    break;            
                default:
                    selection = 0;
                    break;
            }

            selection = this.showMainMenuOptions();
        }

        alert(`You are now going to view Week 05 Assignment Video.`);
    }

    showMainMenuOptions() {
        return prompt(`
        0) View Week 05 Assignment Video
        1) Create new User
        2) Display Users
        3) View User
        4) Delete User
        `);
    };

    showUserMenuOptions(userInfo) {
        return prompt(`
        ${userInfo}
        ----------------
        0) back
        1) Create Favorites
        2) Delete Favorites
        `);
    }

    createUser() {
        let name = prompt(`Enter name for new User:`);
        let age = prompt(`Enter Age for new User`);
        this.users.push(new User(name, age));
    };
    
    deleteUser() {
        let userString = '';
        if (this.users.length === 0) {
            userString += `There are no Users to display`;
        } else {
            for (let i = 0; i < this.users.length; i++) {
                userString += i + ") " + this.users[i].name + '\n';
            }
        }
        let index = prompt(`${userString}\nEnter the index of the User you wish to delete:\n `)
        if (index > -1 && index < this.users.length) {
            this.users.splice(index, 1);
        }
    }

    displayUsers() {
        let userString = '';
        if (this.users.length === 0) {
            userString += "There are no users to display";
        } else { 
        for (let i = 0; i < this.users.length; i++) {
            userString += i + ") " + this.users[i].name + '\n';
        }
    }

        alert(userString);
    }

    viewUser() {
        let usersString = '';
        if (this.users.length === 0) {
            usersString += "There are no users to display";
        } else{
            for (let a = 0; a < this.users.length; a++) {
                usersString += a + ') ' + this.users[a].name + '\n';
            }
    }
        let index = prompt(`${usersString}\nEnter the index of the user you wish to view:\n`);
        if (index > -1 && index < this.users.length) {
            this.selectedUser = this.users[index];
            let description = `\nUser: ${this.selectedUser.name} Age: ${this.selectedUser.age}`;

            for (let i = 0; i < this.selectedUser.favorites.length; i++) {
                description += `
${i}) ${this.selectedUser.favorites[i].describe()}
`;
            }

            let selection = this.showUserMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createFavorites();
                    break;
                case '2':
                    this.deleteFavorites();
            }
        }
    }

    createFavorites() {
        let drink = prompt(`Enter favorite drink`);
        let food = prompt(`Enter favorite food.`);
        this.selectedUser.favorites.push(new Favorites(drink, food));
    }

    deleteFavorites() {
        let description = `\nUser: ${this.selectedUser.name} Age: ${this.selectedUser.age}`;

        for (let i = 0; i < this.selectedUser.favorites.length; i++) {
          description +=
            "\n" +
            i +
            ") Drink: " +
            this.selectedUser.favorites[i].drink +
            " Food: " +
            this.selectedUser.favorites[i].food +
            "\n";
        }
        let index = prompt(`${description}\nEnter the index of the player you wish to delete:`);
        if (index > -1 && index < this.selectedUser.favorites.length) {
            this.selectedUser.favorites.splice(index, 1);
        }
    }
};

let menu = new Menu();

menu.start();