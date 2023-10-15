const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
};

module.exports = withContentlayer(NextConfig);