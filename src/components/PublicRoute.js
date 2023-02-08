import React from 'react';
import { Navigate } from 'react-router-dom';

function PuplicRoute({ children, loggedIn }) {
  return (
    loggedIn ? <Navigate to='/' replace={true} /> : children
)}

export default PuplicRoute;
