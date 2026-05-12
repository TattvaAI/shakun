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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shakun.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ✅ Optimize bundle
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{kebabCase member}}",
    },
  },

  // ✅ Enable experimental features
  experimental: {
    optimizeCss: true,
    // Instrumentation for observability
    instrumentationHook: true,
  },

  // ✅ Environment variables that must be present at build time
  env: {
    NEXT_PUBLIC_APP_NAME: "Shakuns Freight Forwarders",
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
