# Unblocking-Proxy

A simple web proxy server that allows you to access websites through a proxy, potentially bypassing restrictions, and inject custom JavaScript code into the pages.

## Features

- Input any website URL to proxy it
- Inject custom JavaScript code into the proxied page
- Simple web interface

## Installation

1. Install Node.js if not already installed.
2. Clone or download this repository.
3. Run `npm install` to install dependencies.

## Usage

1. Start the server: `npm start`
2. Open your browser and go to `http://localhost:3000`
3. Enter the URL of the website you want to proxy.
4. Optionally, enter JavaScript code to inject.
5. Click "Load Proxied Page" to open the proxied site in a new tab.

## Note

This is a basic proxy and may not handle all types of content or complex sites perfectly. For full unblocking, the proxy server should be hosted on a different network than the restricted one.

## Dependencies

- Express
- Axios
- Cheerio
- http-proxy-middleware