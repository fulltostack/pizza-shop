import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  cursor: {({ disabled }) => disabled ? 'unset' : 'pointer'};
  margin: 2px auto;
  display: flex;
  background-color: ${({ disabled }) => disabled ? 'lightgray' : '#f5f5f5'};
  border-left-color: ${({ selected }) => selected ? 'dimgrey' : 'transparent'};
  border-left-style: solid;
  border-left-width: 5px;

  :hover {
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background-color: ${({ disabled }) => disabled ? 'lightgray' : '#ffffff'};
  }
`;

class Topping extends Component {
  constructor(props) {
    super(props);

    if (props.defaultSelected) {
      props.onSelect(props.name);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.defaultSelected !== nextProps.defaultSelected && this.props.defaultSelected
    ) {
      this.props.onSelect(nextProps.name);
    }
  }

  render() {
    const {  name, price, onSelect, selected, disabled } = this.props;
    return (
      <Wrapper
        selected={selected || false}
        disabled={disabled}
        onClick={() => !disabled && onSelect()}
      >
        <input type="checkbox" defaultChecked={selected || false} disabled={disabled} /> {name} - ${price}
      </Wrapper>
    );
  }
}

export default Topping;
