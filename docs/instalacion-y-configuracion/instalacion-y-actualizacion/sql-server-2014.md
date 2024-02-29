---
id: sql-server-2014
title: SQL Server 2014 Management Studio
sidebar_label: SQL Server 2014
sidebar_position: 1
---

Antes de comenzar con la instalación recomendamos instalar:

- **Actualizaciones de windows**
- **Net framework 3.5**.

Ejecutamos el instalador y seleccionamos la opción **instalación**, y luego **nueva instalación independiente de sql server**.

![sql1](./img/Install_Config/sql/365_sql1.png "sql1")

Introducimos la **clave de producto** del sql server 2014 standard.

![sql2](./img/Install_Config/sql/365_sql2.png "sql2")

Marcamos la opción "**Acepto los terminos de licencia**" y hacemos clic en **siguiente**.

![sql3](./img/Install_Config/sql/365_sql3.png "sql3")

El siguiente paso **Instalar Reglas** tiene como función identificar los posibles problemas
que podrian producirse al ejecutar la instalación.

Si se pasan todas las reglas este paso se procesará y se omitirá automáticamente. Si no se llegan a aprobar algunas reglas, se las deberá corregir para que la configuración pueda continuar. Seleccionamos **Volver a ejecutar** para comprobar que todo este solucionado.

![sql4](./img/Install_Config/sql/365_sql4.png "sql4")

> Si sucede algún error con el NetFramework 3.5 puede dirigirse al siguiente link. [**Error NetFramework 3.5**](../../solucion-de-problemas/365software/problemas-con-la-instalacion.md#instalador-de-sql-server-no-detecta-net-framework-35)

Seleccionamos la opción "**Instalación de características de SQL Server**" y hacemos clic en **siguiente**.

![sql5](./img/Install_Config/sql/365_sql5.png "sql5")

Marcamos la opciones:

- **Motor de base de datos**
- **Herramientas de administración - Basica**
- **Herramientas de administración - Completa**

Hacemos clic en **siguientes** hasta que aparezca la siguiente pantalla.

![sql6](./img/Install_Config/sql/365_sql6.png "sql6")

Seleccionamos el servicio **"Agente SQL Server"** y en el **"Tipo de inicio"** lo cambiamos a **Automático**.

![sql8](./img/Install_Config/sql/365_sql8.png "sql8")

Seleccionamos **"Modo mixto (autentificación de SQL Server y de Windows)"** e introducimos la clave de la base de datos, luego hacemos clic en el botón **"Agregar usuario actual"**.

![sql9](./img/Install_Config/sql/365_sql9.png "sql9")

Seleccionamos **Instalar**

![sql10](./img/Install_Config/sql/365_sql10.png "sql10")

Esperamos que finalice el proceso de instalación.

![sql11](./img/Install_Config/sql/365_sql11.png "sql11")

Una vez terminado el proceso de instalación se mostrara la siguiente ventana.

![sql12](./img/Install_Config/sql/365_sql12.png "sql12")

Hacemos clic en **Cerrar** y finalizara la instalación.
