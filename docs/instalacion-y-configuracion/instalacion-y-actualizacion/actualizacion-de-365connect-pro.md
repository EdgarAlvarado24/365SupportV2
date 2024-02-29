---
id: actualizacion-de-365connect-pro
title: Actualizacion de 365Connect Pro
sidebar_label: Actualizacion de 365Connect Pro
sidbar_position: 4
---

Para evitar perdida de datos al realizar la actualización, lo primero que debemos hacer antes de iniciar es hacer un backup de la Base de datos.

## Respaldo de puertos en firewall

Respaldamos la lista de puertos que se encuentran en la regla de 365Connect Pro dentro del cortafuegos lo almacenamos en un txt.

![365_firewall](../post-instalacion/img/Update/365_firewall.png "365_firewall")

## Respaldo de puertos de 365ReceiverGPS

Respaldamos la lista de puertos que se encuentran en la carpeta `C:\Program Files (x86)\365Monitoreo.com\365Connect Pro\365ReceiverGPS\conf` en el archivo default.xml, el cual se traduce en copiar todo el contenido de todo ese archivo.

![default-xml](../post-instalacion/img/Update/default-xml.png "default-xml")

## Respaldo de 365

Respaldamos la carpeta 365 dentro de xampp/htcdocs.
Respaldamos la carpeta de 365ConnectPro en archivos de programa.

## Respaldo de Base de datos

### Desde la plataforma

Ingresamos a la plataforma, vamos al **modulo de parametros**, seleccionamos la opción Respaldo.
![resp](../post-instalacion/img/Update/resp.png "resp")

El Respaldo se almacena en `C:\xampp\htdocs\365\backupDB`

### Desde SQL Management Studio

Ejecutar **Microsoft SQL Server Management Studio**, ingresamos las credenciales y nos ubicamos sobre la base de datos que deseamos respaldar, hacemos clic derecho, seleccionamos la opción **tareas, copia de seguridad**.
![resp1](../post-instalacion/img/Update/resp1.png "resp1")

Seleccionar la opción **quitar**.

![resp2](../post-instalacion/img/Update/resp2.png "resp2")

luego Agregamos una ruta nueva y hacemos clic en el boton que tiene tres puntos.

![resp3](../post-instalacion/img/Update/resp3.png "resp3")

Seleccionamos la ruta de destino, y le asignamos un nombre al archivo backup, finalizandolo con la extensión **.bak**.

![resp5](../post-instalacion/img/Update/resp5.png "resp5")

Si hicimos los pasos correctamente nos saldra este ultimo mensaje.

![resp6](../post-instalacion/img/Update/resp6.png "resp6")

### Desde Migraciones

Ejecutamos el archivo `start.py` , ingresamos las credenciales. Enseguida nos preguntará si queremos hacer un respaldo de la base de datos; escribimos `S` Para realizar el backup.
![respaldo](../post-instalacion/img/Update/migra.png "respaldo")
El backup se almacena en `C:\ProgramFiles\MicrosoftSQLServer\MSSQL12.MSSQLSERVER\MSSQL\Backup`
Ejecutamos Migraciones desde la ruta

## Detenemos Los servicios

Indicarle al Cliente que cierre todas las estaciones. Cerrar el 365Receiver y asegurarnos en el administrador de tareas que el proceso ya no esté en ejecución.

Detenemos el servicio de 365ReceiverGPS, Y Apache.

## Desisntalar 365ConnectPro

Vamos a panel de control, programas y características, y desde allí buscamos 365Connect Pro.
Instalar nueva Version de 365Connect

Se procede a la instalación de forma rutinaria

## Migraciones

Al finalizar la instalación nos dirigimos a la ruta

<code> C:\Program Files (x86)\365Monitoreo.com\365Connect Pro\migraciones </code>

para ejecutar el archivo <code> start.py </code>

En la consola que se nos va a desplegar seleccionamos únicamente la opcion 1
