/** @type {import('next').NextConfig} */
const nextConfig = {
  
  allowedDevOrigins: ['192.168.0.105', '192.168.0.105:3000', 'localhost:3000'],
  
  experimental: {
    serverActions: {
      allowedOrigins: ['192.168.0.105:3000', 'localhost:3000'],
    },
  },
};

export default nextConfig;