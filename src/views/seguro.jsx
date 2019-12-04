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

import Select from 'react-select'
class seguro extends Component {
  state = {
    tipoSelected: null,
    id_seguros: '',
    nombre: '',
    Descripción: '',
    Fecha_exp: '',
    Fecha_vto: '',
    Estado: '',
    precio: '',
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
    const tipo_seguro = [
      { label: 'Todo riesgo', value: 1 },
      { label: 'Seguro obligatorio', value: 2 },
    ]
    return (
      <div>

        <h1> Seguros</h1>
        <Row className="justify-content-center">
       
          <Col lg="5" md="18">
            <Card className="bg-secondary shadow border-10  block-example border border-dark">
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
                <Row between="xs" className="mb-3 mt-3">
                  <Col xl='12'>
                    <label className="form-control-label" htmlFor="input-username"> Tipo de seguro</label>
                    <Select className="selectFont" value={this.state.tipoSelected} onChange={this.onChangeUnit} options={tipo_seguro} placeholder={'Seleccione un tipo de seguro'} />
                  </Col>
                </Row>
                <Form role="form">
                  <formaGroup>
                    <div className="text-center">
                      <div className="mb-4 form-group">
                        <div class="input-group-alternative input-group">
                          <Row>
                            <Col xs='12' xl="10">
                              <Input class="form-control" type="text" placeholder="Nombre" />
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

                  {this.getInputText(this.state.id_seguros, "Ingresala identificacin de seguro", "number", "ni ni-hat-3")}
                  {this.getInputText(this.state.nombre, "Ingresa el nombre del seguro", "text", "ni ni-hat-3")}
                  {this.getInputText(this.state.Descripción, "Ingresa la descripción del seguro", "text", "ni ni-hat-3")}
                  {this.getInputText(this.state.Fecha_exp, "Ingresa la fecha de expedición del seguro", "date", "ni ni-hat-3")}
                  {this.getInputText(this.state.Fecha_vto, "Ingresala la fecha de vencimiento del seguro", "date", "ni ni-hat-3")}
                  {this.getInputText(this.state.Estado, "Ingresala el estado del seguro", "text", "ni ni-hat-3")}
                  {this.getInputText(this.state.precio, "Ingresala el precio del seguro", "number", "ni ni-hat-3")}

                  <div className="text-center">
                    <Button className="mt-2" color="primary" type="button">
                      Registrar
                  </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default seguro;