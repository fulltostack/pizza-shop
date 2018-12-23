import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import map from 'lodash/map';
import Select from '../../../components/Select';
import Option from '../../../components/Option';

const DropDown = ({ onSelectSize, pizzaSizes, selectedSize }) => (
  <Select defaultValue={selectedSize || '-'} onChange={e => onSelectSize(e.target.value)}>
    <Option key={'select-size'} value="-" disabled>Select a pizza size</Option>
    {map(pizzaSizes, ({ name }) => (
      <Option key={name} value={name}>
        {startCase(name)}
      </Option>
    ))}
  </Select>
);

export default DropDown;
