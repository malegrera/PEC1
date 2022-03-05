# malegrera
# María del Pilar Alegre Ramos
# PEC1
* Realizado en la PEC
* Dificultades
* Mejoras realizadas
* Lo que hay que tener en cuenta a la hora de corregir/ejecutar la práctica
* Cualquier otro aspecto a destacar
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


***
## PEC1_Ej2_2


***
## PEC1_Ej2_3


***