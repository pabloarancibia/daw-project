![header](doc/header.png)

# Smart Home - Pablo Arancibia

Proyecto para el trabajo final de la materia Desarrollo de Aplicaciones de la Especialización en IOT de la Universidad de Buenos Aires.

Consiste en una interfaz web para manejo de dispositivos de hogar.
Incluye Front-End y Back-End.


### Pre-requisitos 📋

Solamente necesitas clonar o hacer un fork del repositorio y correr el contenedor de docker, todos los sistemas se instalaran automáticamente en tu contenedor.

**Git**
[Descargar] (https://git-scm.com/downloads)

**Docker**
[Descargar] (https://docs.docker.com/engine/install/)



### Instalación 🔧

Clonar desde: 

[Repositorio] (https://github.com/pabloarancibia/daw-project)


Ejecutar:
```
docker-compose up
```

Ingresa en tu navegador a http://localhost:8000/


## Wiki 📖

En la pantalla principal podrás ver los dispositivos de tu hogar.
En cada dispositivo tendrás información sobre su Nombre, Descripcion y Estado.

Cambia el Estado de un dispositivo simplemente haciendo clic en el switch correspondiente.

Puedes eliminar cualquier dispositivo haciendo clic en el botón eliminar correspondiente.

Agregar Dispositivos:
Para agregar un dispositivo nuevo simplemente navega hasta el final de la pantalla o haz clic en  Agregar en la barra de menú.

Debes ingresar el nombre y la descripcion del dispositivo y seleccionar el tipo.
Se cargarán por defecto en estado "off".

## Construido con 🛠️

Frontend:
* Typescript
* HTML 
* Materialize

Backend:
* Express.js
* Node.js

Base de Datos:
* MySQL

En frontend se utilizan peticiones GET y POST y se esuchan las respuestas correspondientes. Esto se realiza a travéz de interfaces y listeners.
Se utilizaron tecnologías REST para comunicar el backend con el frontend.
En backend se utilizan APIs de Express para realizar GET y POST.
Finalmente los datos impactan en la base de datos a travéz de querys mysql.


## Autores ✒️

Base de la aplicación:
* Agustin Bassi
* Brian Ducca
* Santiago Germino

Modificaciones solicitadas:
* Pablo Arancibia


## Licencia 📄

Este proyecto está bajo la Licencia GPLV3+. 

![footer](doc/footer.png)
