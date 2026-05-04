# Unblocking-Proxy

A web proxy server using Ultraviolet to unblock websites.

## Features

- Proxy any website through Ultraviolet
- Service worker-based proxy for full page rewriting

## Installation

1. Install Node.js if not already installed.
2. Clone or download this repository.
3. Run `npm install` to install dependencies.

## Usage

1. Start the server: `npm start`
2. Open your browser and go to `http://localhost:3000`
3. Enter the URL of the website you want to proxy.
4. Click "Go" to access the proxied site.

## Note

This uses Ultraviolet for proxying. For full unblocking, the proxy server should be hosted on a different network than the restricted one.

## Dependencies

- Express
- @titaniumnetwork-dev/ultraviolet