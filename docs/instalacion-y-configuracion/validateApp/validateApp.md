---
id: validateApp
title: Crear Licencia en ValidateApp
sidebar_label: Licencia en ValidateApp
sidebar_position: 1
---

Para crear una nueva licencia de un nuevo cliente, necesitamos ingresar en la web **http://validateapp.365monitoreo.com/login** y acceder con nuestras respectivas credenciales, si no posees una deberas solicitar la creacion de las mismas.

![validateApp-login](./img/validateApp/validateApp-login.png "validateApp-login")

Una vez que ingresamos en el web hacemos clic en la seccion de **clientes**, para visualizar todas las licencias que existen actualmente

![validateApp-menu_principal](./img/validateApp/validateApp-menu_principal.png "validateApp-menu_principal")

Dentro de la seccion de clientes, se nos mostrara una tabla con la razon social, el rif, el represante, el correo, el serial, el status y las acciones, en el boton **NUEVO** ubicado en la parte superior derecha de la pantalla nos deplegara un formulario con todos los datos necesario para crear un nuevo registro

![validateApp-clientes](./img/validateApp/validateApp-clientes.png "validateApp-clientes")

El formulario para crear un nuevo registro de un cliente esta constituido por los siguientes campos.


<div className="center-content">
|Campo|Descripcion|
|---|---|
|Razon Social|Nombre de la Empresa|
|Rif|Rif|
|Representante|Nombre del Representante|
|Correo|Correo del Representante|
|Distribuidor|Seleccione Distribuidor|
|País|Seleccione País|
|Impuesto|Impuesto|
|Serial|Serial|
|Estatus|ON/OFF|
</div>

<div className="center-content">
![validateApp-agregar_clientes](./img/validateApp/form_agregar_clientes.png "validateApp-agregar_clientes")
</div>

Una vez completados todos estos datos hacemos clic en el boton **Guardar**.

![validateApp-clientes](./img/validateApp/validateApp-clientes.png "validateApp-clientes")

Buscamos el nuevo registro creado en la lista escribiendo el nombre en el campo search y hacemos clic en el boton **DETALLES** en la columna Acciones.

![boton_detalles](./img/validateApp/boton_detalles.png "boton_detalles")

Una vez en la seccion de Panel Cliente nos ubicamos en la pestaña Estaciones 

![validateApp-panel_cliente](./img/validateApp/validateApp-panel_cliente.png "validateApp-panel_cliente")

Nos dirigimos al boton **Agregar** 

![boton_agregar](./img/validateApp/boton_agregar.png "boton_agregar")

Para añadir una nueva estacion (*Sitio donde se encuentra ubicado el servidor*), el usuario y la contraseña de acceso para ingresar al mismo.

<div className="center-content">
|Campo|Descripcion|
|---|---|
|Nombre|Nombre del Sitio|
|Usuario|Usuario|
|Contraseña|Contraseña|
|Estatus|ON/OFF|
</div>

<div className="center-content">
![Agregar Estacion](./img/validateApp/modal_agregar_estacion.png "Agregar Estacion")
</div>

Una vez llenos todos estos datos hacemos clic en el boton **Guardar**.

Luego nos ubicamos en la pestaña Macs

![validateApp-panel_cliente-macs](./img/validateApp/validateApp-panel_cliente-macs.png "validateApp-panel_cliente-macs")

Podemos agregar las macs de forma manual haciendo clic en el boton **Agregar** y llenando los datos del formulario

<div className="center-content">
|Campo|Descripcion|
|---|---|
|Estación|Seleccionamos la anterior estación creada|
|Mac|Colocamos la Mac del equipo|
|Fecha de registro|Seleccionamos la fecha de registro|
|Estatus|ON/OFF|
</div>

<div className="center-content">
![Agregar Mac](./img/validateApp/modal_agregar_mac.png "Agregar Mac")
</div>

>**Nota:** La mac se puede obtener ingresando **getmac** en la consola de comandos (**CMD**) o  automaticamente iniciando el 365receiver una vez instalado, config creado e ingresado el serial en el web.  

>Otra forma de obtener la mac es a través del router, en los dispositivos conectados a la red deberian aparecer reflejado el nombre del dispositivo, la ip privada asignada y la mac.

Luego nos ubicamos en la pestaña Aplicaciones

![validateApp-panel_cliente-aplicaciones](./img/validateApp/validateApp-panel_cliente-aplicaciones.png "validateApp-panel_cliente-aplicaciones")

Podemos agregar la Aplicaciones de forma manual haciendo clic en el boton **Agregar** y llenando los datos del formulario

<div className="center-content">
|Campo|Descripción|
|---|---|
|Estación|Seleccionamos la anterior estación creada|
|Nombre de la Aplicación|Seleccionamos el nombre|
|Fecha de registro|Seleccionamos la fecha de registro|
|Estatus|ON/OFF|
|Fecha de expiración|Seleccionamos la fecha de expiracion|
</div>

<div className="center-content">
![Agregar Aplicaciones](./img/validateApp/modal_agregar_aplicaciones.png "Agregar Aplicaciones")
</div>

![Tabla Aplicaciones](./img/validateApp/tabla_final_aplicaciones.png "Tabla Aplicaciones")

Para verificar que todo esta funcionando correctamente y que todo conectado, podemos ir a la pestaña validaciones y ahi se nos mostrara el software conectado, los dispositivos activos, los dispositivos inactivos, el estatus de la conexion, la ip del servidor, el serial, el motivo de la conexion, la fecha y la acciones que puede realizar.

![validateApp-panel_cliente-validaciones](./img/validateApp/validateApp-panel_cliente-validaciones.png "validateApp-panel_cliente-validaciones")