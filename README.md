# Scripts ejercicios learnyounode

---

Comandos:

Hello-world:
---
```sh
node hello-world.js
```

Baby-steps:
---
```sh
node baby-steps.js [lista_numeros]
```

Suma todos los numeros de la lista

Filtered-js:
---
```sh
node filtered-ls.js [ruta] [extension]
```

Muestra los archivos con la extensión especificada contenidos en el directorio. 

My-first-io y my-first-async-io:
---
```sh
node my-first-io.js [archivo]
```
```sh
node my-first-async-io.js [archivo]
```

Cuentan el nº de caracteres del archivo. Debe pasarse la ruta completa.


Make-it-modular:
---
```sh
node make-it-modular.js [ruta] [extension]
```
Muestra los nombres de los archivos devueltos por la función mymodule.js (filtered-ls.js dividido en dos módulos)



Http-client y http-file-server
---
```sh
node http-file-server.js [puerto][archivo]
```
```sh
node http-client.js [direccion]
```

Primer comando: Inicia un servidor http que devuelve el archivo especificado a cualquier petición. 
Segundo comando: envia peticiones http


Http-collect
---
```sh
node http-collect.js [direccion]
```

Realiza una petición http a la direccion especificada y muestra por pantalla toda la información recibida.

Juggling-async.js
---
```sh
node juggling-async.js [direccion1][direccion2][direccion3]
```

Realiza tres peticiones http y muestra por pantalla toda la información recibida en el orden especificado.

Time-server
---
```sh
node time-server.js [puerto]
```

Inicia un servidor tcp !!! crear cliente?

Http-uppercaserer
---
```sh
node http-uppercaserer.js [puerto]
```

Inicia un servidor http. Solo acepta peticiones POST. Devuelve el contenido de la petición en mayúsculas

Http-json-api-server
---
```sh
node http-json-api-server.js [puerto][ruta]
```

Inicia un servidor http que acepta peticiones a dos rutas distintas, /api/parsetime y /api/unixtime. 



