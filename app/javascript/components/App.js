import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <h1>BrainBusters App</h1>
    </>
  )
}

export default App

