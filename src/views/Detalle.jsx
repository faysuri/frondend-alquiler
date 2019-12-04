
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
import Select from 'react-select'
class Dealle extends React.Component {
   state = {
    tipoSelected: null,
    identificacion:0,
    fecha:'',
    hora:'',
    fecha_registro:'',
    temporada:'',
    tiempo:'',
    valor:'',
  } 
  getInputText = (value, placeholder, type, icon) => {
    return (
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={icon} />
            </InputGroupText>
          </InputGroupAddon>
          <Input value={value} placeholder={placeholder} type={type} />
        </InputGroup>
      </FormGroup>
    )
  }
  render() {
    const vehiculo = [
      { label: 'Moto', value: 1 },
      { label: 'Carro', value: 2 },
    ]
    const tarifa = [
      { label: 'Diaria', value: 1 },
      { label: 'Semanal', value: 2 },
       { label: 'Mensual', value: 3 },
    ]
    return (
      <>
        <UserHeader />
        {/* Page content */}
        
        <Container className="mt-1 fondo mask bg-gradient-default opacity-8" fluid>
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
                     <Row between="xs" className="mb-3 mt-3">
                      <Col xl='12'>
                        <label className="form-control-label" htmlFor="input-username"> Vehiculo</label>
                        <Select className="selectFont" value={this.state.tipoSelected}  onChange={this.onChangeUnit} options={vehiculo} placeholder={'Seleccione un tipo de vehiculo'}/>
                      </Col>
                    </Row>
                    <Row between="xs" className="mb-3 mt-3">
                      <Col xl='12'>
                        <label className="form-control-label" htmlFor="input-username"> Tarifa</label>
                        <Select className="selectFont" value={this.state.tipoSelected}  onChange={this.onChangeUnit} options={tarifa} placeholder={'Seleccione el tipo de tarifa'}/>
                      </Col>
                    </Row>
                     <Form role="form">
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
