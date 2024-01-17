/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Checks if the build is server-side and modifies the config accordingly.
    if (!isServer) {
      // Replace these modules with a mock: 'empty object'.
      config.resolve.fallback = {
        fs: false,
        readline: false,
        // Add other Node modules here if needed
      };
    }

    return config;
  },
}

module.exports = nextConfig