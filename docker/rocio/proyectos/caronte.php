<?php
echo "<body style='font-family:sans-serif; background:#f4f4f4; padding:20px;'>";
echo "<h1 style='color:#2c3e50;'>Panel de Control - Caronte SA</h1>";
echo "<p style='color:blue;'><b>Modo de Conexión: Red Interna Segura (Docker Bridge)</b></p>";
echo "<hr>";

function check_service($host, $port) {
    # Timeout de 4 segundos (damos tiempo a que LDAP responda)
    $connection = @fsockopen($host, $port, $errno, $errstr, 4);
    if ($connection) {
        fclose($connection);
        return true;
    }
    return false;
}

echo "<h3>Estado de Oracle:</h3>";
if (check_service('oracle_ciber', 1521)) {
    echo "<b style='color:white; background:green; padding:8px; border-radius:5px;'>ORACLE ONLINE (Interno)</b>";
} else {
    echo "<b style='color:white; background:red; padding:8px; border-radius:5px;'>ORACLE OFFLINE</b>";
}

echo "<h3>Estado de LDAP:</h3>";
# Usamos el nombre del contenedor que Docker resuelve internamente
if (check_service('ldap_server_caronte', 389)) {
    echo "<b style='color:white; background:green; padding:8px; border-radius:5px;'>LDAP ONLINE (Interno)</b>";
} else {
    echo "<b style='color:white; background:red; padding:8px; border-radius:5px;'>LDAP OFFLINE</b>";
}

echo "<br><br><hr>";
echo "<small>Seguridad: Tráfico cifrado en red aislada proyectos_default</small>";
echo "</body>";
?>
