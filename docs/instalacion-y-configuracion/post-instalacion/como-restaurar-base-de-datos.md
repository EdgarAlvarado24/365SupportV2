---
id: como-restaurar-base-de-datos
title: Como Restaurar Base de Datos
sidebar_label: Como Restaurar Base de Datos
sidebar_positon: 2
---

Antes de empezar debemos ubicar nuestro archivo de respaldo en la carpeta donde se encuentra o colocarlo en una carpeta de facil acceso al momento de seleccionarla en el programa.

## Restaurar Base de Datos

Abrimos el **SQL Server Management Studio** seleccionamos nuestro servidor y colocamos las credenciales de autenticación y hacemos clic en **Conectar**

![SQL Server Management Studio](./img/post_install/SSM1.png "SQL Server Management Studio")

![SQL Server Management Studio 2](./img/post_install/SSM2.png "SQL Server Management Studio 2")

Luego en la parte izquierda se nos listaran algunos elementos desplegables.

![SQL Server Management Studio 3](./img/post_install/SSM3.png "SQL Server Management Studio 3")

Hacemos clic derecho en **Bases de Datos** y seleccionamos la opción **Restaurar Base de Datos**

![SQL Server Management Studio 4](./img/post_install/SSM4.png "SQL Server Management Studio 4")

En el **Origen** vamos a seleccionar **Dispositivo** y luego hacemos clic en los puntos suspensivos **"..."**

![SQL Server Management Studio 5](./img/post_install/SSM5.png "SQL Server Management Studio 5")

Se nos presentará una ventana en donde especificaremos el archivo de respaldo y donde se encuentra ubicado, para ello hacemos clic en **Agregar**

![SQL Server Management Studio 6](./img/post_install/SSM6.png "SQL Server Management Studio 6")

Buscamos el archivo con el nombre de la copia de seguridad de nuestra base de datos, lo seleccionamos y hacemos clic en **Aceptar**

![SQL Server Management Studio 7](./img/post_install/SSM7.png "SQL Server Management Studio 7")

> Nota:
> Por defecto la busqueda inicial se localiza en la carpeta **BackUps** de **Microsoft SQL Server**, por lo que si nuestro archivo de respaldo no se encuentra allí, deberemos buscarlo en la carpeta que lo contenga.

Una vez elegido el archivo hacemos clic en **Aceptar**

![SQL Server Management Studio 8](./img/post_install/SSM8.png "SQL Server Management Studio 8")

Verificamos que la casilla de **Restaurar** se encuentre marcada, presionamos aceptar y esperamos a que la operación finalice

![SQL Server Management Studio 9](./img/post_install/SSM9.png "SQL Server Management Studio 9")

![SQL Server Management Studio 10](./img/post_install/SSM10.png "SQL Server Management Studio 10")
