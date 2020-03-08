function berechnung() {
  let b = document.getElementById("art_ver").value;
  let a = document.getElementById("einkommenhöhe").value / b;
  let x = document.getElementById("jahr").value;

  if (a <= 9000 && x <= 1) {
    document.getElementById("ergebnis").value = 0;
  } else if (a <= 9168 && x <= 2) {
    document.getElementById("ergebnis").value = 0;
  } else if (a <= 9408 && x <= 3) {
    document.getElementById("ergebnis").value = 0;
  } else if (a <= 13996 && x <= 1) {
    let y = (a - 9000) / 10000;
    document.getElementById("ergebnis").value = (997.8 * y + 1400) * y;
  } else if (a <= 14254 && x <= 2) {
    let y = (a - 9168) / 10000;
    document.getElementById("ergebnis").value = (980.14 * y + 1400) * y;
  } else if (a <= 14532 && x <= 3) {
    let y = (a - 9408) / 10000;
    document.getElementById("ergebnis").value = (972.87 * y + 1400) * y;
  } else if (a <= 54949 && x <= 1) {
    let z = (a - 13996) / 10000;
    document.getElementById("ergebnis").value =
      (220.13 * z + 2397) * z + 948.49;
  } else if (a <= 55960 && x <= 2) {
    let z = (a - 14254) / 10000;
    document.getElementById("ergebnis").value =
      (216.16 * z + 2397) * z + 965.58;
  } else if (a <= 57051 && x <= 3) {
    let z = (a - 14532) / 10000;
    document.getElementById("ergebnis").value =
      (212.02 * z + 2397) * z + 972.79;
  } else if (a <= 260532 && x <= 1) {
    document.getElementById("ergebnis").value = a * 0.42 - 8621.75;
  } else if (a <= 265326 && x <= 2) {
    document.getElementById("ergebnis").value = a * 0.42 - 8780.9;
  } else if (a <= 270500 && x <= 3) {
    document.getElementById("ergebnis").value = a * 0.42 - 8963.74;
  } else if (a >= 260533 && x <= 1) {
    document.getElementById("ergebnis").value = a * 0.45 - 16437.7;
  } else if (a >= 265327 && x <= 2) {
    document.getElementById("ergebnis").value = a * 0.45 - 16740.68;
  } else {
    document.getElementById("ergebnis").value = a * 0.45 - 17078.74;
  }
  event.preventDefault();
}
