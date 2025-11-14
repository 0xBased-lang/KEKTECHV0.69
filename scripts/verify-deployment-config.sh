#!/bin/bash
set -e

CORRECT_PROJECT_ID="prj_xYbdi0E0eJ1amYm3DAPknR1gWUxR"
CORRECT_ORG_ID="team_zqPDYGyB2bI1MwE8G5zfVOGB"
CORRECT_PROJECT_NAME="kektech-frontend"

echo "🔍 Verifying Vercel deployment configuration..."
echo ""

# Check for nested packages directory
echo "1️⃣ Checking for problematic nested directories..."
if [ -d "packages/frontend/packages" ]; then
    echo "   ❌ ERROR: Nested packages directory found!"
    echo "   Location: packages/frontend/packages/"
    echo "   This should not exist. Run: rm -rf packages/frontend/packages/"
    exit 1
fi
echo "   ✅ No nested packages directory found"
echo ""

# Verify root .vercel config
echo "2️⃣ Checking root .vercel/project.json..."
if [ -f ".vercel/project.json" ]; then
    ROOT_PROJECT_ID=$(cat .vercel/project.json | grep -o 'prj_[^"]*')
    ROOT_PROJECT_NAME=$(cat .vercel/project.json | grep -o '"projectName":"[^"]*"' | cut -d'"' -f4)

    if [ "$ROOT_PROJECT_ID" != "$CORRECT_PROJECT_ID" ]; then
        echo "   ❌ ERROR: Root .vercel/project.json has wrong project ID!"
        echo "   Found: $ROOT_PROJECT_ID"
        echo "   Expected: $CORRECT_PROJECT_ID"
        exit 1
    fi

    if [ "$ROOT_PROJECT_NAME" != "$CORRECT_PROJECT_NAME" ]; then
        echo "   ⚠️  WARNING: Root .vercel/project.json has unexpected project name"
        echo "   Found: $ROOT_PROJECT_NAME"
        echo "   Expected: $CORRECT_PROJECT_NAME"
    fi

    echo "   ✅ Root config correct: $ROOT_PROJECT_NAME ($ROOT_PROJECT_ID)"
else
    echo "   ⚠️  No root .vercel/project.json found (this is OK)"
fi
echo ""

# Verify frontend .vercel config
echo "3️⃣ Checking packages/frontend/.vercel/project.json..."
if [ -f "packages/frontend/.vercel/project.json" ]; then
    FRONTEND_PROJECT_ID=$(cat packages/frontend/.vercel/project.json | grep -o 'prj_[^"]*')
    FRONTEND_PROJECT_NAME=$(cat packages/frontend/.vercel/project.json | grep -o '"projectName":"[^"]*"' | cut -d'"' -f4)

    if [ "$FRONTEND_PROJECT_ID" != "$CORRECT_PROJECT_ID" ]; then
        echo "   ❌ ERROR: Frontend .vercel/project.json has wrong project ID!"
        echo "   Found: $FRONTEND_PROJECT_ID"
        echo "   Expected: $CORRECT_PROJECT_ID"
        exit 1
    fi

    if [ "$FRONTEND_PROJECT_NAME" != "$CORRECT_PROJECT_NAME" ]; then
        echo "   ⚠️  WARNING: Frontend .vercel/project.json has unexpected project name"
        echo "   Found: $FRONTEND_PROJECT_NAME"
        echo "   Expected: $CORRECT_PROJECT_NAME"
    fi

    echo "   ✅ Frontend config correct: $FRONTEND_PROJECT_NAME ($FRONTEND_PROJECT_ID)"
else
    echo "   ❌ ERROR: packages/frontend/.vercel/project.json not found!"
    echo "   Run 'vercel link' from packages/frontend/ to create it"
    exit 1
fi
echo ""

echo "✅ ✅ ✅  All deployment configuration verified successfully!"
echo ""
echo "📍 You will deploy to:"
echo "   Project: $CORRECT_PROJECT_NAME"
echo "   Project ID: $CORRECT_PROJECT_ID"
echo ""
exit 0
