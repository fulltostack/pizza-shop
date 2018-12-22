import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import map from 'lodash/map';
import GET_PIZZA_NAMES from '../../../services/graphql/queries/getPizzaSizeByName.graphql';

import Loader from '../../../components/Loader';
import Topping from './Topping';

const ToppingsWrapper = styled.div`
  margin: 20px auto;
`;

const Toppings = ({ selectedSize, onSelectTopping }) => (
  <Query query={gql`${GET_PIZZA_NAMES}`} variables={{ name: selectedSize }}>
    {({ loading, error, data }) => (
      <ToppingsWrapper>
        {loading && <Loader />}
        {console.log('=====', data)}
        {data.pizzaSizeByName && map(data.pizzaSizeByName.toppings, ({ defaultSelected, topping }) => (
          <Topping
            onSelect={onSelectTopping}
            key={topping.name}
            defaultSelected={defaultSelected}
            {...topping}
          />
        ))}
      </ToppingsWrapper>
    )}
  </Query>
);

Toppings.propTypes = {};

export default Toppings;
