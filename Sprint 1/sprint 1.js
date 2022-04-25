//Ejercicio 1
const numPasos = (num) => {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
    count++;
  }
  return count;
};

console.log(numPasos(14));

//Ejercicio 2

const contraseña = (str) => {
  result = str
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/a/g, "4")
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0");
  return result;
};

console.log(contraseña("esta es una prueba"));

//Ejercicio 3

const likes = (num) => {
  if (num < 1000) {
    return num.toString();
  }
  if (num > 1000 && num < 999999) {
    let result = num / 1000;
    result = Math.trunc(result);
    return result.toString() + "k";
  }
  if (num > 1000000) {
    let result = num / 1000000;
    result = Math.trunc(result);
    return result.toString() + "M";
  }
};

console.log(likes(54000));

// ejercicio 4

let generarCodigo = (str) => {
  if (str.length === 0) {
    return "";
  }
  let palabra = str[0] + str[1];
  for (let i = 3; i < str.length - 2; i++) {
    if (str[i] === " ") {
      palabra = palabra + str[i + 1] + str[i + 2];
    }
  }
  return palabra;
};

console.log(generarCodigo(""));
