import { useEffect } from 'react';
import PropTypes from 'prop-types';

const EscapeKey = ({ onEscape, preventEscWhen, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  });

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      if (preventEscWhen) {
        return;
      }
      onEscape();
    }
  };
  return children ? children : null;
};

EscapeKey.propTypes = {
  children: PropTypes.node,
  onEscape: PropTypes.func.isRequired,
  preventEscWhen: PropTypes.bool,
};
EscapeKey.defaultProps = {
  preventEscWhen: false,
};

export default EscapeKey;
