import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Form,
  Grid,
  Header,
  Icon,
  Image
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
      <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
        <Grid.Column style={{ maxWidth: 550 }}>
          <Image src={"https://i.imgur.com/Yu3B0dN.png"} size="medium" centered="true" className="logo"></Image>
          <Header as="h2" textAlign="center" id="login-header">
            <Icon name="sign-in" color="teal" />
            Log-in to your
            account
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <div class="form">
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
              <button
                class="submitButton"
                type="submit"
              >
                Login
              </button>
            </div>
          </Form>
          <div class="altLink">
            New to us? <Link to="/signup">Sign Up</Link>
          </div>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </div>
  );
}
