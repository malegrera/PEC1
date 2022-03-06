# Ejercicio1
## Preguntas teóricas
---
**1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)** 
* ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.  
Las etiquetas semánticas se utilizan para indicar qué es, qué utilidad tiene y cuál es el **significado** del elemento que están definiendo.  
Por ejemplo `<footer></footer>` se utiliza para especificar que ese elemento es el pie de una página web.  
Entre las múltiples ventajas que lleva el uso de estas etiquetas están:
  - **Mejorar el posicionamiento web**, ya que añade información a la página y es más comprensible para los buscadores
  - **Mejorar la accesibilidad web**. El buen uso de estas etiquetas ayuda a que la página sea más accesible.
  - **Código más comprensible**. Un código escrito con este tipo de etiquetas ayuda a mejorar la comprensión del mismo y ayuda a su mejor mantenimiento.  
---

* Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.
  - **Canvas**  
Ofrece la posibilidad de dibujar gráficos mediante JavaScript. Se prepara una zona de la página web para que sea la zona donde se podrán dibujar los gráficos. La etiqueta para delimitar la zona *canvas* (lienzo) es dentro de las etiquetas `<canvas></canvas>`.  
A esa zona se le define un tamaño, mediante una altura y una anchura. Desde JavaScript se pueden dibujar líneas y formas, cambiar el relleno de las mismas, con métodos desde JavaScript, por ejemplo: ``.moveTo(x,y)``, ``.lineTo(x,y)``, ``rect(x,y,w,h)`` y otros.
  - **Web Storage o de almacenamiento web**  
Ofrece una utilidad de almacenamiento en el navegador del cliente. Puede ser almacenamiento local ***(localstorage)*** o durante la sesión ***(sessionstorage)***. La diferencia entre uno y otro es que en el almacenamiento local los datos permanecen, mientras que en el almacenamiento de sesión los datos se pierden al cerrar la sesión del navegador. Por ejemplo:  
```
localStorage.setItem('nombre','Pilar'); --> Almacena el valor
localStorage.getItem('nombre'); --> Devuelve el valor
```
  - **Geolocation**  
Ofrece una ubicación para ser utilizada en una web mediante JavaScript, mediante una serie de métodos y propiedades. Utilizando esta API el usuario puede obtener su ubicación, como por ejemplo:  
 ``navigator.geolocation.getCurrentPosition(position)``, que devuelve la posición actual del usuario.
 ``navigator.geolocation.watchPosition(position)``, que muestra la posición y la actuliza a medida que el usuario cambie la misma.
---
* Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).  
La opción que ofrece CSS3 para este fin son las **_media queries_**. Gracias a esta técnica podemos indicar que los estilos se apliquen para un determinado ancho o alto de la ventana visible (o *viewport*), para la orientación de la misma, la resolución o bien especifica el medio, como la impresora (*print*), la pantalla (*screen*), etc.  
Ejemplo:  
```
@media screen and (min-width: 700px) and (orientation: landscape) {
   /*estilos*/
}
```
---
* Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).  
Algunas de las características de TypeScript son las siguientes:
  - Lenguaje fuertemente tipado. Es una de las características principales que tiene con respecto de JavaScript. En TypeScript se puede definir en el código el tipo de datos que van a tener las variables, las propiedades, los argumentos, definir el tipo de datos que va a retornar una función o un método, crear clases y definir objetos de esas clases. 

  - No se ejecuta directamente en los navegadores, sino que hay que transpilarlo a JavaScript, que sí es un lenguaje que puede interpretar el navegador.   

  - Acceso público o privado a los datos dentro de una clase, con los modificadores *public* y *private* (JavaScript ha añadido algo similar añadiendo *#* al inicio del nombre de la propiedad o método para indicar que es privado).  
  
  - Modificador *readonly* para indicar que una propiedad es de solo lectura.  
  
  - Interfaces. En TypeScript se pueden definir y trabajar con interfaces, de manera que podemos definir una serie de métodos y propiedades que después pueden implementar diferentes clases.

  - Decoradores. Se pueden utilizar decoradores de clases, es decir,  podemos modificar la funcionalidad de la clase.

  - Se utiliza con frameworks como *Angular*.


---
**2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)**
* Cita al menos 2 de estos preprocesadores.  
Dos de estos preprocesadores son los siguientes:
    - **SASS**
    - **LESS**
--- 
* Cita al menos 4 ventajas que ofrecen estos preprocesadores. 
Facilita el trabajo a la hora de crear estilos más avanzados y complejos, permitiendo entre otras cosas, anidar selectores.
Tienen herramientas de lenguajes de programación para crear estilos como variables, condicionales, bucles, funciones,...
Permiten usar *mixins*, que son plantillas que podemos definir y después utilizarlas en los proyectos.
Permiten crear proyectos más complejos.
Los proyectos son más fáciles de mantener y actualizar.  
--- 
* Explica brevemente en qué consisten los sourcemaps. 
Son ficheros que ayudan a transformar el código fuente al código transpilado. Permiten que el navegador también acceda al código original para ver qué linea del fichero del preprocesador genera el código CSS.
---
* Explica qué es un transpilador.
Un transpilador es una herramienta que nos permite convertir un código fuente de un lenguaje en otro lenguaje fuente. Por ejemplo de JavaScript a TypeScript.

---
**3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).**
* Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.  
Dentro de los sistemas de control de versiones están: 
  - **git**
  - **subversion**
Dos ejemplos de herramientas de gestión de módulos son:
  - **webpack**
  - **parcel**  
---
* Cita y explica al menos 3 comandos de Git. 
  - **add**  
  Añade ficheros para prepararlos para ser añadidos al respositorio.  
  Por ejemplo:  
  **`git add .`**  
  - **clone**  
  Clona un repositorio completo remoto a uno local. Crea un nuevo directorio que contendrá todo el repositorio clonado.  
  Por ejemplo:  
  **`git clone https://github.com/malegrera/PEC1.git`**
  - **push**  
  Sube los cambios pendientes al repositorio remoto desde un repositorio local.   
  Por ejemplo:  
  **`git push -u origin main`**    
---  
* Cita y explica brevemente las características más definitorias de WebPack.  
WebPack es un empaquetador de paquetes también conocido como *(bundler)*.
Facilita el poder gestionar los ficheros de un proyecto web.
Nos permite también gestionar las dependencias del proyecto.  
Tiene un servidor de desarrollo para poder visualizar el proyecto y visualizar los cambios que se produzcan, es decir, que al modificar los ficheros de código cambia la vista *(live preview)*.  
Para utilizarlo es necesario mucha configuración; a diferencia de Parcel, en WebPack la configuración es más compleja.  
---
