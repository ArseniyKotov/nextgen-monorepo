const { withAmplify } = require('@aws-amplify/adapter-nextjs/with-amplify');
const config = require('./amplifyconfiguration.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  }
}

module.exports = withAmplify(nextConfig, config)
