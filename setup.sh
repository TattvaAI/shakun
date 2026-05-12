#!/bin/bash
# setup.sh - Development & Deployment Setup Script

set -e

echo "🚀 Setting up Shakuns Freight Forwarders project..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check for pnpm
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

echo "✅ pnpm version: $(pnpm -v)"

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Create .env file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << 'EOF'
# Development environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
    echo "✅ Created .env.local"
fi

echo ""
echo "🎉 Setup complete! You can now run:"
echo "   pnpm dev     - Start development server"
echo "   pnpm build   - Build for production"
echo "   pnpm start   - Start production server"
echo "   pnpm lint    - Run ESLint"
echo ""
echo "🐳 Docker commands:"
echo "   docker-compose up --build   - Build and start with Docker"
