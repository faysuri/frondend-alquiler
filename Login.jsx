
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
  Col
} from "reactstrap";

class Login extends React.Component {
  state = {
    correo: '',
    contrasena: '',
  }
  crearVehiculo() {
    const {
      correo,
      contrasena,
      } = this.state;
    if (correo.trim() !== '' || contrasena.trim() !== '' ) {
      alert("falta por llenar")
    } else {
      alert("campo lleno")
    }
  }
  onChangeInput = event => {
    let state = event.target.name;
    let value = event.target.value;
    this.setState({ [state]: value }, () => console.log(this.state[state]))
  }
  getInputText = (value, name, placeholder, type, icon) => {
    return (
      <FormGroup>
        <InputGroup className="input-group-alternative mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={icon} />
            </InputGroupText>
          </InputGroupAddon>
          <Input onChange={this.onChangeInput} value={value} name={name} placeholder={placeholder} type={type} />
        </InputGroup>
      </FormGroup>
    )
  }
  render() {
    return (
      <>
        <Col lg="5" md="8">
          <Card className="bg-secondary shadow border-0">
            <Row className="justify-content-center">
              <div className="card-profile-image">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="rounded-circle"
                    src={require("assets/img/theme/av.png")}
                  />
                </a>
              </div>
            </Row>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-3">
                <small>Ingrese sus datos</small>
              </div>
              <Form role="form">

                {this.getInputText(this.state.correo, "correo","Ingresa el correo", "correo", "ni ni-email-83")}
                {this.getInputText(this.state.contrasena,"contrasena", "Ingresa la contraseña", "Contraseña", "ni ni-lock-circle-open")}

                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Recordarme</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Iniciar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Olvido su contraseña?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
              </a>

            </Col>

          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
