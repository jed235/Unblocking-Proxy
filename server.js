const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Proxy endpoint
app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  const jsCode = req.query.js || '';

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    // Fetch the target page
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000
    });

    let html = response.data;

    // Load into cheerio for manipulation
    const $ = cheerio.load(html);

    // Inject custom JS if provided
    if (jsCode) {
      $('head').append(`<script>${jsCode}</script>`);
    }

    // Update relative URLs to go through proxy
    $('a[href]').each((i, elem) => {
      const href = $(elem).attr('href');
      if (href && !href.startsWith('http') && !href.startsWith('//')) {
        $(elem).attr('href', `/proxy?url=${encodeURIComponent(new URL(href, url).href)}`);
      }
    });

    // Similar for other resources, but for simplicity, just links

    res.send($.html());
  } catch (error) {
    res.status(500).send('Error fetching the page: ' + error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});