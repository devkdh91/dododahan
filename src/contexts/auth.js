import React, { useState, createContext } from 'react'

const AuthContext = createContext({
  loginInfo: '',
  setLoginInfo: () => {},
})
const AuthProvider = ({ children }) => {
  // const getLogin = () => {
  const [loginInfo, setLoginInfo] = useState('')
  const value = {
    loginInfo,
    setLoginInfo,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const AuthConsumer = AuthContext.Consumer
export { AuthConsumer, AuthProvider }

export default AuthContext
