#!/bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVICES=(
  "api-gateway"
  "microservice-users"
  "microservice-passengers"
  "microservice-flights"
)

for service in "${SERVICES[@]}"; do
  service_dir="$ROOT_DIR/$service"

  if [ ! -d "$service_dir" ]; then
    echo "No se encontro el directorio: $service"
    exit 1
  fi

  if [ ! -f "$service_dir/package.json" ]; then
    echo "No se encontro package.json en: $service"
    exit 1
  fi

  echo "Instalando dependencias en $service..."
  (
    cd "$service_dir"
    pnpm install
  )
done

echo "Dependencias instaladas en todos los proyectos."
