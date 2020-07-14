import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

const ComponentLoader = ({ label }) => {
  return (
    <div className="component-loader">
      <Loader active>{label}</Loader>
    </div>
  );
};

ComponentLoader.propTypes = {
  label: PropTypes.string,
};

export default ComponentLoader;
