import React from "react";
// reactstrap components

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,

} from "reactstrap";
import Select from 'react-select'

class vehiculo extends React.Component {

  state = {
    tipoSelected: null
  }

  render() {

    const tipo_vehiculo = [
      { label: 'Moto', value: 1 },
      { label: 'Carro', value: 2 },
    ]
    const tipo_seguro = [
      { label: 'Todo riesgo', value: 1 },
      { label: 'Seguro obligatorio', value: 2 },
    ]

    return (
      <>
        <div>
          <h1> Registrar vehículo</h1>
        </div>
        <Container className="mt-30" fluid>

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
                        <Select className="selectFont" value={this.state.tipoSelected}  onChange={this.onChangeUnit} options={tipo_vehiculo} placeholder={'Seleccione un tipo de vehícculo'}/>
                      </Col>
                    </Row>
                    <Row between="xs" className="mb-3 mt-3">
                      <Col xl='12'>
                        <label className="form-control-label" htmlFor="input-username"> Tipo de seguro</label>
                        <Select className="selectFont" value={this.state.tipoSelected}  onChange={this.onChangeUnit} options={tipo_seguro} placeholder={'Seleccione un tipo de seguro'}/>
                      </Col>
                    </Row>
                  <Form role="form">
                    <formaGroup>
                      <div className="text-center">
                        <div className="mb-4 form-group">
                          <div class="input-group-alternative input-group">
                            <Row>
                              <Col xs='12' xl="10">
                                <Input class="form-control" type="text" placeholder="Placa"/> 
                              </Col>
                              <Col xl="1" className="ml-1">
                                <Button color="primary" type="button">
                                  <i class="fas fa-search"></i>
                                </Button>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </formaGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder=" Placa" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder=" Modelo" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-1">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder=" Marca" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Color" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-1">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Cilindraje" type="tel" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-1">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="No. pasajeros" type="number" />
                      </InputGroup>
                    </FormGroup>
                    <Row className="my-4">
                      <Col xs="12">
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button className="mt-4" color="primary" type="button">
                        Registrar
                  </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>

          </Row>

        </Container>
      </>
    );
  }
}

export default vehiculo;