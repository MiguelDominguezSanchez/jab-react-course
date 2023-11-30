/* 
// Nunca así
let letras = ['A', 'B', 'C']
// let otrasLetras = letras
let otrasLetras = [letras]
otrasLetras[2] = 'xxx'

console.log(letras)
console.log(otrasLetras)

Array(3) [ (3) […], <1 empty slot>, "xxx" ]
​
0: Array(3) [ "A", "B", "C" ]
​​
0: "A"
​​
1: "B"
​​
2: "C"
​​
length: 3
​​
<prototype>: Array []
​
2: "xxx"
​
length: 3
​
<prototype>: Array []
*/

/*
// Así sí Spread Operator
let letras = ['A', 'B', 'C']
let otrasLetras = [...letras]
otrasLetras[2] = 'xxx'

console.log(letras)
console.log(otrasLetras)
*/

/*
// Así no. Haciendo referencia a los arrays pero si Spread Operator
let letras = ['A', 'B', 'C']
let otrasLetras = ['D', 'E']
let todas = letras + otrasLetras
let todas = [letras] + [otrasLetras]

console.log(todas) // A,B,CD,E
*/

/*
Así sí Spread Operator
let letras = ['A', 'B', 'C']
let otrasLetras = ['D', 'E']
let todas = [...letras, ...otrasLetras]

console.log(todas) // Array(5) [ "A", "B", "C", "D", "E" ]

// todas = ['A', 'B', 'C', 'D', 'E']
*/
