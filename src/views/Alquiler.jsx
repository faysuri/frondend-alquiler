import React, { Component } from "react";
// reactstrap components

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  Row,
  Col,

} from "reactstrap";


import Select from 'react-select'
import Checkbox from './Checkbox'

const items = [
  'One',
  'Two',
  'Three',
]
class Alquiler extends Component {
  state = {
    tipoSelected: null
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )


  render() {
    const tipo_vehiculo = [
      { label: 'Moto', value: 1 },
      { label: 'Carro', value: 2 },
    ]
    return (
      <>
       <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
        <div>
          <h1> Alquiler</h1>
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
                  <Row between="xs" className="mb-3 mt-5">
                      <Col xl='12'>
                        <label className="form-control-label" htmlFor="input-username"> Tipo de vehiculo</label>
                        <Select className="selectFont" value={this.state.tipoSelected}  onChange={this.onChangeUnit} options={tipo_vehiculo} placeholder={'Seleccione un tipo de vehícculo'}/>
                      </Col>
                    </Row>
                  <Form role="form">
                  <formaGroup>
                      <div className="text-center">
                        <div className="mb-4 form-group">
                          <div class="input-group-alternative input-group">
                            <Row>
                              <Col xs='12' xl="10">
                                <Input class="form-control" type="number" placeholder="Identificación"/> 
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
                   
                  </Form>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
          
        </div>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Mazda
                          </CardTitle>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/v2.jpg")}
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Mazda
                          </CardTitle>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/v2.jpg")}
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Mazda
                          </CardTitle>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/v2.jpg")}
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Mazda
                          </CardTitle>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/v2.jpg")}
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
      </>
    );
  }
}

export default Alquiler;