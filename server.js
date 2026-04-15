const express = require('express');
const path = require('path');

const app = express();

const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

app.disable('x-powered-by');

app.use(
  express.static(distPath, {
    index: false,
    maxAge: '1h',
  })
);

// SPA fallback (React Router)
app.get('*', (req, res) => {
  res.sendFile(indexHtmlPath);
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

