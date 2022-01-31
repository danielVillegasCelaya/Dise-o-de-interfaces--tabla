import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import uuid from 'react-build';
class Musica extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: null, tableData: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://zoo-animal-api.herokuapp.com/animals/rand/9'
    );
    const responseData = await response.json();
    this.setState({ tableData: responseData });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Musica</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo de animal</th>
                    <th>Habitat</th>
                    <th>Tiempo de vida</th>
                  </tr>
                </thead>
                <tbody>
                  {this.tableData.map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.animal_type}</td>
                        <td>{item.habitat}</td>
                        <td>{item.lifespan}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={this.state.selectedItem.image_url}
                />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.title}</Card.Title>
                  <Card.Text>
                    Cantantes: {this.state.selectedItem.singers}
                    <p />
                    Duración: {this.state.selectedItem.duration}
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

export default Musica;
