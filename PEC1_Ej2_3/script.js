const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const currencyEl = document.getElementById("currency");
const currency_current = document.getElementById("currency-current");

// Save selected movie index, price and currency
function setMovieData(movieIndex, moviePrice, movieCurrency) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
  localStorage.setItem("selectedCurrency", movieCurrency);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  const ticketPrice = movieSelect.value;
  total.innerText = (selectedSeatsCount * ticketPrice).toFixed(2);

  setMovieData(movieSelect.selectedIndex, movieSelect.value, currencyEl.value);
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener("change", (e) => {
  
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

function calculate(currency_old, currency_new) {
  fetch(`https://open.exchangerate-api.com/v6/latest/${currency_new}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_old];
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

function comprobar_inicio() {
  let currency_saved = localStorage.getItem("selectedCurrency");
  let preciosUSD = [10, 12, 8, 9];
  if (currency_saved == null) {
    currency_saved = "USD";
    localStorage.setItem("selectedCurrency", currency_saved);
    movieSelect.selectedIndex = 0;
  }
  Array.from(movieSelect.options).forEach((e, k) => {
    e.value = preciosUSD[k];
    e.innerText += ` (${e.value} $)`;
  });
  currencyEl.value = currency_saved;
  const currency_new = currencyEl.value;
  currency_current.innerText = currencyEl.value;
  if (currency_saved != "USD") {
    calculate("USD", currency_new);
  }

}

currencyEl.addEventListener("change", () => {
  const currency_saved = localStorage.getItem("selectedCurrency");
  currency_current.innerText;
  calculate(currency_saved, currencyEl.value);
});
// Initial count and total set
populateUI();

comprobar_inicio();

