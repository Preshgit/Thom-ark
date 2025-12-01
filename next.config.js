const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ Add this line for static export
  images: {
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
