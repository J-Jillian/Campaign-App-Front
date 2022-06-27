import { createContext, useContext, useEffect, useState } from 'react'
import { SessionContext } from './SessionContext'

const CampContext = createContext()

const CampContextProvider = ({ children }) => {
  const [camps, setCamps] = useState([])
  const { isAuthenticated, apiWithToken } = useContext(SessionContext)

  

  useEffect(() => {
    const fetchCamps = async () => {
        const response = await apiWithToken('campaign')
        console.log(response)
        setCamps(response)
      }
    if (isAuthenticated) {
     fetchCamps()
    }
  }, [isAuthenticated,apiWithToken])

  return <CampContext.Provider value={{ camps }}>{children}</CampContext.Provider>
}

export { CampContext, CampContextProvider }
