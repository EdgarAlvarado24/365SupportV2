---
id: problemas-con-365client
title: Problemas con 365Client
sidebar_label: 365Client
---

Problemas relacionados con la aplicacion 365Client.

| Problema 	| Posible Causa 	| Solución 	|
|----------	|---------------	|----------	|
|Recibe notificaciones push duplicadas|[El servidor está desactualizado](problemas-con-365client#actualizar-la-versión-de-365connectpro)|Actualizar versión de 365ConnectPro|
|Recibe notificaciones push duplicadas|[El dispositivo tiene token de Firebase duplicado](problemas-con-365client#notificaciones-push-duplicadas-o-problemas-de-sesiones-en-las-apps)|ejecutar consulta SQL para tramas duplicadas|
|ya no recibe notificaciones push y antes si lo hacia|[el dispositivo no tiene token Firebase](problemas-con-365client#cerrar-sesión)|cerrar sesión y volver a ingresar|
|ya no recibe notificaciones push y antes si lo hacia|el smartphone tiene las alertas silenciadas|cambiar la configuración de sonido en el smartphone|
|No se ven las imagenes en el listado de dispositivos|falla de carga de los componentes |Borrar cache de la app en ese smartphone |
|No se ven las imagenes en el listado de dispositivos ni los marcadores en el mapa|[Configuración de puerto web incorrecta](problemas-365web#cambiar-puerto-http-de-365web-en-parametros-365config)|Cambiar el puerto web en Parametros 365Config|
|No aparece todo el recorrido al solicitar reporte de ruta del dispositvo|falla en el servidor|revisar que los servicios de 365 se esten ejecutando correctamente|
|No aparece todo el recorrido al solicitar reporte de ruta del dispositvo|El gps no está enviando posiciones |verificar logs de traccar|
|Las notificaciones push no tienen sonido|[El smartphone xiaomi bloquea el sonido de las notificaciones](problemas-con-365client#el-smartphone-xiaomi-bloquea-el-sonido-de-las-notificaciones)|habilitar el sonido de las notificaciones|

## Actualizar la versión de 365ConnectPro

Este problema fue solucionado hace tiempo, es posible que el servidor no haya sido actualizado con los ultimos cambios.

## Notificaciones push duplicadas o problemas de sesiones en las apps

El problema esta relacionado con las key de firebase duplicadas, se puede solucionar ejecutando la siguiente consulta en la base de datos.

```
DELETE t365_FirebaseTokens
 
 WHERE token IN
 (
 SELECT token FROM t365_FirebaseTokens
 GROUP BY token
 )

 AND fecha NOT IN (
 SELECT MAX(fecha) AS fecha FROM t365_FirebaseTokens
 GROUP BY token
 )
```
## Dispositivo no tiene token firebase

### Cerrar Sesión
* [Desde la pantalla principal abrir el menu de opciones y seleccionar la opción para cerrar sesión](365-client-app#opciones)

## El smartphone xiaomi bloquea el sonido de las notificaciones
* [Buscar en las preguntas frecuentes ¿Como habilitar el sonido de las notificaciones en mi xiaomi?](preguntas-frecuentes)
