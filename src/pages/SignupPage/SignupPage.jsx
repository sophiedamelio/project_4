import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./SignupPage.css"

import userService from "../../utils/userService";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Icon,
  Image
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

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
  const [selectedFile, setSelectedFile] = useState('')
  const navigate = useNavigate() // declaring variable for ease of use

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', selectedFile);

    for (let key in state) {
      formData.append(key, state[key])
    }

    try {
      await userService.signup(formData)
      props.handleSignUpOrLogin()
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files, "<----- e.target.files")
    setSelectedFile(e.target.files[0])
  }

  return (
    <div class="whole-page">
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550 }}>
          <Image src={"https://i.imgur.com/eufpVnN.jpg"} size="medium" centered="true" className="logo"></Image>
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
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
                id="form-input"
                required
              />
            </Form.Field>
            <Form.TextArea
              label="bio"
              name="bio"
              placeholder="Tell us more about yourself..."
              onChange={handleChange}
              id="form-input"
            />
            <button type="submit" class="submitButton">
              Signup
            </button>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}
