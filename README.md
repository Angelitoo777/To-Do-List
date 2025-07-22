API REST de Gestión de Tareas (To-Do List)
Este proyecto es una API RESTful simple desarrollada con Node.js y Express.js para la gestión básica de tareas (To-Do List). Permite crear, listar, actualizar y eliminar tareas, utilizando un almacenamiento de datos en memoria para simplificar la configuración.

🚀 Cómo Levantar el Proyecto
Sigue estos pasos para poner en marcha la API en tu entorno local:

Clona el repositorio:

Bash

git clone git@github.com:Angelitoo777/To-Do-List.git
Instala las dependencias:

Bash

npm install
Inicia el servidor:

Bash

node app.js

El servidor se iniciará en el puerto 3000 (o el que hayas configurado). Deberías ver un mensaje en la consola indicando que la API está funcionando.

🛠️ Endpoints de la API
A continuación, se describen los endpoints disponibles y cómo interactuar con ellos usando curl. Si prefieres, puedes usar herramientas como Postman o Insomnia.

1. Crear Tarea
Descripción: Añade una nueva tarea a la lista.

Método: POST

URL: /ToDo

Body (JSON):

JSON

{
    "titulo": "Comprar víveres",
    "descripcion": "Leche, pan, huevos y café"
}
title (String): Requerido.

description (String): Opcional.

Ejemplo curl:

Bash

curl -X POST -H "Content-Type: application/json" -d '{"title": "Estudiar Node.js", "description": "Repasar Express y rutas"}' http://localhost:3000/ToDo
Respuesta Exitosa (Ejemplo):

JSON

{
    "id": "c5b7e2d9-1a3f-4e6b-8c0d-1f2e3a4b5c6d",
    "title": "Estudiar Node.js",
    "description": "Repasar Express y rutas"
}
2. Obtener Todas las Tareas
Descripción: Recupera una lista de todas las tareas existentes.

Método: GET

URL: /ToDo

Ejemplo curl:

Bash

curl http://localhost:3000/ToDo
Respuesta Exitosa (Ejemplo):

JSON

[
    {
        "id": "c5b7e2d9-1a3f-4e6b-8c0d-1f2e3a4b5c6d",
        "title": "Estudiar Node.js",
        "description": "Repasar Express y rutas"
    },
    {
        "id": "c5b7e2d9-1a3f-4e6b-8c0d-1f2e3a4b5c6e",
        "titulo": "Pagar la luz",
        "description": null
    }
]
3. Obtener Tarea por ID
Descripción: Recupera los detalles de una tarea específica.

Método: GET

URL: /ToDo/:id

Ejemplo curl:

Bash

curl http://localhost:3000/ToDo/c5b7e2d9-1a3f-4e6b-8c0d-1f2e3a4b5c6d
Respuesta Exitosa (Ejemplo):

JSON

{
    "id": "c5b7e2d9-1a3f-4e6b-8c0d-1f2e3a4b5c6d",
    "title": "Estudiar Node.js",
    "description": "Repasar Express y rutas"
}
Respuesta de Error (Tarea no encontrada):

JSON

{
    "error": "Tarea no encontrada"
}
4. Actualizar Tarea
Descripción: Modifica el título y/o la descripción de una tarea existente.

Método: PATCH

URL: /ToDO/:id

Body (JSON):

JSON

{
    "title": "Estudiar Backend Avanzado",
    "description": "Profundizar en autenticación y despliegue"
}
title (String): Opcional.

description (String): Opcional.

Ejemplo curl:

Bash

curl -X PATCH -H "Content-Type: application/json" -d '{"title": "Estudiar Backend Avanzado", "description": "Profundizar en autenticación y despliegue"}' http://localhost:3000/ToDo/1
Respuesta Exitosa (Ejemplo):

JSON

{
    "id": "c5b7e2d9-1a3f-4e6b-8c0d-1f2e3a4b5c6d",
    "title": "Estudiar Backend Avanzado",
    "description": "Profundizar en autenticación y despliegue"
}
Respuesta de Error (Tarea no encontrada):

JSON

{
    "error": "Tarea no encontrada"
}
5. Eliminar Tarea
Descripción: Elimina una tarea específica de la lista.

Método: DELETE

URL: /TodO/:id

Ejemplo curl:

Bash

curl -X DELETE http://localhost:3000/ToDo/c5b7e2d9-1a3f-4e6b-8c0d-1f2e3a4b5c6d
Respuesta Exitosa (Ejemplo):

JSON

{
    "message": "Tarea eliminada exitosamente"
}
Respuesta de Error (Tarea no encontrada):

JSON

{
    "error": "Tarea no encontrada"
}