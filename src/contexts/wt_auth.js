import React, { useState, createContext } from 'react'

const WTAuthContext = createContext({
  loginInfo: '',
  setLoginInfo: () => {},
})
const WTAuthProvider = ({ children }) => {
  // const getLogin = () => {
  const [loginInfo, setLoginInfo] = useState('')
  const value = {
    loginInfo,
    setLoginInfo,
  }
  return <WTAuthContext.Provider value={value}>{children}</WTAuthContext.Provider>
}

const WTAuthConsumer = WTAuthContext.Consumer
export { WTAuthConsumer, WTAuthProvider }

export default WTAuthContext
