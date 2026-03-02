#!/bin/bash

load_entrypoint_ciber(){
    bash /root/admin/ciber/start.sh
    echo "Entrypoint ciber cargado" >> /root/logs/nginx/nginx.log
}

nginx_config(){
    echo "Configurando nginx" >> /root/logs/nginx/nginx.log
    rm -rf /var/www/html/*
    echo "Se ha eliminado el contenido base de nginx" >> /root/logs/nginx/nginx.log
    service nginx restart
    echo "Nginx reiniciado" >> /root/logs/nginx/nginx.log
    service nginx stop
    echo "Nginx detenido" >> /root/logs/nginx/nginx.log
}   

main(){
    mkdir -p /root/logs/nginx
    touch /root/logs/nginx/nginx.log
    load_entrypoint_ciber
    nginx_config
}

main