#!/bin/bash

comprobar_usuario(){
    if grep -q "^alguien:" /etc/passwd 
    then
        echo "El usuario alguien ya existe." >> /root/logs/informe.log
        return 1
    else
        echo "El usuario alguien no existe. Creando usuario..." >> /root/logs/informe.log
        return 0
    fi
}

comprobar_directorio(){
    if [ ! -d "/home/alguien" ]
    then
        echo "El directorio /home/alguien no existe." >> /root/logs/informe.log
        return 0
    else
        echo "El directorio /home/alguien ya existe." >> /root/logs/informe.log
        return 1
    fi
}

crear_usuario(){
    comprobar_usuario
    if [ $? -eq 0 ]
    then
        comprobar_directorio
        if [ $? -eq 0 ]
        then
            useradd -rm -d /home/alguien -s /bin/bash alguien
            echo "alguien:1234" | chpasswd
            echo "Bienvenido alguien" > /home/alguien/welcome.txt
            echo "Usuario alguien creado con éxito." >> /root/logs/informe.log
            return 0
        else
            echo "No se puede crear el usuario alguien porque el directorio ya existe." >> /root/logs/informe.log
            return 1
        fi
    else
        echo "No se puede crear el usuario alguien porque ya existe." >> /root/logs/informe.log
        return 1
    fi
}