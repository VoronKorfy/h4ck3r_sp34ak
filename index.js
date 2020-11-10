// присваиваем текст, который нужно перевести, в переменную
var input = prompt("Введите текст на английском или русском языке, чтобы перевести его на х4к3рск1й язык");
var output = "";
for (var i = 0; i < input.length; i++) {   // заменяем английские строчные буквы на цифры
  if (input[i] === "a") {
    output += 4;
  }
  else if (input[i] === "e") {
    output += 3;
  }
  else if (input[i] === "i") {
    output += 1;
  }
  else if (input[i] === "o") {
    output += 0;
  }  // заменяем русские строчные буквы на цифры
  else if (input[i] === "а") {
    output += 4;
  }
  else if (input[i] === "е") {
    output += 3;
  }
  else if (input[i] === "и") {
    output += 1;
  }
  else if (input[i] === "о") {
    output += 0;
  }  // заменяем английские заглавные буквы на цифры
  else if (input[i] === "A") {
    output += 4;
  }
  else if (input[i] === "E") {
    output += 3;
  }
  else if (input[i] === "I") {
    output += 1;
  }
  else if (input[i] === "O") {
    output += 0;
  }  // заменяем русские заглавные буквы на цифры
  else if (input[i] === "А") {
    output += 4;
  }
  else if (input[i] === "Е") {
    output += 3;
  }
  else if (input[i] === "И") {
    output += 1;
  }
  else if (input[i] === "О") {
    output += 0;
  }
  else {
    output += input[i];
  }
}
document.write("<span><h1><p>Обычный язык:</p><p>" + input +
"</p><p>Хакерский язык:</p><p>" + output + "</p></h1></span>");
