import PageLayout from '../components/PageLayout';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/pages.css';

export const Downloads = () => {
  return (
    <PageLayout>
      <div className="downloads-section">
        <h2>Download Create Hell Modpack</h2>
        <p className="lead mb-5">
          Choose your preferred format below. Both options contain the same mods and configurations.
        </p>

        <Row className="g-4">
          <Col md={6}>
            <Card bg="dark" text="light" className="download-card">
              <Card.Body>
                <div className="download-icon">
                  <i className="bi bi-file-earmark-zip"></i>
                </div>
                <Card.Title>Modrinth Modpack (.mrpack)</Card.Title>
                <Card.Text>
                  Recommended for <strong>Modrinth Launcher</strong> or <strong>Prism Launcher</strong>.
                  This format provides the easiest installation experience with automatic mod downloading.
                </Card.Text>
                <a
                  href="/modpacks/create-hell.mrpack"
                  download
                  className="btn btn-primary btn-lg"
                >
                  <i className="bi bi-download me-2"></i>
                  Download .mrpack
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card bg="dark" text="light" className="download-card">
              <Card.Body>
                <div className="download-icon">
                  <i className="bi bi-folder-zip"></i>
                </div>
                <Card.Title>Mods Folder (.zip)</Card.Title>
                <Card.Text>
                  For <strong>CurseForge Launcher</strong> or manual installation.
                  Extract the contents to your Minecraft mods folder. Requires Forge/Fabric to be installed separately.
                </Card.Text>
                <a
                  href="/modpacks/create-hell.zip"
                  download
                  className="btn btn-success btn-lg"
                >
                  <i className="bi bi-download me-2"></i>
                  Download .zip
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-5 text-center">
          <p className="text-muted">
            Need help installing? Check out our <a href="/guide">Setup Guide</a> for step-by-step instructions.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Downloads;
