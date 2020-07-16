import React from 'react';
import PropTypes from 'prop-types';
import './PanelHeader.css';

const PanelHeader = ({ children }) => (
  <div className="panel-header">{children}</div>
);

PanelHeader.propTypes = {
  children: PropTypes.node,
};

export default PanelHeader;
