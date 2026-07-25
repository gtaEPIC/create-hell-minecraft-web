import PageLayout from '../components/PageLayout';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/pages.css';
import {RiFolderZipLine} from "react-icons/ri";
import {PiFileZipDuotone} from "react-icons/pi";
import { CiWarning } from "react-icons/ci";

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
                  href="/modpacks/Create%20Hell%201.7.1.mrpack"
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
                  href="/modpacks/Create%20Hell%201.7.1%20Curseforge.zip"
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
                    href="https://nextcloud.gtaepic.xyz/s/minecraft"
                    className="btn btn-outline-success btn-lg"
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
                  <CiWarning />
                </div>
                <Card.Title>Updating from 1.7.0 to 1.7.1</Card.Title>
                <Card.Text>
                  Please follow this guide if you are manually updating from 1.7.0 to 1.7.1.<br/><br/>

                  The following mods <strong>HAVE BEEN REMOVED</strong>. Please remove them accordingly:<br/>
                  <ul>
                    <li>- Removed FTB Chunks</li>
                    <li>- Removed FTB Quests</li>
                    <li>- Removed FTB Ultimine</li>
                  </ul>
                  <br/><br/>

                  The following mods <strong>HAVE BEEN DOWNGRADED</strong>. Please update their version accordingly. These mods can be found in the modified files zip:<br/>
                  <ul>
                    <li>~ Downgrade xaero world map to 1.40.16</li>
                    <li>~ Downgrade xaero mini map to 25.3.13</li>
                  </ul>
                  <br/><br/>

                  The following mods have been added, please add them accordingly:<br/>

                  <ul>
                    <li>+ Added Open Parties and Claims - 0.25.8</li>
                    <li>+ Azmine - 2.0.0</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="dark" text="light" className="download-card">
              <Card.Body>
                <div className="download-icon">
                  <CiWarning />
                </div>
                <Card.Title>Updating from 1.6.0 to 1.7.0</Card.Title>
                <Card.Text>
                  Please follow this guide if you are manually updating from 1.6.0 to 1.7.0.<br/><br/>

                  The following mods have been added, please add them accordingly:<br/>

                  <ul>
                    <li>+ Added Touhou Little Maid - 1.5.3</li>
                    <li>+ Added Create: Powerlines - 1.1.8</li>
                    <li>+ Added Just Stargate Mod - 1.5.2</li>
                    <li>+ Added Create: Security Program - 0.1.2</li>
                    <li>+ Added Hide Item Frame Forge 1.19 - v1.4.2</li>
                    <li>+ Added Create: Train Utilities - v3.0.0</li>
                    <li>+ Added Modern Japan City - 1.0.8</li>
                    <li>+ Added Japaniture - 0.0.2</li>
                    <li>+ Added Horizontal Glass Panes - 2.0.0</li>
                    <li>+ Added Animal Pens - 2.4.3</li>
                    <li>+ Added Bamboo 2: Modded Boogaloo - 0.4</li>
                    <li>+ Added More Woodset Furniture - 1.0.1</li>
                    <li>+ Added Easy Craftable Gunpowder - 1.0.0</li>
                    <li>+ Added Mighty Mail - 1.1.4</li>
                    <li>+ Added Moonlight - 2.16.34</li>
                    <li>+ Added Amendments - 2.2.5</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="dark" text="light" className="download-card">
              <Card.Body>
                <div className="download-icon">
                  <CiWarning />
                </div>
                <Card.Title>Updating from 1.5.0 to 1.6.0</Card.Title>
                <Card.Text>
                  Please follow this guide if you are manually updating from 1.5.0 to 1.6.0.<br/><br/>

                  <b><u>The version of forge used has been updated, and will require you to update it. Please use 47.4.6</u></b><br/>

                  The following mods have been added, please add them accordingly:<br/>

                  <ul>
                    <li>+ Added Immersive Paintings - 0.6.13</li>
                    <li>+ Added Raven Brews Core - 1.0.1</li>
                    <li>+ Added Raven Coffee - 0.5.2</li>
                    <li>+ Added Room for Two - 0.1.1</li>
                    <li>+ Added Two Players One Horse - 1.0.3</li>
                    <li>+ Added Forgified Fabric API - 0.92.6+1.11.14</li>
                    <li>+ Added ClickSigns - 1.0.6</li>
                    <li>+ Added Immersive Petroleum - 4.3.4-36</li>
                    <li>+ Added Immersive Industry - 0.2.4</li>
                    <li>+ Added Create: Radars - 0.3.5</li>
                    <li>+ Added Tacz 40k - 2.0.0</li>
                    <li>+ Added Wax Stamps & Seals - 1.0.0</li>
                    <li>+ Added Mekanism: More Machine (mekmm) - 1.2.1</li>
                    <li>+ Added Mekanism Weaponry - 1.1.2</li>
                    <li>+ Added Cosmetic Armor Reworked - v1a</li>
                    <li>+ Added Sound Physics Remastered - 1.5.1</li>
                  </ul>

                  <br/>

                  Please Update the following mods:<br/>
                  <ul>
                    <li>+ UPDATED Create Japan Signals from 0.2.6 -{">"} 0.3.0</li>
                  </ul>
                </Card.Text>
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
