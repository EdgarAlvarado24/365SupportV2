---
id: reportes
title: Reportes
sidebar_label: Reportes
sidebar_position: 11
---

Este modulo esta diseñado para que los usuarios pertenecientes a la empresa puedan cuantificar y obtener a un registro desde los tipos de señales recibidas en la plataforma, los estatus de los dispositivos, el registro de acciones de usuarios hasta los gps sin comunicar. 

<div className="justify-text">
Los reportes son informes que organizan y exhiben la información contenida en una base de datos de forma detallada. Su función es aplicar un formato determinado a los datos para mostrarlos por medio de un diseño atractivo y que sea fácil de interpretar por los usuarios
</div>

![reportes](./img/Reportes/reportes.png "reportes")

## Activaciones
<div className="justify-text">
El sub modulo Activaciones expone los Dispositivos con más activaciones de Eventos, filtrando entre un intervalo de fechas y tipo de dispositivo. Esta compuesto por un segmento que muestra un gráfico de barras con los dispositivos que presentan mayor número de activaciones y una tabla donde se listan con mayor detalle los datos.
</div>

![Activaciones](./img/Reportes/activaciones1.png "Activaciones")

### ¿Cómo generar un reporte de activaciones?
* Seleccione la fecha inicial y la fecha final

![Activaciones2](./img/Reportes/activaciones2.png "Activaciones2")

* Seleccione el tipo de dispositivo del cual desea información sobre activaciones

![Activaciones3](./img/Reportes/activaciones3.png "Activaciones3")

* Presione el Botón **Generar**, de color verde para visualizar el reporte.

![Activaciones4](./img/Reportes/activaciones4.png "Activaciones4")

* Puede seleccionar el botón de Excel o PDF para generar un archivo de reportes general de todos los dispositivos.

![Activaciones5](./img/Reportes/activaciones5.png "Activaciones5")

* Ademas también se puede generar un reporte individual por cada dispositivo.

![Activaciones6](./img/Reportes/activaciones6.png "Activaciones6")

## Grupo Señal
<div className="justify-text">
Exhibe el porcentaje de señales generadas en un tiempo determinado y agrupadas según el tipo de señal. Esta compuesto por un segmento que muestra en forma de gráfica tipo dona el porcentaje de señales generadas.
</div>

![Grupo de Señales](./img/Reportes/grupoSeñales.png "Grupo de Señales")

### ¿Cómo generar un reporte Grupo Señal?
* Seleccione la fecha de inicio y la fecha final

![Grupo de Señales2](./img/Reportes/grupoSeñales2.png "Grupo de Señales2")

* Presione el botón Buscar para visualizar el reporte.

![Grupo de Señales3](./img/Reportes/grupoSeñales3.png "Grupo de Señales3")

* En este reporte podemos observar los tipos de señales, el total de activaciones y el numero de activaciones en cada tipo. 

![Grupo de Señales4](./img/Reportes/grupoSeñales4.png "Grupo de Señales4")

* También podemos filtrar las señales que deseemos visualizar en la grafica al presionar en los
botones de la lista ubicada en la parte izquierda.

![Grupo de Señales5](./img/Reportes/grupoSeñales5.png "Grupo de Señales5")

## Código de Alarmas
<div className="justify-text">
Permite ver los dispositivos con señales filtradas de acuerdo a su código de Señal y grupo de Señal. Está compuesto por una tabla que lista los dispositivos que cumplan con el grupo y código de señal seleccionado.
</div>

![Código de Alarmas](./img/Reportes/reportesCodeAlarmas.png "Código de Alarmas")

### ¿Cómo generar un reporte Código de Alarmas?
* Seleccione la fecha de inicio y la hora de inicio

![Código de Alarmas](./img/Reportes/reportesCodeAlarmas3.png "Código de Alarmas")

* Seleccione la fecha final y la hora final

![Código de Alarmas](./img/Reportes/reportesCodeAlarmas4.png "Código de Alarmas")

