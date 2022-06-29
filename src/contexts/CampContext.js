import { createContext, useContext, useEffect, useState } from 'react'
import { SessionContext } from './SessionContext'
import React from "react";


const CampContext = createContext()

const CampContextProvider = ({ children }) => {
  const [camps, setCamps] = useState([])
  const { isAuthenticated, apiWithToken } = useContext(SessionContext)

  
  const fetchCamps = async () => {
      const response = await apiWithToken('campaigns')
      console.log(response)
      setCamps(response)
    }

  useEffect(() => {
    if (isAuthenticated) {
     fetchCamps()
    }
  }, [isAuthenticated])

  return <CampContext.Provider value={{ camps }}>{children}</CampContext.Provider>
}

export { CampContext, CampContextProvider }
