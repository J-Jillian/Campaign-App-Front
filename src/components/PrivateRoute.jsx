import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import React from "react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(SessionContext)
console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to='/login' />
  }

  return <>{children}</>
}

export default PrivateRoute
