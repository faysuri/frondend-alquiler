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
class Entrega extends React.Component {
  state = {
    identificación: '',
    Fecha: '',
    Estado_entrega: '',
    Descripcion: '',
    esado_recibido: '',

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
    return (
      <>
        <div>
          <h1> Registrar Entrega</h1>
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
                    <formaGroup>
                      <div className="text-center">
                        <div className="mb-4 form-group">
                          <div class="input-group-alternative input-group">
                            <Row>
                              <Col xs='12' xl="10">
                                <Input class="form-control" type="text" placeholder="Placa vehículo" />
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
                    {this.getInputText(this.state.identificación, "Numero de entrega", "number", "ni ni-hat-3")}
                    {this.getInputText(this.state.Fecha, "Ingresa la fecha", "Date", "ni ni-hat-3")}
                    {this.getInputText(this.state.descripcion, "Ingresa la descipcion de la entrega", "text", "ni ni-hat-3")}
                    {this.getInputText(this.state.Estado_entrega, "Ingresa la descripción del seguro", "text", "ni ni-hat-3")}
                    <Row className="my-4">
                      <Col xs="12">

                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button className="mt-3" color="primary" type="button">
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

export default Entrega;