const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function round(num) {
  return Math.round(num * 100) / 100;
}

celsius.addEventListener("input", () => {
  const c = parseFloat(celsius.value);
  if (!isNaN(c)) {
    fahrenheit.value = round((c * 9/5) + 32);
    kelvin.value = round(c + 273.15);
  } else {
    fahrenheit.value = "";
    kelvin.value = "";
  }
});

fahrenheit.addEventListener("input", () => {
  const f = parseFloat(fahrenheit.value);
  if (!isNaN(f)) {
    celsius.value = round((f - 32) * 5/9);
    kelvin.value = round(((f - 32) * 5/9) + 273.15);
  } else {
    celsius.value = "";
    kelvin.value = "";
  }
});

kelvin.addEventListener("input", () => {
  const k = parseFloat(kelvin.value);
  if (!isNaN(k)) {
    celsius.value = round(k - 273.15);
    fahrenheit.value = round((k - 273.15) * 9/5 + 32);
  } else {
    celsius.value = "";
    fahrenheit.value = "";
  }
});
