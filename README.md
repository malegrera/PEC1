# malegrera@uoc.edu
# María del Pilar Alegre Ramos
## PEC1
## Desarrollo front-end con frameworks JavaScript
---
* **Desarrollo de la PEC**  
En el desarrollo de la práctica, en el código, he seguido utilizando el idioma inglés para el contenido que he añadido porque así estaba en el código original y en los mensajes mostrados. Así queda más homogéneo y se cumple el atributo *lang=en* para todas las páginas. 

* **Dificultades encontradas**  
El desarrollo mediante el seguimiento de los enlaces de las prácticas guiadas ha sido muy bueno y fácil de seguir, pero he encontrado algunas dificultades a lo largo de la realización de la práctica, entre ellas cito las siguientes:  
Redactar las prácticas en formato Markdown porque no lo había utilizado anteriormente con frecuencia. He instalado  la extensión de Visual Studio Code Markdown All in One, tal y como se indica en los apuntes y he podido ir viendo mejor el resultado obtenido con la opción *Print Current Document to HTML*.
Otra dificultad que he encontrado ha sido incorporar dentro de la web de la venta de entradas el sistema del cambio de divisas.

* **Comprobar el funcionamiento de cada práctica**  
  
Para ver la ejecución de cada práctica hay que abrir el archivo index.html en cada carpeta. También se puede ver el funcionamiento directamente en los siguientes enlaces de GitHub Pages:
+ [PEC1_Ej2_1](https://malegrera.github.io/PEC1/PEC1_Ej2_1)
  
+ [PEC1_Ej2_2](https://malegrera.github.io/PEC1/PEC1_Ej2_2)
  
+ [PEC1_Ej2_3](https://malegrera.github.io/PEC1/PEC1_Ej2_3)

* **Modificaciones realizadas**   
A continuación describo los cambios realizados en las diferentes actividades.

## PEC1_Ej2_1
En esta actividad he utilizado el código necesario para añadir la edad y la url.  
Con respecto al código original, he comprobado para cada campo si cumple el requisito de ser obligatorio y solo si cumple el requisito se comprueba entonces si se cumplen los otros requisitos. Esto lo he hecho para que si no hay nada escrito en el campo diga que es obligatorio y si hay algo escrito entonces vaya a comprobar los demás requisitos.  
Opté por realizar esta comprobación utilizando un objeto con el nombre de propiedad del nombre del campo y como valor true o false, dependiendo de si cumple el requisito o no. Se puede ver el resultado en el siguiente trozo de código:
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
        showError(input,'Must be greater than or equal to 0 and less than 999');
    } else showSuccess(input);
}
```
Para comprobar si la url es correcta, he añadido la siguiente función que comprueba la url con la expresión regular que se puede observar en el siguiente trozo de código:
```
function checkUrl(input) {
    const re=/^(?:(?:https?|ftp):\/\/)[\w\-]+((\.|\/)[\w\-]+)*$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Url is not valid');
    }
}
```

---
## PEC1_Ej2_2
En esta actividad he realizado las modificaciones siguientes.
Añado la función *checkNegatives()* que comprueba si el valor es negativo. Si es negativo se muestra un icono y un mensaje indicando que no se permiten los valores negativos, y a los 3 segundos desaparece el mensaje.
```
function checkNegatives(evt) {
  if (evt.target.value < 0) {
    evt.target.value=0;
    msg.innerText = "\u26D4 Negative numbers are not allowed";
    setTimeout(()=>msg.innerText="",3000);
  } else calculate();
}
```
Para ver el mensaje de espera mientras se reciben los datos y capturar y mostrar un mensaje de error, he modificado lo siguiente dentro de la función calculate():
```
 msg.innerText = '\u23f3 Requesting data...';
  
  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      msg.innerText = '';
        //....
    })
    .catch(error => msg.innerText = error);
```
---
## PEC1_Ej2_3
El cambio principal en esta actividad ha sido la integración del ejercicio de cambios de monedas.
Inicialmente he cambiado los datos que venían en el código HTML referidos a USD y los añado de forma dinámica desde JavaScript, en la función `checkStart()`. Esta función la llamo cada vez que se visita la web para comprobar si ya hay datos guardados previamente.  
Por defecto cargo los datos de los valores de USD y después se hace la conversión de divisa a la moneda que haya seleccionado el usuario, si es que previamente había alguno seleccionado.
En el localstorage guardo la moneda por defecto que ha seleccionado el usuario.  
El valor del precio de cada película lo almaceno en el atributo value de cada option correspondiente de cada película.
La función calculate queda tal y como se puede observar, y cuando calculo los nuevos precios de las películas con la nueva moneda, lo almaceno en los *values* de los *options* de cada película.
```
function calculate(currency_old, currency_new) {
  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_old}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_new];
      Array.from(movieSelect.options).forEach((e) => {
        e.innerText = e.innerText.slice(0, e.innerText.indexOf("("));
        e.value = e.value * rate;
        e.innerText += ` (${Number.parseFloat(e.value).toFixed(
          2
        )} ${currency_new})`;
      });
      currency_current.innerText = currencyEl.value;
      updateSelectedCount();
    });
}
```
En la función para comprobar si es la primera vez que se visita la página o hay ya algunos datos guardados, ccompruebo si ya hay una moneda guardada en `localStorage.getItem("selectedCurrency")` y si no es así, devuelve *null* y tomo como moneda por defecto el dólar *(USD)* y cargo los valores en los *options* de cada película.
```
function checkStart() {
  let currency_saved = localStorage.getItem("selectedCurrency");
  let preciosUSD = [10, 12, 8, 9];
  if (currency_saved == null) {
    currency_saved = "USD";
    localStorage.setItem("selectedCurrency", currency_saved);
    movieSelect.selectedIndex = 0;
  }
  Array.from(movieSelect.options).forEach((e, k) => {
    e.value = preciosUSD[k];
    e.innerText += ` (${e.value} USD)`;
  });
  currencyEl.value = currency_saved;
  const currency_new = currencyEl.value;
  currency_current.innerText = currencyEl.value;
  if (currency_saved != "USD") {
    calculate("USD", currency_new);
  } else updateSelectedCount();
}
```

---
