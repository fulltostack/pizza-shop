import React from 'react';
import startCase from 'lodash/startCase';
import map from 'lodash/map';

import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Toppings from './Toppings';

const PizzaEditForm = ({
  pizzaSizes,
  selectedSize,
  selectedToppings,
  onSelectSize,
  onSelectTopping,
  onAddOrder,
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
    {selectedSize && (
      <div>
        <Toppings
          selectedSize={selectedSize}
          selectedToppings={selectedToppings}
          onSelectTopping={onSelectTopping}
          />
        <Button onClick={onAddOrder}>Add Pizza</Button>
      </div>
    )}
  </Card>
);

export default PizzaEditForm;
