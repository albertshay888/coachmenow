import React from 'react';

const Confirmation = ({ input, selectedDate }) => {
  return (
    <div>
      <h3>Confirmation</h3>
      <p>Your lesson has been for: {selectedDate} </p>
      <p>With: JOHN DOE </p>
      <p>A confirmation email has been sent to: {input}</p>
    </div>
  );
};

export default Confirmation;
