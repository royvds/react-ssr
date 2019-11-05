import app from './app';

const port = 8080;

app.listen(port);

// eslint-disable-next-line no-console
console.log(
  `\nServer running on: \x1b[1m\x1b[36m${port}\x1b[0m \nPress ctrl+c to quit.\n\n`,
);
