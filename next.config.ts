import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Allows serverless optimization
  output: 'standalone',

  // ✅ Bundle these packages for server components
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
  ],

  // ✅ Enable React Strict Mode
  reactStrictMode: true,

  // ✅ Optimize for performance
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shakun.vercel.app",
      },
    ],
  },

  // ✅ Optimize bundle
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
    },
  },

  // ✅ Enable experimental features
  experimental: {},

  // ✅ Environment variables - read from process.env with fallbacks
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || "Shakuns Freight Forwarders",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://shakun.vercel.app",
  },

  // ✅ Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
