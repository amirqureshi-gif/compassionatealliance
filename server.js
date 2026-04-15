const express = require('express');
const path = require('path');
const fs = require('fs');

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
  if (!fs.existsSync(indexHtmlPath)) {
    res
      .status(500)
      .type('text/plain')
      .send(
        'Build output not found. Ensure `npm run build` ran and produced dist/index.html.'
      );
    return;
  }

  res.sendFile(indexHtmlPath);
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

