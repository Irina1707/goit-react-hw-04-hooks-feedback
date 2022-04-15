import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onClick }) => { 
  return (
    <>
        {options.map((option, i) => (
          <Button
            type='button'
            key={i}
            name={option}
            onClick={onClick}>
            {option}
          </Button>
))}
     </>
  )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired
};


    