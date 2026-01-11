import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Button, Alert } from 'react-bootstrap';
import '../styles/pages.css';

export const Guide = () => {
  const [showCopyAlert, setShowCopyAlert] = useState(false);
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const copyServerUrl = async () => {
    try {
      await navigator.clipboard.writeText(serverUrl);
      setShowCopyAlert(true);
      setTimeout(() => setShowCopyAlert(false), 3000);
    } catch (err) {
      console.error('Failed to copy server URL:', err);
    }
  };

  return (
    <PageLayout>
      <div className="guide-section">
        <h1 className="text-center mb-4">Setup Guide</h1>
        <p className="lead text-center mb-5">
          Follow these instructions to install the Create Hell modpack and connect to the server.
        </p>

        {showCopyAlert && (
          <Alert variant="success" onClose={() => setShowCopyAlert(false)} dismissible>
            <i className="bi bi-check-circle-fill me-2"></i>
            Server URL copied to clipboard!
          </Alert>
        )}

        <h2>Installation Instructions</h2>

        <h3>Option 1: Modrinth Launcher (.mrpack) - Recommended</h3>
        <p>This is the easiest method and works with Modrinth Launcher or Prism Launcher.</p>
        <ol>
          <li>Download the <strong>.mrpack</strong> file from the <a href="/downloads">Downloads</a> page</li>
          <li>Open Modrinth Launcher or Prism Launcher</li>
          <li>Click "Create Instance" or "Add Instance"</li>
          <li>Select "Import from file" or "Import"</li>
          <li>Browse to the downloaded .mrpack file and select it</li>
          <li>Wait for the launcher to download and install all mods automatically</li>
          <li>Launch the instance once installation is complete</li>
        </ol>

        <div className="my-4">
          <a href="/modpacks/Create%20Hell%201.1.0.mrpack" download className="btn btn-primary">
            <i className="bi bi-download me-2"></i>
            Download .mrpack File
          </a>
        </div>

        <h3>Option 2: Curseforge Launcher (.zip)</h3>
        <p>For CurseForge Launcher with Forge.</p>
        <ol>
          <li>Download the <strong>.zip</strong> file from the <a href="/downloads">Downloads</a> page</li>
          <li>Launch Curseforge on your machine.</li>
          <li>Select the import profile button from the Minecraft page</li>
          <li>Browse to the downloaded .zip file and select it</li>
          <li>Wait for the launcher to download and install all mods automatically</li>
          <li>Launch the instance once installation is complete</li>
        </ol>

        <div className="my-4">
          <a href="/modpacks/Create%20Hell%201.1.0%20Curseforge.zip" download className="btn btn-outline-primary">
            <i className="bi bi-download me-2"></i>
            Download .zip File
          </a>
        </div>

        <h3>Option 3: Manual Install (.zip)</h3>
        <p>For CurseForge Launcher with Forge.</p>
        <ol>
          <li>Download the <strong>.zip</strong> file from the <a href="/downloads">Downloads</a> page</li>
          <li>Make sure you have the correct version of Minecraft Forge installed (v47.3.29)</li>
          <li>Locate your Minecraft installation folder:
            <ul>
              <li><strong>Windows:</strong> <code>%appdata%\.minecraft</code></li>
              <li><strong>Mac:</strong> <code>~/Library/Application Support/minecraft</code></li>
              <li><strong>Linux:</strong> <code>~/.minecraft</code></li>
            </ul>
          </li>
          <li>Extract the contents of the .zip file to your <code>mods</code> folder</li>
          <li>Launch Minecraft with the Forge/Fabric profile</li>
        </ol>

        <div className="my-4">
          <a href="/modpacks/Create%20Hell%201.1.0%20Manual.zip" download className="btn btn-outline-success">
            <i className="bi bi-download me-2"></i>
            Download .zip File
          </a>
        </div>

        <hr className="my-5" />

        <h2>Connecting to the Server</h2>
        <p>Once you have the modpack installed, follow these steps to join the server:</p>
        <ol>
          <li>Launch Minecraft with the Create Hell modpack</li>
          <li>Click "Multiplayer" from the main menu</li>
          <li>Click "Add Server" or "Direct Connect"</li>
          <li>Enter the server address below:</li>
        </ol>

        <div className="server-url-display">
          <code>{serverUrl}</code>
          <Button variant="outline-primary" size="sm" onClick={copyServerUrl}>
            <i className="bi bi-clipboard me-2"></i>
            Copy
          </Button>
        </div>

        <ol start={5}>
          <li>Click "Done" (for Add Server) or "Join Server" (for Direct Connect)</li>
          <li>Double-click the server to connect</li>
        </ol>

        <hr className="my-5" />

        <h2>Voice Chat Setup</h2>
        <p>
          Create Hell includes <strong>Simple Voice Chat</strong> for proximity-based voice communication.
          This allows you to talk with nearby players in-game!
        </p>

        <h3>Configuring Voice Chat</h3>
        <ol>
          <li>Join the server and press the <code>V</code> key (default) to open the voice chat settings</li>
          <li>Select your microphone from the input device dropdown</li>
          <li>Adjust your microphone volume using the slider</li>
          <li>Test your microphone using the "Test Microphone" button</li>
          <li>Configure voice activation or push-to-talk:
            <ul>
              <li><strong>Voice Activation:</strong> Enable "Voice Activation" and adjust the activation threshold</li>
              <li><strong>Push-to-Talk:</strong> Disable "Voice Activation" and bind a key for talking</li>
            </ul>
          </li>
          <li>Adjust the voice chat volume for other players if needed</li>
        </ol>

        <h3>Key Binds (Default)</h3>
        <ul>
          <li><code>V</code> - Open voice chat settings</li>
          <li><code>Caps Lock</code> - Push to talk (if push-to-talk is enabled)</li>
          <li><code>M</code> - Mute/unmute yourself</li>
          <li><code>N</code> - Toggle voice chat on/off</li>
        </ul>

        <p className="mt-4">
          <strong>Note:</strong> Voice chat range is limited to proximity, so you'll only hear players near you.
          This creates a more immersive and realistic communication experience!
        </p>

        <hr className="my-5" />

        <div className="text-center">
          <h3>Need More Help?</h3>
          <p>
            If you encounter any issues during installation or setup, please contact a server administrator
            or ask for help in the community Discord server.
          </p>
          <p className="text-muted text-light">
            Make sure to read the <a href="/rules">Server Rules</a> before playing!
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Guide;
