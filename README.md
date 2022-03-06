# malegrera
# María del Pilar Alegre Ramos
# PEC1
* Realizado en la PEC
  
* Dificultades
  
* Mejoras realizadas
  
Para ver la ejecución de cada práctica hay que abrir el archivo index.html de cada carpeta. Se puede ver en los siguientes enlaces:
+ [PEC1_Ej2_1](PEC1_Ej2_1/index.html)
+ [PEC1_Ej2_2](PEC1_Ej2_2/index.html)
+ [PEC1_Ej2_3](PEC1_Ej2_3/index.html)

  
***
Paso a describir los cambios realizados en las diferentes actividades.

## PEC1_Ej2_1
En esta actividad he añadido el código necesario para añadir la edad y la url.
Con respecto al código original, he comprobado para cada campo si cumple el requisito de ser obligatorio y si es así se comprueba entonces si se cumplen los otros requisitos. Esto lo he hecho para evitar que si no hay nada escrito en el campo diga que es obligatorio. Si hay algo escrito entonces comprueba los demás requisitos.
Con respecto al código original, había un pequeño error, ya que aunque se comprobaba que hubiese algo escrito, el mensaje de error de que el campo es obligatorio se perdía.
En el github del autor lo corregía, pero en el momento en que uno solo estuviese relleno, ya no mostraba los demás errores de que el campo era obligatorio.
Opté por realizarlo utilizando un objeto con el nombre de propiedad del nombre del campo y como valor true o false, dependiendo de si se cumple.
```
function checkRequired(inputArr) {
    let resultado={};
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            resultado[input.id]=false;
        } else {
            showSuccess(input);
            resultado[input.id]=true;
        }
    });
    return resultado;
}
```
Para comprobar que la edad sea numérica, mayor que 0 y menor o igual que 999 he añadido la siguiente función:
```
function checkAge(input) {
    if (isNaN(input.value)) {
        showError(input, 'Must be a number');
    } else if ((input.value<0) || (input.value>=999)) {
        showError(input,'Debe ser mayor o igual que 0 y menor que 999');
    } else showSuccess(input);
}
```
Para comprobar si la url es correcta, he añadido la siguiente función:
```
function checkUrl(input) {
     const re=/^(?:(?:https?|ftp):\/\/)?[\w\-]+((\.|\/)[\w\-]+)*$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Url is not valid');
    }
}
```

***
## PEC1_Ej2_2
Añado la función comprobar() que comprueba si el valor es negativo. Si es negativo muestro un mensaje indicando que no se permiten los valores negativos, y a los 3 segundos desaparece el mensaje.
```
function comprobar(evt) {
  if (evt.target.value < 0) {
    evt.target.value=0;
    msg.innerText = "\u26D4 No se permiten números negativos";
    setTimeout(()=>msg.innerText="",3000);
  } else calculate();
}
```
Para ver el mensaje de espera mientras se reciben los datos y el error, he modificado lo siguiente dentro de la función calculate()
```
 msg.innerText = '\u23f3 Solicitando datos...';
  
  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      msg.innerText = '';
        ....
    })
    .catch(error => msg.innerText = error);
```
***
## PEC1_Ej2_3
El cambio principal ha sido la integración del ejercicio de cambios de monedas.
Inicialmente he cambiado los datos que venían en el código HTML referidos a USD y los añado de forma dinámica desde JavaScript, en la función comprobar_inicio(). Esta función la llamo cada vez que se inicia el programa. Por defecto cargo los datos de los valores de USD, pensando que si es un programa real esos datos se almacenarían en una base de datos y después se hace la conversión de divisa a la moneda que haya seleccionado el usuario.
En el localstorage añado guardar la moneda por defecto que ha seleccionado el usuario. El valor de cada película lo almaceno en el atributo value de cada option con el nombre de la película.



***