* Presione el Botón **Generar**, de color verde para visualizar el reporte. 

![Código de Alarmas](./img/Reportes/reportesCodeAlarmas5.png "Código de Alarmas")

## SMS Total por Cliente
<div className="justify-text">
El sub modulo SMS Total por Cliente esta compuesto por una ventana en donde se puede contemplar un gráfico del numero de mensajes enviados a cada cliente que esta afiliado a la empresa, solo introduciendo una f echa inicial en el primer campo-calendario,ademas de una fecha final en el segundo.
</div>

![SMS Total por Cliente](./img/Reportes/smsTotalPorCliente.png "SMS Total por Cliente")

<div className="justify-text">
En la lista que muestra este modulo se puede generar un reporte detallado de cada dispositivo, con el numero al cual se contacto, el mensaje y la fecha que se emitió el mensaje.
</div>

![SMS Total por Cliente2](./img/Reportes/smsTotalPorCliente2.png "SMS Total por Cliente2")

## SMS Entrada
Lista los mensajes de texto recibidos por la empresa

![SMS Entrada](./img/Reportes/reporteSmsEntrada.png "SMS Entrada")

## Cliente Notificaciones
Permite observar en detalle las Notificaciones configuradas para todos los dispositivos y es posible filtrar de acuerdo al tipo de notificación, estatus de notificación y la empresa.

![Cliente Notificaciones](./img/Reportes/reporteClienteNotificaciones.png "Cliente Notificaciones")

## Estatus Panel
<div className="justify-text">
El sub modulo Estatus Panel esta constituido por un gráfico en el cual se muestra las apertura y los cierre de todos los locales, para mostrar estos datos es necesario introducir una fecha inicial ademas de una fecha final, para después hacer clic en el botón buscar para visualizar dicha información y con el botón reset se puede limpiar las dos fechas para volver a introducirlas.
</div>

![Estatus Alarma](./img/Reportes/estatusAlarma.png "Estatus Alarma")

## Estatus Dispositivos
Muestra información referente a los dispositivos pertenecientes a una empresa.

![Estatus Dispositivos](./img/Reportes/estatusDispositivos.png "Estatus Dispositivos")

## Linea Receptor
Permite observar en detalle por que receptor y linea ingresaron las señales en un tiempo determinado. Este sub módulo muestra una gráfica, y una tabla con el detalle de las señales.

![Linea Receptor](./img/Reportes/lineaReceptor.png "Linea Receptor")

En el detalle de linea se muestra el prefijo junto con el numero del dispositivo,  el alias y la dirección del mismo.

![Linea Receptor2](./img/Reportes/lineaReceptor2.png "Linea Receptor2")

## Dispositivo

<div className="justify-text">
Permite observar la cantidad de dispositivos que posee la plataforma, ademas muestra el reporte muestra el nombre del cliente, con el alias, el numero, la empresa y la fecha del ultimo reporte divididos por el tipo de cada uno de ellos y el muestra una tabla con la cantidad de total dispositivos
</div>

![Dispositivo](./img/Reportes/reporteDispositivo.png "Dispositivo")

### ¿Cómo generar un reporte Dispositivo?
* seleccione los parámetros pertinentes o necesarios y le damos clic en **Generar**.

![Dispositivo](./img/Reportes/reporteDispositivo2.png "Dispositivo")

## Ficha Dispositivo

<div className="justify-text">
Permite generar el reporte de un dispositivo con los Datos del Dispositivo, los Datos del Servicio, las Zonas, los Usuarios del Sistema, los Contactos, los Horarios, Las Notificaciones y Los Servicios.
</div>

![Ficha Dispositivo](./img/Reportes/reporteFichaDispositivo.png "Ficha Dispositivo")

### ¿Cómo generar un reporte Ficha Dispositivo?
* Seleccione el dispositivo, las pestañas que deseas mostrar en el reporte y damos clic  en  **Generar**. 

![Ficha Dispositivo](./img/Reportes/reporteFichaDispositivo2.png "Ficha Dispositivo")

