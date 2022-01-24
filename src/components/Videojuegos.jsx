import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import {
  TitulosTablaVideojuegos,
  DatosTablaVideojuegos,
} from '../data/DatosVideojuegos';
import uuid from 'react-uuid';

class Videojuegos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videojuego: 0,
    };
  }

  recogerDetallesVideojuego(e) {
    for (let i = 0; i < DatosTablaVideojuegos.length; i++) {
      if (e == DatosTablaVideojuegos[i].Nombre) {
        this.setState({ videojuego: i });
        break;
      }
    }
  }

  render() {
    return (
      <div className="main-site">
        <h1>Videojuegos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr key={uuid()}>
                    <th>{TitulosTablaVideojuegos.id}</th>
                    <th>{TitulosTablaVideojuegos.categoria}</th>
                    <th>{TitulosTablaVideojuegos.multijugador}</th>
                    <th>{TitulosTablaVideojuegos.historia}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaVideojuegos.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() =>
                          this.recogerDetallesVideojuego(item.Nombre)
                        }
                      >
                        <td>{item.Nombre}</td>
                        <td>{item.Categoria}</td>
                        <td>{item.Multijugador}</td>
                        <td>{item.Historia}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '30rem' }}>
                <Card.Img
                  variant="top"
                  src={DatosTablaVideojuegos[this.state.videojuego].Imagen}
                />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaVideojuegos[this.state.videojuego].Nombre}
                  </Card.Title>
                  <Card.Text>
                    Categoria:{' '}
                    {DatosTablaVideojuegos[this.state.videojuego].Categoria}
                    <p />
                    Multijugador:{' '}
                    {DatosTablaVideojuegos[this.state.videojuego].Multijugador}
                    <p />
                    Historia:{' '}
                    {DatosTablaVideojuegos[this.state.videojuego].Historia}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Videojuegos;
