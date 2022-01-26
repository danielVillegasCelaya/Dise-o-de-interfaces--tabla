import React from 'react';
import {CamposUsuario, DatosUsuarios} from '../data/DatosUsuarios'

class Perfil extends React.Component {
  constructor(props) {
    this.state = {
      user: '',
      contrasena: '',
    };
    this.logout=this.logout.bind(this);

  }

  logout() {
    this.setState({
      user: '',
      contrasena: '',
    });
  }

  recogerDetallesUsuario(e) {
    for (let i = 0; i < DatosUsuarios.length; i++) {
      if (e == DatosUsuarios[i].Nombre) {
        this.setState({ usuario: i });
        break;
      }
    }
  }


  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      contrasena: localStorage.getItem('contrasena'),
    });
  }

  render(){
    return(
      <div><tbody>
      {DatosUsuarios.map((item) => {
        return (
          <h1
            key={uuid()}
            onClick={() =>
              this.recogerDetallesUsuario(user)
            }
          >
            <h2>Nombre {item.Nombre}</h2>
            <h2>Contraseña {item.Contrasena}</h2>
            <h2>Ciudad {item.Ciudad}</h2>
            <h2>Email {item.Email}</h2>
            <h2>Foto {item.Imagen}</h2>
          </h1>
        );
      })}
    </tbody>
        <h2>Nombre</h2>
        <h2>Contraseña</h2>
        <h2>Ciudad</h2>
        <h2>Email</h2>
        <h2>Foto</h2>
      </div>  
    );
  }


}
