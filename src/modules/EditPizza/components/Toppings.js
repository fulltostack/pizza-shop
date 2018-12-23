import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import map from 'lodash/map';
import toUpper from 'lodash/toUpper';
import GET_PIZZA_NAMES from '../../../services/graphql/queries/getPizzaSizeByName.graphql';

import Loader from '../../../components/Loader';
import Topping from './Topping';

const ToppingsWrapper = styled.div`
  margin: 20px auto;
`;

const isToppingSelected = (topping, selectedToppings) =>
  selectedToppings.find(({ name }) => name === topping.name);

const Toppings = ({ selectedSize, onSelectTopping, selectedToppings, disabledUnselected }) => (
  <Query query={gql`${GET_PIZZA_NAMES}`} variables={{ name: toUpper(selectedSize) }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loader />;
      }

      return (
        <ToppingsWrapper>
          {map(data.pizzaSizeByName.toppings, ({ defaultSelected, topping }) => (
            <Topping
              onSelect={() => onSelectTopping(topping)}
              key={topping.name}
              name={topping.name}
              price={topping.price}
              selected={isToppingSelected(topping, selectedToppings)}
              disabled={!isToppingSelected(topping, selectedToppings) && disabledUnselected}
              defaultSelected={defaultSelected}
            />
          ))}
        </ToppingsWrapper>
      );
    }}
  </Query>
);

Toppings.propTypes = {};

export default Toppings;
