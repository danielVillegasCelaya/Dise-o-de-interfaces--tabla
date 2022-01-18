import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import { DatosCoches, TitulosTablaCoches } from '../data/DatosCoches';

class Coches extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-site">
        <h1>Coches</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>{TitulosTablaCoches.id}</th>
              <th>{TitulosTablaCoches.marcaCoche}</th>
              <th>{TitulosTablaCoches.modeloCoche}</th>
              <th>{TitulosTablaCoches.color}</th>
            </tr>
          </thead>
          <tbody>
            {DatosCoches.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.marcaCoche}</td>
                  <td>{item.modeloCoche}</td>
                  <td>{item.color}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
