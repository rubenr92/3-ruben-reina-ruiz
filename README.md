# Ejemplo básico de TS

---

Comandos:

Testing:

```sh
npm run test
```

Ejecuta los tests ignorando los que existan en dist/

Hello-world:

```sh
node hello-world.js
```

Baby-steps:

```sh
node baby-steps.js [lista_numeros]
```

Suma todos los numeros de la lista

Filtered-js:

```sh
node filtered-js [path] [extension]
```

Muestra los archivos que contenga el path que tengas la extension

Build:

```sh
npm run build
```

Transpila el proyecto en dist/

---
```sh
npm run build
```

Transpila el proyecto en dist/

---
```sh
npm run build
```

Transpila el proyecto en dist/

---
```sh
npm run build
```

Transpila el proyecto en dist/

---

## Debugger

en el archivo .vscode/launch.json está la configuración del debugger.

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Lanza debug",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```
