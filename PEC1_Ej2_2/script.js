const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const msg = document.getElementById('msg');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  msg.innerText = '\u23f3 Solicitando datos...';
  
  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      msg.innerText = '';
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    })
    .catch(error => msg.innerText = error);
}

// Check negatives y and call calculate
function checkNegatives(evt) {
  if (evt.target.value < 0) {
    evt.target.value=0;
    msg.innerText = "\u26D4 No se permiten números negativos";
    setTimeout(()=>msg.innerText="",3000);
  } else calculate();
}

// Event Listener
currencyEl_one.addEventListener('change', checkNegatives);
amountEl_one.addEventListener('input', checkNegatives);
currencyEl_two.addEventListener('change', checkNegatives);
amountEl_two.addEventListener('input', checkNegatives);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});


calculate();