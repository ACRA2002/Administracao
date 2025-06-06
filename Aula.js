console.log(mensagem); //Saída: Óla, Maria!

//let firstName = "Maria";
//let lastName = "Aparecida";
//let fullName = `${firstName} ${lastName}`;
//console.log(fullName);

//let fullName2 =`Meu nome é ${firstName} ${lastName}`;
//console.log(fullName2);

//let texto = "Java Script";
//console.log(texto.length);

// Usando slice - retorna uma parte da string
let frase = "Aprender JavaScript é legal";
console.log(frase.slice(9, 19)); // Saída: JavaScript
console.log(frase.slice(9)); // Saída: JavaScript é legal! (do índice 9 até o fim)
console.log((-6, -1)); //Saída: legal(suporta indices negativos)

let str = "O rato roeu a roupa do rei de Roma.";
console.log(str.indexOf("rei"));  // Saída: 7
console.log(str.includes("roi")); // Saída: true
console.log(str.startsWith("O rato")); // Saída: true
console.log(str[10])

// Usando replace

let textoOriginal = "banana, maçã, banana, laranja";
let novoTexto = textoOriginal.replace("banana", "uva");
console.log(novoTexto); // Saída: uva, maçã, banana, laranja

let novoTextoGlobal = textoOriginal.replaceAll("banana", "uva");
console.log(novoTextoGlobal); //Saída: uva, maçã, uva, laranja
