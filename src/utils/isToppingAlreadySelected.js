/**
 * Function to check is the selected topping already exists on the given list.
 * 
 * @param {object} topping a topping object with key name
 * @param {array} selectedToppings a list of already selected toppings
 */
const isToppingAlredySelected = (topping, selectedToppings) =>
  selectedToppings.find(({ name }) => name === topping.name)

export default isToppingAlredySelected;
