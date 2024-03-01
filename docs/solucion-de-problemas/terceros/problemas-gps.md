---
id: problemas-gps
title: Resolucion de Problemas Dispositivos GPS
sidebar_label: GPS
---

Problemas relacionados con GPS.

import CodeBlock from '@theme/CodeBlock';

<div className="center-table">

| Problema                                                                                                        | Posible Causa                                                                                                                                                                       | Solución                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| El cliente ha registrado un dispositivo en el sistema, aparece conectado pero no muestra la posición en el mapa | [GPS Mal configurado](./problemas-gps.md#comandos-sms-para-gps103)                                                                                                                  | Enviar SMS con comandos para verificar los parametros                                                        |
| El cliente ha registrado un dispositivo en el sistema, aparece conectado pero no muestra la posición en el mapa | [El gps no tiene conexion GPRS](./problemas-gps.md#chequeo-del-estado-del-equipo-y-del-vehículo)                                                                                    | Verificar el APN del dispositivo                                                                             |
| El GPS presenta saltos continuos entre una posición y otra                                                      | Está relacionado con la tarjeta de memoria del gps: cuando no tiene conexión el almacena las señales, y al recuperarla a veces se queda transmitiendo señales antiguas              | Limpiar los registros de la tarjeta de memoria                                                               |
| El dispositivo muestra coordenadas que no se corresponden con la posición real                                  | [El gps no tiene conexion GPRS en ese momento](./problemas-gps.md#verificar-la-transmisión-de-un-dispositivo)                                                                       | verificar la ultima posicion recibida en el log y calcularla a mano o desde otra pagina y luego compararla   |
| El GPS aparece conectado pero no muestra la posición correcta                                                   | [Las tramas llegan a 365receiverGPS pero no tienen latitud y longitud, o esta enviando eventos sin estos parametros](./problemas-gps.md#verificar-la-transmisión-de-un-dispositivo) | verificar si ha comunicado algo por el puerto con ese imei                                                   |
| El dispositivo lleva un rato marcando una misma velocidad pero no se mueve en el mapa                           | [GPS defectuoso, comprobar que esa posición se corresponde con lo que está enviando el dispositivo](./problemas-gps.md#verificar-la-transmisión-de-un-dispositivo)                  | Verificar que los servicios de 365 se encuentren activos                                                     |
| El dispositivo no está reportando posición, pero se encuentra en una zona con buena señal movil                 | Descartar que el problema ocurra con otros gps del cliente y de la plataforma                                                                                                       | Enviar comando check123456 y reset123456                                                                     |
| La plataforma indica que el gps está desconectado desde hace 24 horas                                           | [Batería del GPS sin energía](./problemas-gps.md#verificar-la-transmisión-de-un-dispositivo)                                                                                        | Enviar comandos SMS para determinar si se encuentra activo y con señal movil,revisión física del dispositivo |
| La plataforma indica que el gps está desconectado desde hace 24 horas                                           | Problemas de cobertura o datos                                                                                                                                                      | llamar al número del gps                                                                                     |

</div>

## Comandos SMS para gps103

### Inicialización

Se debe enviar un mensaje de texto con el siguiente comando:

<div>
    <CodeBlock
    language="jsx">
    { `begin123456`}
    </CodeBlock>
</div>

### Configuración del APN

Se debe enviar un mensaje de texto con el siguiente comando:

<div>
    <CodeBlock
    language="jsx">
    { `apn123456 internet.apnejemploproveedor.com`}
    </CodeBlock>
</div>
 
### Configuración del IP de nuestro servidor
Se debe enviar un mensaje de texto con el siguiente comando:

<div>
    <CodeBlock
    language="jsx">
    { `adminip123456 173.212.218.146 5001`}
    </CodeBlock>
</div>
 
### Programación para recibir mensajes continuos y programados
Se debe enviar un mensaje de texto con el siguiente comando:
    
<div>
    <CodeBlock
    language="jsx">
    { `fix180s***n123456`}
    </CodeBlock>
</div>
 
### Obtener el  IMEI del equipo
Se debe enviar un mensaje de texto con el siguiente comando:
    
<div>
    <CodeBlock
    language="jsx">
    { `imei123456`}
    </CodeBlock>
</div>

### Chequeo del estado del equipo y del vehículo

Se debe enviar un mensaje de texto con el siguiente comando:

<div>
    <CodeBlock
    language="jsx">
    { `check123456`}
    </CodeBlock>
</div>

### Activación del GPRS

Se debe enviar un mensaje de texto con el siguiente comando:

<div>
    <CodeBlock
    language="jsx">
    {`gprs123456`}
    </CodeBlock>
</div>

## Verificar la transmisión de un dispositivo

Revisar los registros de 365ReceiverGPS haciendo una busqueda por imei del dispositivo, identificar eventos o señales tracker.

Los logs se encuentran generalmente en la siguiente ruta `C:\Program Files (x86)\365Monitoreo.com\365Connect Pro\365ReceiverGPS\logs\tracker-server.log` tomar en cuenta que ese archivo se genera para cada dia, por lo que si la verificación se va a realizar con respecto a dias anteriores se debe ubicar el archivo con la fecha correspondiente; por ejemplo el archivo `tracker-server.log.20210124` corresponde al log del 24 de Enero de 2021.
