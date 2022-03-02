import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const PrivateRoute = ({ children, ...remainingProps }) => {
  const { user, isAuthenticated } = useAuth0()
  const isUserPresent = user && isAuthenticated

  return (
    <Route
      {...remainingProps}
      render={() => {
        return isUserPresent ? children : <Redirect to='/login'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute
