import React from 'react';

const Form = () => {
  return (
    <form action="">
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Email" />
      <input type="number" placeholder="Age" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
