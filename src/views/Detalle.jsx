
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
    identificacion: 0,
    fecha_inicio: '',
    hora_inicio: '',
    fecha_registro: '',
    fecha_fin: '',
    hora_fin: '',
    temporada: '',
    tiempo: '',
    valor: '',
  }
  getInputText = (value, placeholder, type, icon) => {
    return (
      <FormGroup>
        <InputGroup className="input-group-alternative mb-1">
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
                      <Row between="xs" className="mb-3 mt-3">
                        <Col xl='12'>
                          <label className="form-control-label" htmlFor="input-username"> Vehiculo</label>
                          <Select className="selectFont" value={this.state.tipoSelected} onChange={this.onChangeUnit} options={vehiculo} placeholder={'Seleccione un tipo de vehiculo'} />
                        </Col>
                      </Row>
                      <Row between="xs" className="mb-3 mt-1">
                        <Col xl='12'>
                          <label className="form-control-label" htmlFor="input-username"> Tarifa</label>
                          <Select className="selectFont" value={this.state.tipoSelected} onChange={this.onChangeUnit} options={tarifa} placeholder={'Seleccione el tipo de tarifa'} />
                        </Col>
                      </Row>
                      <Form role="form">
                        {this.getInputText(this.state.identificacion, "Ingresar la identificación", "number", "ni ni-hat-3")}
                        {this.getInputText(this.state.fecha_inicio, "Ingresa la fecha", "Date", "ni ni-hat-3")}
                        {this.getInputText(this.state.hora_inicio, "Ingresa la hora inicio", "Tyme", "ni ni-hat-3")}
                        {this.getInputText(this.state.fecha_registro, "Ingresa la fecha de registro", "Date", "ni ni-hat-3")}
                        {this.getInputText(this.state.fecha_fin, "Fecha recibido", "Date", "ni ni-hat-3")}
                        {this.getInputText(this.state.hora_fin, "Ingresar la hora de la entrega", "Tyme", "ni ni-hat-3")}
                        {this.getInputText(this.state.temporada, "Ingresa la temporada", "text", "ni ni-hat-3")}
                        {this.getInputText(this.state.tiempo, "Ingresar el tiempo alquiler", "number", "ni ni-hat-3")}
                        {this.getInputText(this.state.valor, "Ingresar el valor", "number", "ni ni-hat-3")}

                        <div className="text-center">
                          <Button className="mt-1" color="primary" type="button">
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
