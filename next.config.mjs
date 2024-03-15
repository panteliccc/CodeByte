/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.googleapis.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
