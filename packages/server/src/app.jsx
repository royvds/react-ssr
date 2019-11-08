import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import ReactDOMServer from 'react-dom/server';
import { App, StaticRouter } from '@react-ssr/web';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static('../web/dist', { maxAge: '365d' }));

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'service-worker.js'));
});

app.get('*', (req, res) => {
  const context = {};
  const markup = ReactDOMServer.renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>,
  );

  const indexFile = path.resolve('../web/dist/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${markup}</div>`),
    );
  });
});

export default app;
