import React from 'react';

import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Toppings from './Toppings';
import PizzaSizeDromDown from './PizzaSizeDropDown';

const PizzaEditForm = ({
  pizzaSizes,
  selectedSize,
  selectedToppings,
  onSelectSize,
  onSelectTopping,
  onAddToCart,
  maxToppings,
}) => (
  <Card>
    <PizzaSizeDromDown
      selectedSize={selectedSize}
      pizzaSizes={pizzaSizes}
      onSelectSize={onSelectSize}
    />
    {selectedSize && selectedSize !== '-' && (
      <div>
        <Toppings
          selectedSize={selectedSize}
          selectedToppings={selectedToppings}
          disabledUnselected={maxToppings === selectedToppings.length}
          onSelectTopping={onSelectTopping}
          />
        <Button onClick={onAddToCart}>Add Pizza</Button>
      </div>
    )}
  </Card>
);

export default PizzaEditForm;
