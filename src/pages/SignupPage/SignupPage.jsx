import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { Button, Form, Grid, Header, Image, Segment, Icon } from "semantic-ui-react";
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
    //console.log(formData.forEach((item) => console.log(item)), "<----- form data")
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
    <>
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="yellow" textAlign="center">
            <Icon name="signup" /> Sign Up
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                placeholder="username"
                value={state.username}
                onChange={handleChange}
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={state.passwordConf}
                onChange={handleChange}
                required
              />
              <Form.Field>
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                  onChange={handleFileInput}
                  required
                />
              </Form.Field>
              <Form.TextArea
                label="bio"
                name="bio"
                placeholder="Tell us more about your dogs..."
                onChange={handleChange}
              />
              <Button type="submit" className="btn">
                Signup
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
