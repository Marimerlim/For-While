// Desafio 03 - For/While

//1 - Criar um loop que conte de 1 até 10 usando FOR
//2 - Criar um loop que conte de 10 até 1 usando WHILE
//3 - Criar um loop que conte todos os números ímpares de 1 até 100
//4- Criar um loop que conte todos os números pares de 0 a 100

console.log('---------------1-----------------------')

//1 - Criar um loop que conte de 1 até 10 usando FOR

for(let i = 1; i <= 10; i++){
     console.log(i)
}

console.log('-------------------2-------------------')

//2 - Criar um loop que conte de 10 até 1 usando WHILE

let number = 10
while(number >= 1){
    console.log(number)
    number--
}

console.log('------------------3--------------------')

//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for(let number = 1; number <= 100; number+=2){
    console.log(number)
}

console.log('----------------4----------------------')


//4- Criar um loop que conte todos os números pares de 0 a 100

for(let number = 0; number <= 100; number+=2){
    console.log(number)
}

//acho que não aprendi isso direito