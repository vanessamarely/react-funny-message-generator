import React from 'react';
import PropTypes from 'prop-types';

function MessageDisplay({ message }) {
  return (
    <p id="message-text">{message}</p>
  );
}

MessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageDisplay;
