import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const UserAuth = ({children}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  if(currentUser != null){
    return children
  }else{
    enqueueSnackbar('Please login to continue', {
        variant: 'error',
        anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
        }
    });
    return <Navigate to="/login" />
  }
}

export default UserAuth