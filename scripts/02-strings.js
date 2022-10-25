// comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
 */

//  /* Você não pode, porém, /* aninhar comentários */ SyntaxError */

var s = new String("foo"); // Cria um objeto String
console.log(s); // Exibe no console: { '0': 'f', '1': 'o', '2': 'o'}
typeof s; // Retorna 'object'

var s1 = "2 + 2"; // Cria uma string literal
var s2 = new String("2 + 2"); // Creates um objeto String
eval(s1); // Retorna o número 4
eval(s2); // Retorna a string "2 + 2"

var minhaString = "Olá, mundo!";
var x = minhaString.length;

console.log("linha de texto 1\n\
linha de texto 2");
// "linha de texto 1
// linha de texto 2"

console.log(`linha de texto 1
linha de texto 2`);
// "linha de texto 1
// linha de texto 2"

var a = 5;
var b = 10;
console.log("Quinze é " + (a + b) + " e\nnão " + (2 * a + b) + ".");
// "Quinze é 15 e
// não 20."

var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e\nnão ${2 * a + b}.`);
// "Quinze é 15 e
// não 20.

var msPorDia = 24 * 60 * 60 * 1000; // número de milisegundos em um dia

// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPorDia * (44 * 365 + 11 + 197));

var opcoes = { year: "2-digit", month: "2-digit", day: "2-digit",
                hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
var americanDateTime = new Intl.DateTimeFormat("en-US", opcoes).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT

var precoGasolina = new Intl.NumberFormat("en-US",
                        { style: "currency", currency: "USD",
                          minimumFractionDigits: 3 });

console.log(precoGasolina.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec",
                        { style: "currency", currency: "CNY" });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五

