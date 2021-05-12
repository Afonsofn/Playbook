// Usamos o Set para remover valores repetidos de um array

const numeros = [2, 5, 6, 8, 5, 1 ,4, 6, 2, 8, 5, 6];

const numerosSemRepeticao = [...new Set(numeros)];

console.log(numeros); 	 // Return 256814 
