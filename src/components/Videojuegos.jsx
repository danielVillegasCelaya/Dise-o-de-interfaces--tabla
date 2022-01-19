import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import {
  TitulosTablaVideojuegos,
  DatosTablaVideojuegos,
} from '../data/DatosVideojuegos';

class Videojuegos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: DatosTablaVideojuegos[0].Nombre,
    };
  }

  seleccionarJuego() {
    this.setState({});
  }

  render() {
    return (
      <div className="main-site">
        <h1>Videojuegos</h1>
        <Container>
          <Row onClick="">
            <Col lg={8} md={6}>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>{TitulosTablaVideojuegos.id}</th>
                    <th>{TitulosTablaVideojuegos.categoria}</th>
                    <th>{TitulosTablaVideojuegos.multijugador}</th>
                    <th>{TitulosTablaVideojuegos.historia}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaVideojuegos.map((item) => {
                    return (
                      <tr>
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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={DatosTablaVideojuegos[2].Imagen} />
                <Card.Body>
                  <Card.Title>{DatosTablaVideojuegos[2].Nombre}</Card.Title>
                  <Card.Text>
                    Categoria: {DatosTablaVideojuegos[2].Categoria}
                    <p />
                    Multijugador: {DatosTablaVideojuegos[2].Multijugador}
                    <p />
                    Historia: {DatosTablaVideojuegos[2].Historia}
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
