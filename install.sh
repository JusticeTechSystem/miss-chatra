#!/bin/bash
# Miss Chatra WA — Install Script for Pterodactyl (Node 22/24)
# Run ONCE after upload: bash install.sh

echo "🧹 Cleaning old install..."
rm -rf node_modules package-lock.json

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Install complete!"
  echo ""
  echo "Start the bot with:"
  echo "  node --no-warnings index.js"
  echo ""
  echo "Or set your Pterodactyl startup command to:"
  echo "  node --no-warnings index.js"
else
  echo "❌ npm install failed. Check the error above."
fi
