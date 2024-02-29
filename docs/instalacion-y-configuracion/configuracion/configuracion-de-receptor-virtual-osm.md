---
id: configuracion-de-receptor-virtual-osm
title: Configuración de Receptor Virtual OSM
sidebar_label: Receptor Virtual OSM
sidebar_position: 2
---

## Ejecutamos el Monitoring Reciver Console

Una vez en la pantalla principal del software hacemos clic en la opcion **Servers**, y luego seleccionamos en la opcion **Local** y con el clic izquierdo desplegamos una lista emergente y seleccionamos **Connect**.

![ss1](./img/osm/365_1.jpg "ss1")

En la pestaña **"General"** marcamos la opcion **"Automatically add new devices to default schema of default group"**, que se encuentra desmarcada.

![ss2](./img/osm/365_2.jpg "ss2")

Nos vamos a la pestaña **Inputs** y luego seleccionamos el **Name** que le queremos asignar en este caso es **LX** y en el **Handled devices** seleccionamos la opcion **LX/PXN/PXD/LXG/EX** Y seleccionamos el puerto por el que deseamos recibir las señales, en la opcion **Listening port** en este caso ese el **5200**.

![ss3](./img/osm/365_3.jpg "ss3")

En la pestaña **Outputs** seleccionamos el **Name** que tendrán al salir del OSM el cual es **365_CID**, el **Format** es **Contact ID** y el puerto utilizado es el **8000**..

**Nota:** Si el servidor esta en la misma maquina se coloca la ip de la maquina 127.0.01, de lo contrario se coloca la ip del servidor, en la opcion **Address**.

![ss4](./img/osm/365_4.jpg "ss4")

Luego agregamos otro Analysers y volvemos a seleccionar el **Name** que tendrán al salir del OSM el cual es **365_XML**, el **Format** es **XML** y el puerto utilizado es el **8001**.

![ss5](./img/osm/365_5.jpg "ss5")

Luego agregamos los dos Analysers creados en **Group**, en **ALL** , para hacerlo hay que hacer clic que arrastrar los dos analysers hasta **Group** en **ALL** y seleccionamos la opcion **"one and/or all mandayory"**, seleccionamos la opcion **Apply** y luego **OK**.

![ss6](./img/osm/365_6.jpg "ss6")

:::warning[Importante]
 También es posible seleccionar cual de los analyser group va a ser **mandatory**, haciendo clic sobre el nombre y marcando la casilla correspondiente.
:::
![ss6](./img/osm/osmmandatory.jpg "ss6")

Una vez hecho esto nos vamos a **Local**, en **Devices**, seleccionamos la opcion **Settings**, hacemos clic en la pestaña **View** marcamos las ultimas dos opciones **show known devices** y **show unkown devices**.

![ss7](./img/osm/365_7.jpg "ss7")
