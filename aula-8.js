let nome = prompt("Qual e seu nome?");
let anoNasimento = prompt("Qual ano de seu nacimento?");
let  anoAtual = prompt("Ano atual");

console.log("Nome:" ,nome);
console.log("Idade:",(anoAtual -anoNasimento));
console.log("É maior de idade?" , ((anoAtual -anoNasimento) )>=18);
console.log("Idade em 20500:" , ((2050-anoNasimento)));

