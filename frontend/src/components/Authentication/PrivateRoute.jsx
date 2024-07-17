import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({children }) => {
  const token = localStorage.getItem('userInfo')

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          {children}
        ) : (
          <Redirect to="/login" />
        )
      }
    >
  )
}

export default PrivateRoute

