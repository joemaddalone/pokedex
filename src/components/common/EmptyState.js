import React from 'react';
import PropTypes from 'prop-types';

const EmptyState = ({ children }) => {
  return (
    <div className="flex flex-grow-1 justify-center items-center empty-state h-100">
      {children}
    </div>
  );
};

EmptyState.propTypes = {
  children: PropTypes.node,
};

export default EmptyState;
