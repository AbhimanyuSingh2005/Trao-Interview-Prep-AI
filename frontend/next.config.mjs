/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8099/api/:path*',
      },
    ];
  },
};

export default nextConfig;
