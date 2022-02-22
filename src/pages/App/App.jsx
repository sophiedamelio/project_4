import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import HomePage from "../HomePage/HomePage";
import AddComposition from "../../components/AddComposition/AddComposition";
import AddCompositionForm from "../../components/CompositionForm/CompositionForm"

import * as compositionApi from "../../utils/compositionApi";

import AddCompositionPage from "../AddCompositionPage/AddCompositionPage"

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  const [compositions, setCompositions] = useState([])
  const [error, setError] = useState('')

  async function handleAddComposition(composition) {
    try {
      //setLoading(true)
      const data = await compositionApi.create(composition);
      console.log(data, "<--- this is the res form the server, in handle add comp")

      setCompositions([data.composition, ...compositions]);
      //setLoading(false)
    } catch (err) {
      setError(err.messgae);
    }
  }


  if (user) {
    return (
      <Routes>
        <Route path="/" element={<HomePage user={user} handleLogout={handleLogout} />} />
        <Route path="/addComposition" element={<AddCompositionPage user={user} handleAddComposition={handleAddComposition} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;