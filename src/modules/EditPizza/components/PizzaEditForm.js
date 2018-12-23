import React from 'react';
import PropTypes from 'prop-types';

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

PizzaEditForm.propTypes = {
  maxToppings: PropTypes.number,
  pizzaSizes: PropTypes.array,
  selectedSize: PropTypes.string,
  selectedToppings: PropTypes.array,
  onSelectSize: PropTypes.func.isRequired,
  onSelectTopping: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default PizzaEditForm;
