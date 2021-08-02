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

## Principales ventajas

1. No usa Selenium por lo que es muy sencillo de integrar.
2. No usa Java.
3. Está hecho con Electron, lo que le da acceso y control a una instancia de Chrome u otro navegador.
4. Está enfocado exclusivamente en hacer e2e testing.
5. Funciona con cualquier librería o framework de frontend siempre que corran en un navegador.
6. Los tests están escritos en JavaScript.
7. Es un todo en uno, por lo que no requiere la instalación de paquetes de terceros para funcionar, sin embargo se puede extender su funcionalidad con módulos adicionales.
8. Es mucho más rápido que cualquier otra alternativa existente hasta la fecha.
9. El equipo de cypress asegura que minimiza los tests flaky (tests inestables).
10. Es una herramienta Open Source.
11. Facil debugear.
12. Viene con los paquetes de node CHAI y MOCHA.
13. Puedes realizar capturas de pantalla y grabar video.

## Enlaces de interes

Sitio oficial de documentación de Cypress -> <https://www.cypress.io/>