:::warning[Importante]
Se pueden seleccionar todos los dispositivos dentro del reporte Ficha Dispositivo.
:::

## Panel Alarmas sin Coordenadas

Muestra la información de los dispositivos de tipo central de alarma sin coordenadas.

![Panel Alarmas sin Coordenadas](./img/Reportes/panelesAlarmasSinCoordenadas.png "Panel Alarmas sin Coordenadas")

:::warning[Importante]
Se puede asignar la ubicación desde esta sección.
:::

### ¿Cómo asignar una ubicación desde Panel Alarmas sin Coordenadas?

* Haz clic en el boton que tiene un "Pin" como símbolo.

![Panel Alarmas sin Coordenada1](./img/Reportes/panelAlarmaSinCoordenadas1.png "Panel Alarmas sin Coordenadas1")

* Se abrira una ventana con un mapa en donde podremos elegir la ubicación del dispositivo con solo dar clic en el lugar
que deseemos, posteriormente hacemos clic en la opción **Guardar Ubicación**

![Mapa Panel sin Coordenadas](./img/Reportes/mapaPanelSinCoordenadas.png "Map Panel Sin Coordenadas")

:::warning[Importante]
Puedes hacer **Zoom In** para asignar el lugar con mayor presición.
:::

### ¿Cómo generar un reporte Panel Alarmas sin Coordenadas?
* Seleccione la empresa, se busca por Dispositivo, Alias, Ciudad, Dirección y se generara la búsqueda automáticamente. 

![Panel Alarmas sin Coordenada2](./img/Reportes/panelesAlarmasSinCoordenadas2.png "Panel Alarmas sin Coordenadas2")

## Cliente sin Imagen

Muestra la información todos los Clientes que no posean imagen.

![Cliente sin Imagen](./img/Reportes/clienteSinImagen.png "Cliente sin Imagen")

:::warning[Importante]
Se puede colocar el nombre para una busqueda mas especifica.
:::

### ¿Cómo asignar una imagen desde Cliente sin Imagen?

* Haga clic en el boton de **Agregar Imagen** en el dispositivo al que desee asignar.

![Cliente sin Imagen1](./img/Reportes/clienteSinImagen1.png "Cliente sin Imagen1")

* Luego haga clic en **Seleccione Imagen**.

![Seleccione Imagen](./img/Reportes/seleccioneImagen.png "Seleccione Imagen")

* Seleccione la imagen que desee asignar.

![Elegir Imagen](./img/Reportes/elegirImagen.png "Elegir Imagen")

* Por ultimo haga clic en **Guardar** para confirmar.

![Imagen Elegida](./img/Reportes/imagenElegida.png "Imagen Elegida")

:::warning[Importante]
Se puede cambiar o remover la imagen asignada en caso de cambiar de opinion.
:::

## Clientes Empresas

Muestra la información general de las empresas conectadas a la plataforma como la Cantidad de clientes. los clientes activos con SMS, cantidad teléfonos SMS, cantidad SMS enviados, clientes con horarios, entre otros.

![Clientes Empresas](./img/Reportes/clientesEmpresas.png "Clientes Empresas")

## Cliente Ultima Señal

Muestra el ultimo evento recibido por el dispositivo, junto con la fecha que recibió el evento, ademas cuantos días tiene sin transmitir y la partición por donde se envió el evento.

![Cliente Ultima Señal](./img/Reportes/ultimaSeñalClientes.png "Cliente Ultima Señal")

### ¿Cómo generar un reporte Cliente Ultima Señal?
* Seleccione el tipo de dispositivos, el tipo de señal, el tiempo, El estatus del monitoreo, Empresa y damos clic  en  **Generar**.

![Cliente Ultima Señal2](./img/Reportes/ultimaSeñalClientes2.png "Cliente Ultima Señal2")


## Dispositivo Ultima Apertura o Cierre

Muestra el ultimo evento de armado o desarmado que recibido el dispositivo, junto con la fecha que lo recibió, los días transcurrido desde que recibió el evento y la partición por la que se envió.

