const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
    ],
  },
  // ✅ Correct placement
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
