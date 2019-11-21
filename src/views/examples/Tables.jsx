
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Badge,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

class Tables extends React.Component {
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Container className="mt-17" fluid>
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="8">
                <Card className="bg-default shadow">
                    <Row className="align-items-center">
                    <CardHeader className="bg-transparent border-0">
                        <h3 className="text-white mb-0">Detalle vehículo</h3>
                      </CardHeader>
                    </Row>
                  <Table className="align-items-center table-dark table-flush" responsive>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Vehículo</th>
                      <th scope="col">Placa</th>
                      <th scope="col">Marcar</th>
                      <th scope="col">Modelo</th>
                      <th scope="col">Opciones</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/v4.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Argon Design
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>XAC123M</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          pending
                        </Badge>
                      </td>
                      <td>2018</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              ALQUILER
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/v4.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Angular Now
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>GHJ987M</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          completed
                        </Badge>
                      </td>
                      <td>2017</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Alquiler
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something 
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/v4.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Black Dashboard
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>XFG098J</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          delayed
                        </Badge>
                      </td>
                      <td>2017</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something else
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/v4.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              React Material
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>CFDT765G</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          Chevrolet
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something 
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require("assets/img/theme/v4.jpg")}
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              Vue Paper UI 
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>FVB435M</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          Renault
                        </Badge>
                      </td>
                    
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Something 
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                  </Table>
                </Card>
              </Col>

            </Row>
          </Container>
        </Row>
      </>
    );
  }
}

export default Tables;
