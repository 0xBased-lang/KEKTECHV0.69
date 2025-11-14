#!/bin/bash
set -e

echo ""
echo "🚀 ============================================"
echo "🚀  KEKTECH PRE-DEPLOYMENT CHECKS"
echo "🚀 ============================================"
echo ""

# Get to root directory
cd "$(dirname "$0")/.."

# Run verification
./scripts/verify-deployment-config.sh

# Show current directory
echo "📍 Current directory: $(pwd)"
echo ""

# Show which project will be deployed
if [ -f "packages/frontend/.vercel/project.json" ]; then
    PROJECT_ID=$(cat packages/frontend/.vercel/project.json | grep -o 'prj_[^"]*')
    PROJECT_NAME=$(cat packages/frontend/.vercel/project.json | grep -o '"projectName":"[^"]*"' | cut -d'"' -f4)
    echo "🎯 Target Deployment:"
    echo "   Project Name: $PROJECT_NAME"
    echo "   Project ID: $PROJECT_ID"
    echo ""
fi

echo "✅ Pre-deployment checks passed!"
echo "🚀 Proceeding with deployment..."
echo ""
