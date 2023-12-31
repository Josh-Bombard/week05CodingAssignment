// adding a new class to structure my data in an organized way
class Type {
  constructor (name,ingredient){
    this.name = name;
    this.ingredient = ingredient;
  }

  describe () {
    return `${this.name} has ${this.ingredient}`
  }
}
// creating another class to also get my data structreed there, and created an empty array to push into
class Food {
  constructor(name){
    this.name = name;
    this.types = [];
  }
// need to add a type of food and to make sure that its actually a type of food that is in the class and pushes that onto the array. other wise error shows it didn't work.
  addType (type) {
    if (type instanceof Type){
      this.types.push(types);
    } else {
      throw new Error(`You can only add an instanceof type. Argument is not a type of food: ${type}`)
    }
  }

  describe () {
    return `${this.name} has ingredients of ${this.types.length}.`
  }
}
// creating the class for my menu, and also another empty array to push into and to sort data 
class Menu {
  constructor() {
    this.foods = [];
    this.selectedFood = null;
  }
// need to have a starting method for all of the data in the classes above and to put methods into a showMainMenuOptions to get the different options per case
  start() {
    let selection = this.showMainMenuOptions();
// do a while statement to run a switch and get the different methods to activate when picking which index to go into
    while (selection != 0) {
      switch(selection){
        case `1`:
          this.createFood();
          break;
        case `2`:
          this.viewFood();
          break;
        case `3`:
          this.deleteFood();
          break;
        case `4`:
          this.displayFoods();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert(`Goodbye`);
  }
// show the beginning prompt to sort through
  showMainMenuOptions() {
    return prompt(`
    0) Exit
    1) Create new food type
    2) View food type
    3) Delete food type
    4) Display all food types
    `)
  }
// show the options for the different foods: creating and deleting type
  showFoodMenuOptions(foodInfo) {
    return prompt(`
    0) Back
    1) Create type 
    2) Delete type 
    ----------------------------
    ${foodInfo}
    `)
  }
// display foods using a for loop to concatenate the different types of food on a new line each
  displayFoods() {
    let foodString = ``;
    for (let i = 0; i < this.foods.length; i++) {
      foodString += i + `) ` + this.foods[i].name + `\n`;
    }
    alert(foodString);
  }
// get prompt to create name of new type of food and to push the name of food into the class
  createFood () {
    let name = prompt(`Enter name for new food type`);
    this.foods.push(new Food(name));
  }
// get prompt to be able to choose between different indexes to look through and to display the names of the food types
  viewFood() {
    let index = prompt(`Enter the index of the food you wish to view`);
    if (index > -1 && index < this.foods.length) {
      this.selectedFood = this.foods[index];
      let description = `Food name: ` +this.selectedFood.name + `\n`;

      for (let i = 0; i < this.selectedFood.types.length; i++) {
        description += i + `) ` + this.selectedFood.types[i].name + ` - ` +`Ingredient(s) that enhance this food: ` + this.selectedFood.types[i].ingredient + `\n`;
      }
      
      // create a switch statement to be able to choose between deleting or creating a food type
      let selection = this.showFoodMenuOptions(description);
      switch (selection) {
        case `1`:
          this.createType();
          break;
        case `2`:
          this.deleteType();
      }
    }
  }
// be able to create a type of food using prompts and the ingredients that make the food better; pushing the new types into the class which makes what is entered 'usable'
  createType() {
    let name = prompt(`Enter type of new food`);
    let ingredient = prompt(`Enter ingredients to make the food better`);
    this.selectedFood.types.push(new Type(name,ingredient));
  }
// makes it so that it deletes the index off the array that is chosen
  deleteType () {
    let index = prompt(`Enter the index of the type of food you wish to delete.`);
    if (index > -1 && index < this.selectedFood.waffles.length){
      this.selectedFood.waffles.splice(index, 1);
    }
  }
// also makes it so that the index that is chosen is wiped off that array
  deleteFood() {
    let index = prompt(`Enter the index of the food you wish to delete.`);
    if (index > -1 && index < this.foods.length) {
      this.foods.splice(index, 1);
    }
  }
}

let menu = new Menu;
menu.start();