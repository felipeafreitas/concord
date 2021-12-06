import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useDogProviderState must be used within AuthProvider.');
  }
  
  return context
}

export default useAuth
