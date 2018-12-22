import React from 'react';
import startCase from 'lodash/startCase';
import map from 'lodash/map';

import Card from '../../../components/Card';

const PizzaEditForm = ({
  pizzaSizes,
  selectedSize,
  selectedToppings,
  onSelectSize,
}) => (
  <Card>
    <select onChange={e => onSelectSize(e.target.value)}>
      <option key={'select-size'} value={'undefined'}>Select a pizza size</option>
      {map(pizzaSizes, ({ name }) => (
        <option key={name} value={name}>
          {startCase(name)}
        </option>
      ))}
    </select>
  </Card>
);

export default PizzaEditForm;
