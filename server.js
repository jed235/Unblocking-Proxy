const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Ultraviolet proxy server running on http://localhost:${PORT}`);
});