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
class Servicio extends React.Component {
  state = {
    tipoSelected: null
  }
  render() {
    const tipo_servicio = [
      { label: 'Lavado', value: 1 },
      { label: 'Mecanica', value: 2 },
      { label: 'Pintura', value: 3 },
    ]
    return (
      <>
        <div>
          <h1> Registrar Servicio</h1>
        </div>
        <Container className="mt--30" fluid>
        
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
                  <Row between="xs" className="mb-3 mt-5">
                      <Col xl='12'>
                        <label className="form-control-label" htmlFor="input-username"> Tipo de Servicio</label>
                        <Select className="selectFont" value={this.state.tipoSelected}  onChange={this.onChangeUnit} options={tipo_servicio} placeholder={'Seleccione un tipo de servicio'}/>
                      </Col>
                    </Row>
                    <formaGroup>
                      <div className="text-center">
                        <div className="mb-4 form-group">
                          <div class="input-group-alternative input-group">
                            <Row>
                              <Col xs='12' xl="10">
                                <Input class="form-control" type="text" placeholder="Nombre"/> 
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
                        <Input placeholder="Identificacion" type="number" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup></FormGroup>
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
                        <Input placeholder=" Descripcion" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Valor" type="number" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Fecha" type="date" />
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

export default Servicio;