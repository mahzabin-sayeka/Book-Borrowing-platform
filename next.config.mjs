// /** @type {import('next').NextConfig} */
// const nextConfig = {
  
//   allowedDevOrigins: ['192.168.0.105', '192.168.0.105:3000', 'localhost:3000'],
  
//   experimental: {
//     serverActions: {
//       allowedOrigins: ['192.168.0.105:3000', 'localhost:3000'],
//     },
//   },
// };

// export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     serverActions: {
//       allowedOrigins: ['192.168.0.107:3000', 'localhost:3000'],
//     },
  
//     allowedDevOrigins: ['192.168.0.107', 'localhost:3000'],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'book-borrowing-platform-five.vercel.app',
        'localhost:3000'
      ],
    },
  },
};

export default nextConfig;