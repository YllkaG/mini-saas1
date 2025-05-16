// api/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