![Dispositivo Ultima Apertura o Cierre](./img/Reportes/ultimaAperturaCierre.png "Dispositivo Ultima Apertura o Cierre")

### ¿Cómo generar un reporte Dispositivo Ultima Apertura o Cierre?
* Seleccione el estatus de la alarma, el tipo de cliente, la Empresa y damos clic  en  **Generar**.

![Dispositivo Ultima Apertura o Cierre](./img/Reportes/ultimaAperturaCierre2.png "Dispositivo Ultima Apertura o Cierre")

## Log de Usuarios

Permite observar información detallada de cada uno de los movimientos de distintos usuarios en la plataforma, ademas de poseer varios tipos de filtros.

![Log de Usuarios](./img/Reportes/logDeUsuarios.png "Log de Usuarios")

### ¿Cómo generar un reporte Log de Usuarios?
* Seleccione la Acción, el Detalle, el Usuario, el Dispositivo, la Empresa, una fecha de inicio y una fecha final, y damos clic  en  **Generar**.

![Log de Usuarios](./img/Reportes/logDeUsuarios2.png "Log de Usuarios")


## Historial Detallado del Dispositivo

<div className="justify-text">
Genera un reporte detallado de un dispositivo o cliente de cualquier empresa, en un periodo de tiempo, el cual te permite filtrar por grupo o evento, ademas permite observar otros parámetros como detalles del operador, observaciones y categorías, asi mismo filtrarlos de forma ascendente o descendente.
</div>

![Historial Detallado del Dispositivo](./img/Reportes/historialDetalladoDipositivo.png "Historial Detallado del Dispositivo")

### ¿Cómo generar un Historial Detallado del Dispositivo?
* Seleccione la Empresa, el Tipo de Búsqueda, el Dispositivo, el Grupo de eventos o por eventos, los detalles necesarios, un orden ascendente o descendente y damos clic  en  **Generar**.

![Historial Detallado del Dispositivo2](./img/Reportes/historialDetalladoDipositivo2.png "Historial Detallado del Dispositivo2")

## Operadores Monitoreo

Permite generar una gráfica y un listado de las señales procesadas por un operador ya sea por sesiones o por una fecha en específico incluido el tiempo que se tardó en procesarlas, ademas se puede filtrar por empresas el operador, este reporte se genera en excel.

![Operadores Monitoreo](./img/Reportes/ReporteOperador.png "Operadores Monitoreo")

### ¿Cómo generar un reporte de Operadores Monitoreo?
* Seleccione la Empresa, el Operador que deseamos buscar, el Tipo de reporte por sesiones o por fechas, el Grupo de la señal, el Código de la señal, la Diferencia de tiempo entre el momento en que llegó la señal y el que fue procesada y damos clic  en  **Generar**.

![Operadores Monitoreo](./img/Reportes/operadoresMonitoreo.png "Operadores Monitoreo")

![Operadores Monitoreo](./img/Reportes/operadoresMonitoreo2.png "Operadores Monitoreo")

## Inicio/Vencimiento Dispositivos

<div className="justify-text">
Muestra una lista con el cliente, el dispositivo, el alias, el tipo de dispositivo, fecha de inicio, el tiempo instalado y la empresa. Esta lista se puede filtrar por empresa, por tipo de dispositivo, y tipo de reporte, inicio o vencimiento.
</div>

![Inicio Vencimiento Dispositivos](./img/Reportes/inicioVencimientoDispositivo.png "Inicio Vencimiento Dispositivos")

### ¿Cómo generar un reporte de Inicio/Vencimiento Dispositivos?
* Seleccione la Empresa, el Tipo de Dispositivo, el Tipo de reporte, una fecha de inicio junto con una fecha final y damos clic  en  **Generar**.

![Inicio Vencimiento Dispositivos](./img/Reportes/inicioVencimientoDispositivo2.png "Inicio Vencimiento Dispositivos")

## GPS sin Comunicar

