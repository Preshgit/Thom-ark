const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export enabled

  images: {
    unoptimized: true, // FIX: Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },

  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
