
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";

class Dealle extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <div className="subir">
            <div>
              <h1> Detalle</h1>
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
                      <Form role="form">
                        <div className="text-center ">

                          <div className="Seleccionar">
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-0">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>

                                    <Input placeholder=" Vehículo" />
                                    <select>
                                      <option>Seleccionar</option>
                                      <option>Carro</option>
                                      <option>Moto</option>
                                    </select>
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>

                                    <Input placeholder=" Tarifa" />
                                    <select>
                                      <option>Seleccionar</option>
                                      <option>Diaria</option>
                                      <option>Semanal</option>
                                    </select>
                                  </InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                          </div>
                        </div>

                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Identificación" type="number" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Fecha" type="Date" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Hora" type="Tyme" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Fecha" type="Date" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Hora" type="Tyme" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="temporada" type="text" />
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

            </div>
          </div>

        </Container>
      </>
    );
  }
}

export default Dealle;
