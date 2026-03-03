#!/bin/bash

load_entrypoint_seguridad() {
    echo "Ejecutando entrypoint seguridad..." >> /root/logs/informe_nest.log
    
    if [ -f /root/admin/ciber/start.sh ]; then
        bash /root/admin/ciber/start.sh
        echo "Entrypoint seguridad ejecutado" >> /root/logs/informe_nest.log
    else
        echo "ADVERTENCIA: No se encontró /root/admin/ciber/start.sh" >> /root/logs/informe_nest.log
    fi
}

load_entrypoint_nginx(){
    echo "Cargando entrypoint Nginx..." >> /root/logs/informe_nest.log
    
    if [ -f /root/admin/nginx/start.sh ]; then
        bash /root/admin/nginx/start.sh
        echo "Entrypoint Nginx ejecutado" >> /root/logs/informe_nest.log
    else
        echo "ADVERTENCIA: start.sh de Nginx no encontrado" >> /root/logs/informe_nest.log
    fi
}

workdir(){
    echo "Cambiando directorio al proyecto NestJS..." >> /root/logs/informe_nest.log
    
    if [ -d /root/admin/node/proyectos/nestpostgresql ]; then
        cd /root/admin/node/proyectos/nestpostgresql
        echo "Directorio cambiado a: $(pwd)" >> /root/logs/informe_nest.log
    else
        echo "ERROR: Directorio /root/admin/node/proyectos/nestpostgresql no existe" >> /root/logs/informe_nest.log
        exit 1
    fi
}

dependencias-y-servicio(){
    echo "Limpiando instalaciones previas..." >> /root/logs/informe_nest.log
    # Borrar node_modules y el lock si existen para asegurar una instalación limpia
    rm -rf node_modules package-lock.json
    
    echo "Instalando dependencias desde cero..." >> /root/logs/informe_nest.log
    npm cache clean --force
    npm install
    
    # Asegurar que el CLI de Nest esté presente y sea ejecutable
    npm install --save-dev @nestjs/cli
    chmod +x node_modules/.bin/nest

    echo "Compilando proyecto NestJS..." >> /root/logs/informe_nest.log
    ./node_modules/.bin/nest build && echo "Proyecto compilado exitosamente" >> /root/logs/informe_nest.log
    
    echo "Arrancando NestJS..." >> /root/logs/informe_nest.log
    HOST=0.0.0.0 npm run start:prod &
}



main(){
    mkdir -p /root/logs
    touch /root/logs/informe_nest.log
    load_entrypoint_nginx
    load_entrypoint_seguridad
    workdir
    dependencias-y-servicio
}


main