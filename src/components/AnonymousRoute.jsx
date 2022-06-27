import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import React from "react";

const AnonymousRoute = ({ children }) => {
  const { isAuthenticated } = useContext(SessionContext)

  if (isAuthenticated) {
    return <Navigate to='/' />
  }

  return <>{children}</>
}

export default AnonymousRoute
