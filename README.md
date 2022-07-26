# Cifrado César

## Proyecto Bitácora: Diario de Campo

El objetivo de esta aplicación es desarrollar una herramienta de recolección de datos que permita a un investigador social en terreno realizar la compilación, selección y primera categorización de sus datos de investigación a través de una platforma sencilla que permita el cifrado de dichos datos para evitar su manipulación por parte de terceros. 

### ¿Quiénes son los principales usuarios de producto?
Investigadores sociales, docentes de ciencias humanas, estudiantes en procesos de investigación y trabajos de grado.

### ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
Facilitar la labor de categorización, análisis, triangulación y conclusiones a través de un soporte plástico, amable con el usuario, que permita el cruce de datos, su manipulación, selección y organización a través de post its.

### Cómo crees que el producto que estás creando está resolviendo sus problemas.
Considero que esta herramienta facilita la visibilización de los datos de investigación y su protección teniendo en cuenta que dentro del trabajo de campo la información se encuentra expuesta a manipulación por agentes distintos del equipo investigador, situación que impide garantizar su objetividad y veracidad.


## Modo de uso

### Introducción a la aplicación: Cómo ejecutar la aplicación:

La presente aplicación se encuentra en su fase de desarrollo inicial, en esta primera etapa se dió prioridad al desarrollo del proceso de cifrado y descifrado de los datos de investigación, además del almacenamiento de los mismos a través de las tarjetas post it y la comprensión y gestión de las versiones de la aplicación a través de Github.

Para esta finalidad, en el área central de la página se brinda al usuario un formulario que permite consignar el dato de investigación reportando su fecha y una descripción sobre la información precisa a recopilar, una vez consignado el texto, se pide al usuario la selección del número de desplazamiento y la función a realizar: cifrado o descifrado. Posteriormente, aparecerá el texto cifrado o descrifrado y el usuario podrá guardarlo a través de un botón que enviará el texto al panel derecho de la página en la zona denominada "Almacén de datos".


## Proceso de desarrollo:

El proceso de desarrollo de esta herramienta fue organizado en 3 etapas:

**ETAPA 1:**

- Desarrollo de código HTML, estilos en CSS.
    [Trabajo con prototipo de alta fidelidad a través de FIGMA]
    [- Diseño de propuesta]
     * [Página1](https://www.figma.com/proto/LIjRGNfF8MaWaju6fUZsYg/Untitled?node-id=0%3A3&scaling=min-zoom&page-id=0%3A1)
     * [Página2](https://www.figma.com/proto/LIjRGNfF8MaWaju6fUZsYg/Untitled?node-id=12%3A5&scaling=min-zoom&page-id=12%3A2)
     * [Página3](https://www.figma.com/proto/LIjRGNfF8MaWaju6fUZsYg/Untitled?node-id=16%3A2&scaling=min-zoom&page-id=12%3A3&starting-point-node-id=16%3A2)
    [- Estilos CSS con selectores y manipulación de cajas]
    [- Escritura de primer código HTML semántico]
- Conceptualización:
    [- Metodología de trabajo ÁGIL]
    [- Manipulación del DOM]
    [- Manejo de versiones / Unix Shell / Bash / Uso de terminal / Git / Github / NPM / SSH KEY ] 
    * [Conceptualización](C:\Users\Nattalia Bravo\Documents\Javascript\CIPHER\BOG005-cipher\src\css\conceptualizacion.jpeg)

**EPATA 2:**

- Desarrollo de Pseudocódigo:
    [- Uso de selectores y manipulación del DOM]
    [- Revisión de tipos de eventos]
    [- Conceptualización uso de la función For()]
    [- Conceptualización uso de la función IndexOf()]
    [- Conceptualización de la programación orientada a objetos]
    [- Impresión de resultados en html a través de InnerHTML]
    [- Revisión de código principal CIPHER encode y decode]

**ETAPA 3:**

- Desarrollo de páginas HTML 2 y 3.
    [- Organización de soporte de análisis y categorización]
    [- Hacker edition]


## Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### Objetivos alcanzados

- [ ] **Uso de HTML semántico**

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**

- [ ] **Tipos de datos primitivos**

- [ ] **Strings (cadenas de caracteres)**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

- [ ] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

## Objetivos a fortalecer

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **GitHub: Despliegue con GitHub Pages**

- [ ] **Diseñar un producto o servicio poniendo a la usuaria en el centro**


## Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [OK] `README.md` incluye info sobre proceso y decisiones de diseño.
* [OK] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [OK] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [OK] Usa VanillaJS.
* [OK] Implementa `cipher.encode`.
* [OK] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [OK] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [OK] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [OK] Interfaz permite escribir un texto para ser cifrado.
* [OK] Interfaz muestra el resultado del cifrado correctamente.
* [OK] Interfaz permite escribir un texto para ser descifrado.
* [OK] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
