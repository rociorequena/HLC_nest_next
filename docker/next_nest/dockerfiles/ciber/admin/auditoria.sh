#!/bin/bash
LOG_DIR="/root/logs/auditoria"
LOG_FILE="$LOG_DIR/puertos.log"

# Aseguramos que el directorio y archivo de log existen
mkdir -p "$LOG_DIR"
touch "$LOG_FILE"
chmod 666 "$LOG_FILE"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] SERVICIO DE AUDITORÍA INICIADO" >> "$LOG_FILE"

while true; do
  # Capturamos las conexiones establecidas en los puertos 45678  # SSH
  CONEXIONES=$(netstat -an | grep -E "ESTABLISHED|:45678")
  echo "$CONEXIONES" >> "$LOG_FILE"
  if [ ! -z "$CONEXIONES" ]; then
    # Añadimos el timestamp a cada línea para que la auditoría sea válida
    echo "$CONEXIONES" | awk -v d="[$(date '+%Y-%m-%d %H:%M:%S')]" '{print d " " $0}' >> "$LOG_FILE"
  fi
  
  # Evita llenar el disco de la VPS 
  if [ $(wc -l < "$LOG_FILE") -gt 500 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ROTACIÓN DE SEGURIDAD ACTIVADA" > "$LOG_FILE"
  fi
  
  sleep 5
done