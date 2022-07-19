import React from 'react';
import PropTypes from 'prop-types';
import './first button.css';

export const myButton = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'my-button--primary' : 'my-button--secondary';
    return (
      <button
        type="button"
        className={['my-button', `my-button--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >  {label}
      </button>
    );
  };
  myButton.propTypes = {
 
    primary: PropTypes.bool,

    backgroundColor: PropTypes.string,
    

    size: PropTypes.oneOf(['small', 'medium', 'large']),

  };