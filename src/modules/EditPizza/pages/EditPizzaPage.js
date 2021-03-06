import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { createStructuredSelector } from 'reselect';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import GET_PIZZA_DETAILS from '../../../services/graphql/queries/getPizzaDetails.graphql';

import Loader from '../../../components/Loader';
import PizzaEditForm from '../components/PizzaEditForm';
import calcOrderPrice from '../../../utils/calcOrderPrice';

import { updateFormData, resetFormData, updateToppings } from '../actions';
import { addItemToCart } from '../../Cart/actions'
import { getSelectedSize, getSelectedToppings, getMaxToppings, getBasePrice } from '../selectors';

class EditPizza extends React.Component {
  componentWillUnmount() {
    this.props.resetFormData();
  }

  addToCart() {
    const {
      selectedToppings,
      selectedSize,
      onAddToCart,
      basePrice,
    } = this.props;

    const orderItem = {
      id: uuid(),
      selectedToppings,
      basePrice,
      pizzaName: selectedSize,
      orderTotal: calcOrderPrice(basePrice, selectedToppings),
    };

    onAddToCart(orderItem);
  }

  render() {
    const {
      selectedToppings,
      selectedSize,
      onSelectSize,
      onSelectTopping,
      maxToppings,
    } = this.props
    return (
      <Query query={gql`${GET_PIZZA_DETAILS}`}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loader />;
          }

          return (
            <PizzaEditForm
              pizzaSizes={data.pizzaSizes}
              selectedToppings={selectedToppings}
              selectedSize={selectedSize}
              maxToppings={maxToppings}
              onSelectSize={size => onSelectSize(size, data.pizzaSizes)}
              onSelectTopping={topping => onSelectTopping(topping)}
              onAddToCart={() => this.addToCart()}
            />
          )
        }}
      </Query>
    );
  }
}

const mapStateToProps = state => createStructuredSelector({
  selectedSize: getSelectedSize,
  selectedToppings: getSelectedToppings,
  maxToppings: getMaxToppings,
  basePrice: getBasePrice,
});

const mapDispatchToProps = dispatch => ({
  onSelectSize: (size, pizzaSizes) => {
    const selectedPizza = pizzaSizes.find(({ name }) => name === size);
    dispatch(resetFormData())
    dispatch(updateFormData('size', size));
    dispatch(updateFormData('basePrice', selectedPizza.basePrice));
    dispatch(updateFormData('maxToppings', selectedPizza.maxToppings));
  },
  onSelectTopping: topping => dispatch(updateToppings(topping)),
  onAddToCart: orderItem => {
    dispatch(addItemToCart(orderItem));
    dispatch(resetFormData());
  },
  resetFormData: () => dispatch(resetFormData()),
});

EditPizza.propTypes = {
  selectedSize: PropTypes.string,
  selectedToppings: PropTypes.array,
  maxToppings: PropTypes.number,
  basePrice: PropTypes.number,
  onSelectSize: PropTypes.func.isRequired,
  onSelectTopping: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  resetFormData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPizza);
