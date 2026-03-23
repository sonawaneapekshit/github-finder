import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import User from './User';

const UserWrapper = (props) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(params, '###')
  return (
    <User 
      {...props} 
      params={params}
      location={location}
      navigate={navigate}
    />
  );
};

export default UserWrapper;