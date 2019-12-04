import React, { Component } from "react";
// reactstrap components

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";

import Select from 'react-select'

class Alquiler extends Component {
  state = {
    tipoSelected: null,
    vehiculos: [
      {
        id_vehiculo: 1,
        cilindraje: 'xxxx',
        modelo: 'xxxx',
        marca: 'Mazda',
        color: '',
        n_pasajeros: '',
        placa: 'xxxxxx',
        estado: false,
      },
      {
        id_vehiculo: 2,
        cilindraje: 'xxxx',
        modelo: 'xxxx',
        marca: 'Toyota',
        color: '',
        n_pasajeros: '',
        placa: 'xxxxxx',
        estado: false,
      },
      {
        id_vehiculo: 3,
        cilindraje: 'xxxx',
        modelo: 'xxxx',
        marca: 'Crypton',
        color: '',
        n_pasajeros: '',
        placa: 'xxxxxx',
        estado: false,
      },
      {
        id_vehiculo: 4,
        cilindraje: 'xxxx',
        modelo: 'xxxx',
        marca: '',
        color: '',
        n_pasajeros: '',
        placa: 'xxxxxx',
        estado: false,
      },
    ]
  }

  onChangeCheck = vehicule => {
    console.log(vehicule)
    let array = [...this.state.vehiculos];
    array.map(vehi => vehi.id_vehiculo === vehicule.id_vehiculo ? vehi.estado = !vehi.estado : vehi)
    console.log(array)
    this.setState({ vehiculos: [...array] })
  }

  getCard(vehiculo) {
    return (
      <Col lg="6" xl="3">
        <Card className="card-stats mb-4 mb-xl-0" onClick={() => this.onChangeCheck(vehiculo)}>
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle
                  tag="h5"
                  className="text-uppercase text-muted mb-0"
                >
                  {vehiculo.marca}
                </CardTitle>
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/theme/v2.jpg")}
                />
              </div>
            </Row>
            <div className="custom-control custom-control-alternative custom-checkbox ">
              <input
                className="custom-control-input"
                type="checkbox"
                checked={vehiculo.estado}
                value={vehiculo.estado}

              />
              <label
                className="custom-control-label"
                htmlFor=" customCheckLogin"
              >
                <span className="text-muted">Seleccionar</span>
              </label>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }

  render() {
    const tipo_vehiculo = [
      { label: 'Moto', value: 1 },
      { label: 'Carro', value: 2 },
    ]
    return (
      <>

        <div>
          <h1> Alquiler</h1>
        </div>
        <div className="margen" >
          <Row className="justify-content-center">
            <Col lg="5" md="18">
              <Card className="bg-secondary shadow border-0">
                <Row className="justify-content-center">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("assets/img/theme/v4.jpg")}
                      />
                    </a>
                  </div>
                </Row>
                <CardBody className="px-lg-5 py-lg-4">
                  <div className="text-center text-muted mb-4">
                    <small>Ingrese sus datos</small>
                  </div>
                  <Row between="xs" className="mb-3 mt-5">
                    <Col xl='12'>
                      <label className="form-control-label" htmlFor="input-username"> Tipo de vehiculo</label>
                      <Select className="selectFont" value={this.state.tipoSelected} onChange={this.onChangeUnit} options={tipo_vehiculo} placeholder={'Seleccione un tipo de vehícculo'} />
                    </Col>
                  </Row>
                </CardBody>

              </Card>
            </Col>
          </Row>
        </div>
        <div className="header-body ">
          {/* Card stats */}
          <div class="MuiFormGroup-root MuiFormGroup-row">
            <Row className="mt-3">
              {this.state.vehiculos.map(vehiculo => this.getCard(vehiculo))}
            </Row>
            <div className="text-center">
              <Button className="my-4" color="primary" type="button">
                Registrar
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Alquiler;