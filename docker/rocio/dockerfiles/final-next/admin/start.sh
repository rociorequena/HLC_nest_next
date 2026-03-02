#!/bin/bash

load_entrypoint_node(){
    bash /root/admin/node_next/start.sh
    echo "Entrypoint node cargado" >> /root/logs/next_final/next_final.log
}

cofiguracion_final_nginx(){
    # 1. Aplicar la configuración de Nginx (para escuchar en 80)
    cp /root/admin/next_final/custom_nginx.conf /etc/nginx/sites-available/default
    
    # 2. Compilar Next.js y arrancarlo en puerto 3001
    cd /root/admin/node_next/proyecto-next
    npm run build
    nohup npm start -- -p 3001 > /root/logs/next_final/next_server.log 2>&1 &
    echo "Next.js compilado e iniciado en puerto 3001" >> /root/logs/next_final/next_final.log
    
    # 3. Mover página de error personalizada
    cp /root/admin/node_next/error_custom.html /var/www/html/error_custom.html
    echo "Página de error copiada a /var/www/html" >> /root/logs/next_final/next_final.log
    
    # 4. Iniciar Nginx en primer plano
    echo "Nginx iniciado en primer plano (Proxy)" >> /root/logs/next_final/next_final.log
    nginx -g "daemon off;"
}

main(){
    mkdir -p /root/logs/next_final
    touch /root/logs/next_final/next_final.log
  
    load_entrypoint_node
    cofiguracion_final_nginx
}
    
main