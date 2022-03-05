# Ejercicio1
## Preguntas teóricas

1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos) 
* ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.
  Las etiquetas semánticas se utilizan para indicar qué es y cuál es el significado del elemento que están definiendo.
  Mejoran la accesibilidad web, obtener un mejor posicionamiento en los buscadores, código más comprensible.

* Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.
  - Canvas
  Ofrece la posibilidad de dibujar gráficos mediante JavaScript.
  - Web Storage
  Ofrece una utilidad de almacenamiento. Puede ser en el almacenamiento local (localstorage) o durante la sesión (sessionstorage).
  - Geolocation
  Ofrece una ubicación con bastante precisión para ser utilizada en una web.
  
* Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla). 
  Las media queries. Gracias a esta técnica podemos indicar que los estilos se apliquen para un determinado ancho o alto de la ventana visible (o viewport) o bien especifical el medio, como la impresora, la pantalla, etc.

* Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).
  Tipos de datos.
  No se ejecuta en los navegadores, sino que hay que transpilarlo a JavaScript.
  Acceso público o privado a los datos dentro de una clase.
  Argumentos con tipo.
  Tipo de retorno para las funciones y métodos.
  Decoradores.
  Inyección de dependencias.


1. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos) 
* Cita al menos 2 de estos preprocesadores. 
    - SASS
    - LESS
  
* Cita al menos 4 ventajas que ofrecen estos preprocesadores. 
  Estilos más avanzados.
  Lenguaje de programación para crear estilos con variables, bucles, funciones,...
  Permiten crear proyectos más complejos.
  Más fácil de mantener y actualizar.
  

  
* Explica brevemente en qué consisten los sourcemaps. 
  Son ficheros que ayudan a transformar el código fuente al código transpilado.

* Explica qué es un transpilador.
  Un transpilador es una herramienta que nos permite convertir un código fuente de un lenguaje en otro lenguaje fuente. Por ejemplo de JavaScript a TypeScript.

1. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).
* Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
  Dentro de los sistemas de control de versiones están: 
  - git
  - subversion
  Dos ejemplos de herramientas de gestión de módulos son:
  - webpack
  - parcel

* Cita y explica al menos 3 comandos de Git. 
  - add
  Añade ficheros para prepararlos para ser añadidos al respositorio. Por ejemplo:
  `git add .` 
  - clone
  Clona un repositorio completo remoto a uno local. Crea un nuevo directorio que contendrá todo el repositorio clonado.
  Por ejemplo:
  `git clone https://github.com/malegrera/PEC1.git`
  - push
  Sube los cambios pendientes al repositorio remoto desde un repositorio local. Ejemplo:
  `git push -u origin main`

  
* Cita y explica brevemente las características más definitorias de WebPack.
  Es un empaquetador de paquetes (bundler)
  Facilita el poder gestionar los ficheros de un proyecto web.
  Gestiona las dependencias del proyecto.
  Tiene un servidor de desarrollo para el preview del proyecto con live preview, es decir, que al modificar los ficheros de código cambia el preview.
  Es necesario mucha configuración, a diferencia de Parcel, en webpack la configuración es más compleja.

  
