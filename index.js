// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body, html {
            height: 100%;
            margin: 0;
            font-family: Arial, sans-serif;
          }
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: lightgray;
          }
          .quadrant {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            background-color: red;
            width: 200px;
            height: 200px;
            text-decoration: none;
            transition: background-color 0.3s ease;
          }
          .quadrant:hover {
            filter: brightness(85%);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <a href="http://localhost:3002" class="quadrant">Go to File 2</a>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Homepage running at http://localhost:${port}`);
});
