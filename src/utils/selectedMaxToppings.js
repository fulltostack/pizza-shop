/**
 * Function to check if user has already selected max number of toppings.
 * 
 * @param {number} maxToppings Max number of toppings a pizza can have
 * @param {array} selectedToppings toppings already selected to be applied on the pizza
 */
const selectedMaxToppings = (maxToppings, selectedToppings) =>
  maxToppings && selectedToppings.length === maxToppings ;

export default selectedMaxToppings;
