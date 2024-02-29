---
id: parametros-de-archivos-config
title: Parametros archivos config
sidebar_label: Parametros Archivos Config
sidebar_position: 4
---

Descripcion de cada uno de los parametros de los diferentes archivos config.

## Config de 365Web

### SSL

Activa la configuración HTTPS en web

import CodeBlock from '@theme/CodeBlock';

<div>
    <CodeBlock
    language="jsx">
    {` $CONFIG['SSL'] = true o false`}
    </CodeBlock>
</div>
  
### 365ReceiverGPS Version 5

Activa el uso de la version 5 de traccar con 365receivergps

<div>
    <CodeBlock
    language="jsx">
    {` $CONFIG['TRACCAR_5'] = true o false`}
    </CodeBlock>
</div>

### Dias maximos permitidos en reporte de mapas

Configura el limite máximo de dias que se pueden filtrar en el reporte de mapas.

<div>
    <CodeBlock
    language="jsx">
    {` $CONFIG["TOLERANCIA_REPORT_MAP"] = 15`}
    </CodeBlock>
</div>

### Compatibilidad con asterisk

Activa la compatibilidad con asterisk.

    
<div>
    <CodeBlock
    language="jsx">
    {` $CONFIG['ASTERISK'] = true o false`}
    </CodeBlock>
</div>

### Compatibilidad con plugin call center PBX

Activa la compatibilidad con plugin PBX.

<div>
    <CodeBlock
    language="jsx">
    {` $CONFIG['TAIP_ENABLE'] = true o false`}
    </CodeBlock>
</div>

### Fondo de la pantalla de Login

Establece un fondo personalizado para la pantalla de login.

<div>
    <CodeBlock
    language="jsx">
    {` $CONFIG['WEB_LOGIN_BACKGROUND'] = ruta de la imagen de fondo`}
    </CodeBlock>
</div>

### Transpariencia de el formulario de login

Activa la transparencia del login, habilitada generalmente cuando se tiene configurado un fondo personalizado.

<div>
    <CodeBlock
    language="jsx">
    {` $CONFIG['FORM_LOGIN_TRANSPARENCY'] = true o false`}
    </CodeBlock>
</div>
    

### Logo del Login y de la web

Establece logos personalizados, para el login y el menú de modulos.

<div>
    <CodeBlock
    language="jsx">
    {`$CONFIG['WEB_LOGIN_LOGO'] = "logo-login.png";\n$CONFIG['WEB_THEME_LOGO'] = "logo-menu.png";`}
    </CodeBlock>
</div>

## Config de 365Receiver

### SSL

Activa la configuración HTTPS especificando la ruta de los certificados.


<div>
    <CodeBlock
    language="jsx">
    {`    [SSL]
    enable_ssl = false
    ssl_crt_url = ruta del certificado
    ssl_key_url = ruta del certificado
    ssl_rootcert_url = ruta del certificado`}
    </CodeBlock>
</div>

### Eventos Test

Activa o desactiva los eventos Test provenientes del OSM

<div>
    <CodeBlock
    language="jsx">
    {`    [EVENT]
    test_xml = false`}
    </CodeBlock>
</div>


### Envio Reportes validate

Activa o desactiva los procesos de envio de reportes a validate desde receiver.

<div>
    <CodeBlock
    language="jsx">
    {`    [REPORT_VALIDATE]
    report = true`}
    </CodeBlock>
</div>

### Firebase

Activa o desactiva el FCM enviado desde el receiver, si esta en false entonces el servidor queda con formato antiguo, si esta true entonces envía la notificación con el nuevo formato generando propiedad de la firebase al sistema operativo, compatible con la nueva version de 365client.

<div>
    <CodeBlock
    language="jsx">
    {`    [FIREBASE]
    notification = False`}
    </CodeBlock>
</div>

### Debug

Activa los registros de logs en los archivos de history y main.log

<div>
    <CodeBlock
    language="jsx">
    {`    [DEBUG]
    main = logging.DEBUG
    receivers = logging.DEBUG
    monitoring_socket = logging.DEBUG
    map_socket = logging.DEBUG
    alert_mail = logging.DEBUG`}
    </CodeBlock>
</div>