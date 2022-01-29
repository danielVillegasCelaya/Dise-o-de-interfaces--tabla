import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { DatosUsuarios } from '../data/DatosUsuarios';
import { Form, Container, Button } from 'react-bootstrap';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      contrasena: '',
      done: true,
    };
    this.login = this.login.bind(this);
    this.userR = React.createRef();
    this.contrasenaR = React.createRef();
    this.comprobacionClass = '';
  }

  login() {
    for (let i = 0; i < DatosUsuarios.length; i++) {
      if (
        DatosUsuarios[i].Nombre == this.userR.current.value ||
        DatosUsuarios[i].Contrasena == this.contrasenaR.current.value
      ) {
        this.setState()({
          user: this.userR.current.value,
          contrasena: this.contrasenaR.current.value,
          done: true,
        });
      } else {
        this.setState({
          done: false,
        });
      }
    }
  }

  comprobacion() {
    if (!this.state.done) {
      this.comprobacionClass = 'is-invalid';
    } else {
      this.comprobacionClass = '';
    }
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      contrasena: localStorage.getItem('contrasena'),
    });
  }

  render() {
    this.comprobacion();
    if (
      this.state !== null &&
      this.state.user !== null &&
      this.state.user !== ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido {this.state.user}!</h1>
        </div>
      );
    } else {
      return (
        <div className="login">
          <h1>Login</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Usuario"
                  ref={this.userR}
                  className={this.comprobacionClass}
                />

                <Form.Control.Feedback type="invalid">
                  Usuario incorrecto
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={this.contrasenaR}
                  className={this.comprobacionClass}
                />
                <Form.Control.Feedback type="invalid">
                  Contraseña incorrecta
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={this.login.bind(this)}
              >
                Login
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('contrasena', this.state.contrasena);
  }
}
export default Home;
