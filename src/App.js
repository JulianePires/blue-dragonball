import React from "react";

// Componentes
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { ReadAll } from "./components/ReadAll/ReadAll";
import { Create } from "./components/Create/Create";
import { DeleteAll } from "./components/DeleteAll/DeleteAll";
import { About } from "./components/About/About";

// Assets
import logo from "./img/logo.png";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

const NavPaths = {
  HOME: "/",
  CREATE: "/create",
  DELETEALL: "/delete-all",
  ABOUT: "/about",
};

function App() {
  return (
    <>
      <div className="logoBar">
        <img src={logo} className="logoImg" alt="dragon ball" />
      </div>

      <Navbar className="justify-content-center" expand="sm">
        <Nav>
          <Nav.Link id="link-style" href={NavPaths.HOME}>
            Início
          </Nav.Link>
          <Nav.Link id="link-style" href={NavPaths.CREATE}>
            Criar
          </Nav.Link>
          <Nav.Link id="link-style" href={NavPaths.DELETEALL}>
            Deletar Tudo
          </Nav.Link>
          <Nav.Link id="link-style" href={NavPaths.ABOUT}>
            Sobre
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container className="app-container">
        <Row>
          <Col>
            <Switch>
              <Route path={NavPaths.HOME} exact={true} component={ReadAll} />
              <Route path={NavPaths.CREATE} component={Create} />
              <Route path={NavPaths.DELETEALL} component={DeleteAll} />
              <Route path={NavPaths.ABOUT} component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
