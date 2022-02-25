import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";


export default function LoginPage(props) {
  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div class="whole-page">
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as="h2" textAlign="center" id="login-header">
            <Icon name="sign-in" color="teal" />
            Log-in to your
            account
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked class="form">
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
              <Button
                class="submitButton"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message class="altLink">
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </div>
  );
}
