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
    tipoSelected: null,
    placa: 'cvc',
    imagen:'',
    modelo: '',
    marca: '',
    color: '',
    cilindraje: '',
    no_pasajeros:'',
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
                   
                    {this.getInputText(this.state.placa, "Ingresa la placa del vehículo", "text", "ni ni-hat-3")}
                    {this.getInputText(this.state.imagen, "Ingresa la placa del vehículo", "image", "ni ni-hat-3")}
                    {this.getInputText(this.state.modelo, "Ingresa el modelo del vehículo", "text", "ni ni-hat-3")}
                    {this.getInputText(this.state.marca, "Ingresa la marca del vehículo", "text", "ni ni-hat-3")}
                    {this.getInputText(this.state.color, "Ingresa el color del vehículo", "text", "ni ni-hat-3")}
                    {this.getInputText(this.state.cilindraje, "Ingresa la placa del vehículo", "number", "ni ni-hat-3")}
                    {this.getInputText(this.state.no_pasajeros, "Ingresa la placa del vehículo", "number", "ni ni-hat-3")}
                    
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