Genera una lista con los dispositivos, los clientes, el alias, ultimo reporte y el tiempo puede ser filtrado en horas, minutos y segundos, ademas de por empresa.

![GPS sin Comunicar](./img/Reportes/gpsSinComunicar.png "GPS sin Comunicar")

## Etiquetas Clientes

<div className="justify-text">
Este Modulo permite crear y listar etiquetas para los clientes mostrando los datos rif, cliente, empresa, teléfono movil y teléfono local, ademas permite filtrar estas etiquetas por empresa o por el nombre de la etiqueta, siendo posible generar un reporte en excel.
</div>

![Etiquetas Clientes](./img/Reportes/etiquetas.png "Etiquetas Clientes")

## Etiquetas Dispositivos

<div className="justify-text">
Este Modulo permite crear y listar etiquetas para los dispositivos mostrando los datos rif, dispositivo, empresa, teléfono movil y teléfono local, ademas permite filtrar estas etiquetas por empresa o por el nombre de la etiqueta, siendo posible generar un reporte en excel.
</div>

![Etiquetas Clientes](./img/Reportes/etiquetas.png "Etiquetas Clientes")

## Historial de Comandos

Permite mostrar el historial de comandos de un dispositivo, para eso simplemente seleccionamos el dispositivo.

![Historial Comandos](./img/Reportes/historialComandos.png "Historial Comandos")

* Lo primero que haremos es seleccionar el dispositivo del cual queremos ver el historial del comando.

![Historial Comandos 1](./img/Reportes/historialComandos1.png "Historial Comandos 1")

* Despues seleccionamos el usuario que queremos saber que envio comandos, si no seleccionamos un usuario en especifico, por defecto se seleccionaran todos los usuarios de ese dispositivo.

![Historial Comandos 2](./img/Reportes/historialComandos2.png "Historial Comandos 2")

* Luego seleccionamos el nombre del comando que queremos buscar y el tipo de canal por donde se envio, si es GPRS, SMS o TCP, si no se selecciona un comando en especifico se seleccionaran todos los comandos.

![Historial Comandos 3](./img/Reportes/historialComandos3.png "Historial Comandos 3")

* Por ultimo seleccionamos la fecha y la hora entre la que deseamos filtrar.

![Historial Comandos 4](./img/Reportes/historialComandos4.png "Historial Comandos 4")

* Luego simplemente hacemos clic en el boton generar y se nos mostrara el historial con los filtros que utilizamos.

## Historial general
<div className="justify-text">
Este Modulo lista el historial de todos los dispositivos pertenecientes a todas las empresas, permite filtrar por evento y un intervalo de fechas. Si selecciona un cliente permite ver señales de todos los dispositivos que pertenezcan a él o especificar la zona donde se producen estos eventos
</div>

![Historial General](./img/Reportes/historialGeneral.png "Historial General")

## Eventos

Permite mostrar reportes relacionados con los eventos.

![Eventos](./img/Reportes/eventos.png "Eventos")

### Eventos No Definidos

Este reporte permite capturar o guardar eventos no registrado o definidos por nuestra plataforma junto con el código del evento y el protocolo al que pertenece. 

![Eventos No Definidos](./img/Reportes/eventosNoDefinidos.png "Eventos No Definidos")

### Eventos Incluyentes/Excluyentes

Este reporte muestra una lista de eventos los cuales están en la sección de eventos incluyentes y excluyentes.

![Eventos Incluyentes/Excluyentes](./img/Reportes/eventosIncluyentesExcluyentes.png "Eventos Incluyentes/Excluyentes")

### Switch de Eventos

Este reporte muestra una lista de eventos los cuales están en la sección de switch de eventos.

![Swtich de Eventos](./img/Reportes/switchEventos.png "Swtich de Eventos")

### Eventos Cronometrados

Este reporte muestra una lista de eventos los cuales están en la sección de eventos cronometrados.

![Eventos Cronometrados](./img/Reportes/eventosCronometrados.png "Eventos Cronometrados")

