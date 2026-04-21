#!/bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVICES=(
	"api-gateway"
	"microservice-users"
	"microservice-passengers"
	"microservice-flights"
)

PIDS=()

cleanup() {
	echo
	echo "Deteniendo servicios..."

	for pid in "${PIDS[@]:-}"; do
		if kill -0 "$pid" 2>/dev/null; then
			kill "$pid" 2>/dev/null || true
		fi
	done

	wait || true
	echo "Todos los servicios fueron detenidos."
}

trap cleanup SIGINT SIGTERM

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

	echo "Iniciando $service..."
	(
		cd "$service_dir"
		pnpm run start:dev
	) &

	PIDS+=("$!")
done

echo "Todos los servicios iniciados en modo desarrollo."
echo "Presiona Ctrl+C para detenerlos."

wait
