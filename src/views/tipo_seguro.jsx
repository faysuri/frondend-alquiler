import React, { Component } from 'react'
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
  Col
} from "reactstrap";
class tipo_seguro extends Component {
  render() {
    return (
      <div>
        <h1> Tipos de seguros</h1>
        <Row className="justify-content-center">
        <Col lg="5" md="8">
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
                <small>Ingrese los datos</small>
              </div>
              <Form role="form">

              <formaGroup>
                      <div className="text-center">
                        <div className="mb-4 form-group">
                          <div class="input-group-alternative input-group">
                            <Row>
                              <Col xs='12' xl="10">
                                <Input class="form-control" type="text" placeholder="Consultar servicio"/> 
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
                    <Input placeholder=" Identificación" type="number" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder=" Nombre" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder=" Descripción" type="text" />
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
            </div >
        );
  }
}

export default tipo_seguro;