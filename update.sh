#!/bin/bash
for dir in */; do
  if [ -f "$dir/package.json" ]; then
    echo "📦 Actualizando: $dir"
    cd "$dir"
    npx npm-check-updates -u
    pnpm install
    cd ..
  fi
done