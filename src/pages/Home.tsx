import PageLayout from '../components/PageLayout';
import {Accordion, Form, Button, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { modList } from '../data/mods';
import '../styles/pages.css';

export const Home = () => {
  const dynmapUrl = import.meta.env.VITE_DYNMAP_URL;
  const trackmapUrl = import.meta.env.VITE_TRACKMAP_URL;
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  return (
    <PageLayout>
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome to Create Hell</h1>
        <p className="lead">
          A heavily modded Minecraft server built around <strong>Create v5</strong>, featuring advanced
          technology, automation, transportation, and building mods. Engineer massive contraptions,
          explore new dimensions, and collaborate with fellow builders!
        </p>
        <Link to="/guide" className="btn btn-primary btn-lg cta-button">
          Get Started <i className="bi bi-arrow-right ms-2"></i>
        </Link>
      </div>

      <hr className="my-5" />

      {/* Mods Section */}
      <div className="mods-section">
        <h2>Featured Mods</h2>
        <p className="text-center mb-4">
          Explore the major mods included in the Create Hell modpack. Click each category to see details.
        </p>

        <Accordion defaultActiveKey="0">
          {modList.map((category, idx) => (
            <Accordion.Item eventKey={idx.toString()} key={idx}>
              <Accordion.Header>
                <strong>{category.category}</strong>
                <span className="ms-2 text-muted">({category.mods.length} mods)</span>
              </Accordion.Header>
              <Accordion.Body>
                <ListGroup className={"mod-list"} as={"ul"}>
                {category.mods.map((mod, modIdx) => (
                  <ListGroup.Item key={modIdx} className="mod-item" as={"li"}>
                    <h5>{mod.name}</h5>
                    <p>{mod.description}</p>
                    <div>
                      <a
                        href={mod.modrinthUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-box-seam me-1"></i>
                        Modrinth
                      </a>
                      {mod.wikiUrl && (
                        <a
                          href={mod.wikiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-book me-1"></i>
                          Wiki
                        </a>
                      )}
                    </div>
                  </ListGroup.Item>
                ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <hr className="my-5" />

      {/* Maps Section */}
      <div className="maps-section">
        <h2 className="text-center mb-4">Server Maps</h2>
        <p className="text-center mb-4">
          Explore the world and track trains in real-time using our interactive maps.
        </p>

        <div className="mb-4">
          <h3>World Map (Dynmap)</h3>
          <iframe
            src={dynmapUrl}
            title="Dynmap"
            className="w-100"
            style={{ height: '600px', border: 'none', borderRadius: '8px' }}
          />
        </div>

        <div className="mb-4">
          <h3>Create Track Map</h3>
          <iframe
            src={trackmapUrl}
            title="Create Track Map"
            className="w-100"
            style={{ height: '600px', border: 'none', borderRadius: '8px' }}
          />
        </div>
      </div>

      <hr className="my-5" />

      {/* Whitelist Form Section */}
      <div className="whitelist-section">
        <h3>Request Whitelist Access</h3>
        <p className="text-center mb-4">
          Want to join the Create Hell community? Fill out this form to request whitelist access.
          Please read our <Link to="/rules">server rules</Link> before applying.
        </p>

        <Form
          action={`https://formspree.io/f/${formspreeId}`}
          method="POST"
          className="mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Minecraft Username *</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your Minecraft username"
              required
            />
            <Form.Text className="text-muted">
              Your exact Minecraft Java Edition username (case-sensitive)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
            <Form.Text className="text-muted">
              We'll use this to contact you about your application
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Why do you want to join Create Hell? *</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              placeholder="Tell us a bit about yourself and why you're interested in joining our server..."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="rules_accepted"
              label={
                <>
                  I have read and agree to follow the{' '}
                  <Link to="/rules" target="_blank">server rules</Link>
                </>
              }
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" size="lg">
              <i className="bi bi-send me-2"></i>
              Submit Whitelist Request
            </Button>
          </div>
        </Form>
      </div>
    </PageLayout>
  );
};

export default Home;
