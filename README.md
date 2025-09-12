# API-REST: CRUD de Usuarios

En este archivo de texto, se explicara el paso a paso de como se debe instalar y utilizar el sistema de usuarios además de que comandos deben usarse para el correcto funcionamiento.

## Comandos a utilizar

 - git clone
 - npm init
 - npx sequelize-cli db:migrate
 - npx sequelize-cli db:seed:all
 - npm run dev/start

## Aplicaciones a utilizar

 - VS Code
 - Postman
 - PostgreSQL (pgAdmin4)

## Inicio
Para instalar el sistema puedes hacerlo de dos formas que te muestra git:

 - Git clone
 Es elegir la carpeta o área de tu equipo donde quieras instalar el sistema, su **url** se encuentra en **<> Code**, el comando: **git clone <url_git>**
 - Descargar .ZIP
 En el mismo icono de Code, más abajo se encuentra la opción Download ZIP.

## Inicializar el sistema

Una vez descargado el sistema, debes abrir tu editor de texto, en este casi VS Code y abrir la carpeta.
Una vez en el sistema, con el comando **ctr + ñ** (Windows) abre la terminal del editor, luego realiza los siguientes pasos:

 1. Escribe **npm init** (Inicializa y descarga las dependencias).
 2. Después abre la base de datos (en este caso PostgreSQL con pgAmin4).
 - En el gestor, crearas la base de datos **users**, en el servidor de tu preferencia.
 3. Una vez establecido la base, realizaras las migraciones y seeder, con **npx sequelize-cli db:migrate** y luego **npx sequelize-cli db:seed:all**
 4. Cuando termine, puedes iniciar el sistema con **npm run dev** o también **start**.

Con ello, ya puedes utilizar el sistema, para ello se debe seguir con el siguiente punto...

## Uso del Sistema

Para verificar que funciona puedes hacerlo de dos formas, utilizando la URL: *http://localhost:**PORT**/usuarios*:

 - Inicias Postman y en la operación GET en la barra escribes la url.
 - Entras a una pestaña web y escribiendo la misma url.

Nota: **PORT**, es el puesto que agregaras en el archivo .env, solo lo remplazas.
