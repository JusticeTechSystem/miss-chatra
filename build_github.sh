#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
#  Miss Chatra WA — GitHub Push Obfuscator
#  Run this BEFORE pushing to GitHub.
#  Output goes into ./github_build/ — push THAT folder's
#  contents to your repo (not the raw source).
#
#  Usage:  bash build_github.sh
# ─────────────────────────────────────────────────────────────

set -e

OUTDIR="./github_build"
OBFUSCATOR="npx --yes javascript-obfuscator"

# Files/dirs to SKIP obfuscation (copy as-is)
SKIP_OBFUSCATE=(
  "node_modules"
  "sessions"
  "database"
  ".env"
  "package-lock.json"
  "thumbnail"
)

# JS files that MUST be obfuscated (index.js + all plugins + library)
OBFUSCATE_DIRS=("plugins" "library")
OBFUSCATE_FILES=("index.js" "message.js")

echo "🔨 Cleaning output dir..."
rm -rf "$OUTDIR"
mkdir -p "$OUTDIR"

echo "📦 Copying non-JS assets..."
# Copy everything except node_modules and sessions
rsync -a --exclude='node_modules' --exclude='sessions' \
         --exclude='github_build' --exclude='.git' \
         --exclude='*.bak' \
         . "$OUTDIR/"

echo "🔒 Obfuscating JS files..."

obfuscate_file() {
  local src="$1"
  local dest="$2"
  mkdir -p "$(dirname "$dest")"
  $OBFUSCATOR "$src" \
    --output "$dest" \
    --compact true \
    --identifier-names-generator hexadecimal \
    --string-array true \
    --string-array-encoding rc4 \
    --string-array-threshold 0.75 \
    --rotate-string-array true \
    --shuffle-string-array true \
    --split-strings true \
    --split-strings-chunk-length 8 \
    --dead-code-injection false \
    --control-flow-flattening false \
    --rename-globals false \
    --self-defending false \
    2>/dev/null && echo "  ✅ $src" || { echo "  ⚠️  Failed: $src — copying plain"; cp "$src" "$dest"; }
}

# Obfuscate root JS files
for f in "${OBFUSCATE_FILES[@]}"; do
  [ -f "$f" ] && obfuscate_file "$f" "$OUTDIR/$f"
done

# Obfuscate all .js files in target dirs
for dir in "${OBFUSCATE_DIRS[@]}"; do
  if [ -d "$dir" ]; then
    while IFS= read -r -d '' jsfile; do
      rel="${jsfile#./}"
      obfuscate_file "$jsfile" "$OUTDIR/$rel"
    done < <(find "./$dir" -name "*.js" -print0)
  fi
done

echo ""
echo "✅ Done! Push the contents of ./$OUTDIR/ to GitHub."
echo "   cd $OUTDIR && git init && git remote add origin <your-repo> && git push -f"
echo ""
echo "⚠️  NEVER push the raw source folder to GitHub."
echo "    Always run this script first."
