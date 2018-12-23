import sum from 'lodash/sum';
import map from 'lodash/map';

/**
 * Function to calculate the effective price of a pizza order item
 * @param {number} basePrice price of the pizza according to the size
 * @param {array} selectedToppings list of selected toppings
 */
const calcOrderPrice = (basePrice, selectedToppings) =>
  basePrice + sum(map(selectedToppings, ({ price }) => price));

export default calcOrderPrice;
