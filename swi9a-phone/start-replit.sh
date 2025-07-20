#!/bin/bash

echo "🚀 Starting Swi9a Phone Application..."

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing root dependencies..."
    npm install
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

# Build the applications
echo "🔨 Building applications..."
npm run build

# Start the applications
echo "🌟 Starting applications..."
npm run start:prod