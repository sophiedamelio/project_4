import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Grid, Header, Icon, Image } from "semantic-ui-react";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

import "./SignupPage.css"

export default function SignUpPage(props) {
  console.log(props, "<---- props on signup ")

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: '',
  })

  const navigate = useNavigate() // declaring variable for ease of use

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await userService.signup(state)
      props.handleSignUpOrLogin()
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div class="whole-page">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550 }}>
          <Image src={"https://i.imgur.com/Yu3B0dN.png"} size="medium" centered="true" className="logo"></Image>
          <Header as="h2" textAlign="center" id="login-header">
            <Icon name="signup" color="teal" /> Sign Up
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              id="form-input"
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              id="form-input"
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              id="form-input"
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              id="form-input"
              required
            />
            <button type="submit" class="submitButton">
              Signup
            </button>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
          <div class="altLink">
            Already have an account? <Link to="/login"> Log In</Link>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
