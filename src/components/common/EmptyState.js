import React from 'react';
import PropTypes from 'prop-types';
import './EmptyState.css';

const EmptyState = ({ children }) => {
  return (
    <div className="flex flex-grow-1 justify-center items-center empty-state">
      {children}
    </div>
  );
};

EmptyState.propTypes = {
  children: PropTypes.node,
};

export default EmptyState;
