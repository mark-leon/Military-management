import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import Createmilitary from "./Components/Createmilitary";
import Editmilitary from "./Components/Editmilitary";
import MilitaryList from "./Components/MilitaryList";

// App Component

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-military"} className="nav-link">
                  Military Management System
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-military"} className="nav-link">
                    Create military
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/military-list"} className="nav-link">
                    military List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/" element={<Createmilitary />} />
                  <Route path="create-military" element={<Createmilitary />} />
                  <Route path="/edit-military/:id" element={<Editmilitary />} />
                  <Route path="military-list" element={<MilitaryList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
