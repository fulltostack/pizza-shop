import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import GET_PIZZA_NAMES from '../../../services/graphql/queries/getPizzaNames.graphql';

import Loader from '../../../components/Loader';
import PizzaEditForm from '../components/PizzaEditForm';

import { updateFormData, resetFormData } from '../actions';
import { getSelectedSize, getSelectedToppings } from '../selectors';

class EditPizza extends React.Component {
  componentWillUnmount() {
    this.props.resetFormData();
  }

  render() {
    return (
      <Query query={gql`${GET_PIZZA_NAMES}`}>
        {({ loading, error, data }) => (
          <div>
            {loading && <Loader />}
            {data && data.__type && (
              <PizzaEditForm
                pizzaSizes={data.__type.enumValues}
                selectedToppings={this.props.selectedToppings}
                selectedSize={this.props.selectedSize}
                onSelectSize={this.props.onSelectSize}
              />
            )}
          </div>
        )}
      </Query>
    );
  }
}

const mapStateToProps = state => createStructuredSelector({
  selectedSize: getSelectedSize,
  selectedToppings: getSelectedToppings,
});

const mapDispatchToProps = dispatch => ({
  onSelectSize: size => dispatch(updateFormData('selectedSize', size)),
  // onSelectTopping: size => {
  //   dispatch(updateFormData('selectedSize', size))
  // },
});

EditPizza.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditPizza);
