import React from 'react';
import { DatosUsuarios } from '../data/DatosUsuarios';
import { Button } from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: -1,
    };
  }

  logout() {
    localStorage.clear();
  }

  componentDidMount() {
    for (let i = 0; i < DatosUsuarios.length; i++) {
      if (
        DatosUsuarios[i].Nombre === localStorage.getItem('user') &&
        DatosUsuarios[i].Contrasena == localStorage.getItem('contrasena')
      ) {
        this.setState({ usuario: i });
      }
    }
  }

  render() {
    if (this.state.usuario == -1) {
      return (
        <div className="main-site">
          <h1> Tienes que iniciar sesión</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Perfil</h1>
          <h2>Nombre {DatosUsuarios[this.state.usuario].Nombre}</h2>
          <h2>Contraseña {DatosUsuarios[this.state.usuario].Contrasena}</h2>
          <h2>Ciudad {DatosUsuarios[this.state.usuario].Ciudad}</h2>
          <h2>Email {DatosUsuarios[this.state.usuario].Email}</h2>
          <h2>Foto {DatosUsuarios[this.state.usuario].Imagen}</h2>
          <br />
          <Button
            variant="primary"
            type="button"
            onClick={this.logout.bind(this)}
          >
            Logout
          </Button>
        </div>
      );
    }
  }
}
export default Perfil;
