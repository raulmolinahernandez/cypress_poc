# cypress_poc

Proof of concept on the Cypress framework

## Instalación

Si estás utilizando npm para instalar Cypress, recomiendan: Node.js 12 o 14 y superior.

**Comando Instalación:**

```[bash]
npm install cypress --save-dev
```

## Ejecutar los tests

He creado dentro del package.json dos scripts uno para ejecutar los tests y otro para abrir la interfaz de usuario de cypress.

**Comando Ejecución:**

```[bash]
yarn add cypress --dev
```

**Comando Ejecución con Script:**

```[bash]
yarn run cypress:open
```

```[bash]
yarn run cypress:run
```

## Plantilla básica de test

Para esta POC (prueba de concepto) la sintaxis de creación del nombre del fichero donde meteremos nuestras pruebas, seguira el siguiente patron: nombre_prueba.spec.js

Ejemplo plantilla:

```[bash]

describe('Descripción bloque de primera prueba', () => {

    it('Prueba 1 o primer paso', () => {
        // comandos cypress
    })

    it('Prueba 2 o segundo paso', () => {
        // comandos cypress
    });

});

// Bloques de pruebas relacionados entre si.

describe('Descripción bloque de segunda prueba', () => {

    it('Prueba 1 o primer paso', () => {
        // comandos cypress
    })

    it('Prueba 2 o segundo paso', () => {
        // comandos cypress
    });

});
```
