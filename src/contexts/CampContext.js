import { createContext, useContext, useEffect, useState } from 'react'
import { SessionContext } from './SessionContext'
import React from "react";


const CampContext = createContext()

const CampContextProvider = ({ children }) => {
  const [camps, setCamps] = useState([])
  const { isAuthenticated, apiWithToken } = useContext(SessionContext)
  const [needRefresh, setNeedRefresh] = useState(true)


  
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

 
  useEffect(() => {
    if (needRefresh) {
      fetchCamps()
      setNeedRefresh(false)
    }
  }, [needRefresh])


  return <CampContext.Provider value={{ camps, setNeedRefresh }}>{children}</CampContext.Provider>
}

export { CampContext, CampContextProvider }
