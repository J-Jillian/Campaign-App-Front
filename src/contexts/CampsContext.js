import { createContext, useContext, useEffect, useState } from 'react'
import { SessionContext } from './SessionContext'

const CampsContext = createContext()

const CampsContextProvider = ({ children }) => {
  const [camps, setCamps] = useState([])
  const { isAuthenticated, apiWithToken } = useContext(SessionContext)

  const fetchCamps = async () => {
    const response = await apiWithToken('camps')
    setCamps(response)
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchCamps()
    }
  }, [isAuthenticated])

  return <CampsContext.Provider value={{ camps }}>{children}</CampsContext.Provider>
}

export { CampsContext, CampsContextProvider }