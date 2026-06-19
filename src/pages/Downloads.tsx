import PageLayout from '../components/PageLayout';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/pages.css';
import {RiFolderZipLine} from "react-icons/ri";
import {PiFileZipDuotone} from "react-icons/pi";

export const Downloads = () => {
  return (
    <PageLayout>
      <div className="downloads-section">
        <h2>Download Create Hell Modpack</h2>
        <p className="lead mb-5">
          Choose your preferred format below. Both options contain the same mods and configurations.
        </p>

        <Row className="g-4 mb-4">
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
                  href="/modpacks/Create%20Hell%201.5.0.mrpack"
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
                  <RiFolderZipLine />
                </div>
                <Card.Title>Curseforge Modpack (.zip)</Card.Title>
                <Card.Text>
                  For <strong>CurseForge Launcher</strong> only.
                  Extract the contents to your Minecraft mods folder. Import this profile into curseforge to use.
                </Card.Text>
                <a
                  href="/modpacks/Create%20Hell%201.5.0%20Curseforge.zip"
                  download
                  className="btn btn-outline-primary btn-lg"
                >
                  <i className="bi bi-download me-2"></i>
                  Download .zip
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4 mb-2">
          <Col>
            <Card bg="dark" text="light" className="download-card">
              <Card.Body>
                <div className="download-icon">
                  <PiFileZipDuotone />
                </div>
                <Card.Title>Manual Install (.zip)</Card.Title>
                <Card.Text>
                  If you don't wish to use a launcher, download this zip file.
                  Extract the contents into your Minecraft folder to play with the modpack.
                </Card.Text>
                <a
                    href="https://nextcloud.gtaepic.xyz/s/ciKSNCr9FP2W9WM"
                    download
                    className="btn btn-outline-success btn-lg"
                >
                  <i className="bi bi-download me-2"></i>
                  Download .zip
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-5 text-center">
          <p className="text-muted text-light">
            Need help installing? Check out our <a href="/guide">Setup Guide</a> for step-by-step instructions.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Downloads;
