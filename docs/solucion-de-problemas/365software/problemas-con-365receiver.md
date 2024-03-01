---
id: problemas-365receiver
title: Resolucion de Problemas 365Receiver
sidebar_label: 365Receiver
---

Problemas relacionados con el 365Receiver.

<div className="center-table">

| Problema                                                    | Posible Causa                                                                                                                | Solución                                                   |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| No llegan Señales a Monitoreo                               | [365Receiver no está ejecutandose](problemas-365receiver#365receiver-no-está-en-ejecución)                                   | Ejecutar 365Receiver                                       |
| Mapa desconectado                                           | [365Receiver no está ejecutandose](./problemas-con-365receiver.md#hay-más-de-una-instancia-de-365receiver-en-ejecución)      | Finalizar el 365Receiver y volver a ejecutarlo             |
| Mensaje "Violación de la licencia, contacte a 365monitoreo" | [el serial del software es incorrecto](./problemas-con-365web.md#el-serial-en-base-de-datos-no-es-correcto)                  | Cambiar el serial en base de datos                         |
| Receptor aparece con simbolo rojo en 365Receiver            | [365Receiver está abierto varias veces](./problemas-con-365receiver.md#hay-más-de-una-instancia-de-365receiver-en-ejecución) | Cerrar todas las instancias del programa y abrir una nueva |
| Receptor aparece con simbolo rojo en 365Receiver            | [Receptor está desconectado](../terceros/problemas-receptores.md#receptor-desconectado)                                      | Solucionar problemas de conexión con el receptor           |

</div>

## 365Receiver no está en ejecución

Cuando hay un error en WSCOM significa que el WebSocket de python no sirviendo las tramas al módulo de monitoreo, esto generalmente ocurre porque el servidor se reinició y el programa de receiver no está en ejecución. En primer lugar hay que revisar si el programa esta ejecutandose actualmente, observando la bandeja del sistema. Posteriormente ejecutar el 365Receiver y verificar que todo funciona correctamente.

## Hay más de una instancia de 365Receiver en ejecución

La mejor forma de estar seguro que no hay varios 365Receiver ejecutandose es abrir el administrador de tareas y terminar los procesos de 365Receiver si es versión compilada o python si es código.

## Desde hace varios minutos he dejado de recibir señales en 365Receiver

Una vez descartado problema de comunicación con el receptor o la redirección de puertos, algunas veces ocurren excepciones que impiden que lleguen las señales a la plataforma, o puede que el receptor sea quien esté presentando el problema.

## Mensaje de Error únicamente en 365Receiver

Este problema ocurre en la Versión 1 debido a que no se pueden registrar clientes con codigos alfanuméricos, para solucionarlo se deben realizar los siguientes pasos:

- Ejecutar SQL Management Studio
- abrir la tabla t365_Cliente
- eliminar los últimos registros que tengan un formato erróneo.
- Finalizar el proceso de 365Receiver y reiniciar el servicio.
