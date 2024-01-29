const display = document.getElementById("display-window");

function addValue(input) {
  display.value += input;  
}

function Calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearScreen() {
  display.value = "";
}
