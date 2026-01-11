import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container, Button, Toast, ToastContainer } from 'react-bootstrap';
import '../styles/Navbar.css';

export const Navbar = () => {
  const [showToast, setShowToast] = useState(false);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const copyServerUrl = async () => {
    try {
      await navigator.clipboard.writeText(serverUrl);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy server URL:', err);
    }
  };

  return (
    <>
      <BSNavbar expand="lg" className="navbar-custom">
        <Container fluid>
          <BSNavbar.Brand as={NavLink} to="/">
            Create Hell
          </BSNavbar.Brand>
          <BSNavbar.Toggle aria-controls="navbar-nav" />
          <BSNavbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/rules">
                Rules
              </Nav.Link>
              <Nav.Link as={NavLink} to="/guide">
                Guide
              </Nav.Link>
              <Nav.Link as={NavLink} to="/downloads">
                Downloads
              </Nav.Link>
            </Nav>
            <div className="server-url-container">
              <p className="server-url-text mb-0">{serverUrl}</p>
              <Button
                variant="outline-primary"
                size="sm"
                className="copy-button"
                onClick={copyServerUrl}
              >
                <i className="bi bi-clipboard"></i> Copy
              </Button>
            </div>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <ToastContainer position="top-end" className="copy-toast">
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success">
          <Toast.Header>
            <i className="bi bi-check-circle-fill me-2"></i>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Server URL copied to clipboard!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Navbar;
