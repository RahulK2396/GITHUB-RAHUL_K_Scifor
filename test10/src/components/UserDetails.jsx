import React from 'react';

const UserDetails = (props) => {
  const { name, age, email, mobileNo, city } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Mobile No: {mobileNo}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default UserDetails;
