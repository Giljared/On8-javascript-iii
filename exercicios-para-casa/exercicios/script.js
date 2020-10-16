// 1. Liste os números de 0 a 10 no console;
let listaNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
undefined

// 2. Some somente os valores ímpares de uma lista de números;
let numImpar = [1, 3, 5, 7, 9]
undefined
let somaImpar = 1 + 3 + 5 + 7 + 9
undefined

// 3. Liste a tabuada do 6 (do 1 ao 10);
//usando a estrutura de repetição:
let numero = 6;
for (let contador = 1; contador <=10; contador++){
    console.log(numero * contador);
}
VM768:3 6
VM768:3 12
VM768:3 18
VM768:3 24
VM768:3 30
VM768:3 36
VM768:3 42
VM768:3 48
VM768:3 54
VM768:3 60
undefined

// 4. Crie uma lista de notas de provas;
let listaNotas = ['nota1', 'nota2', 'nota3', 'nota4', 'nota5'];

undefined
nota1 = 5
5
nota2 = 6
6
nota3 = 7
7
nota4 = 8
8
nota5 =9
9

// 5. Some as todas as notas da lista de provas;
let notas = [5, 6, 7, 8, 9]
undefined
let somaNotas = 5 + 6 + 7 + 8 + 9
undefined
// 6. Crie uma lista de 5 objetos de itens do mercado com as propriedades nome, comprado(true ou false) e valor(com até duas casas decimais);
let itensMercado = ['leite', 'frutas', 'cereais', 'legumes', 'carnes']
undefined
leite = 2.50
2.5
frutas = 5.5
5.5
cereais = 10.7
10.7
legumes = 5.5
5.5
carnes = 50.5
50.5
50.5
itensMercado
(5) ["leite", "frutas", "cereais", "legumes", "carnes"]
valorTotal = 2.5 + 5.5 + 10.7 + 5.5 + 50.5
74.7

itensMercado[0]
"leite"
itensMercado["length"]
5


// 7. Filtre os itens já comprados da lista do mercado e retorne essa lista atualizada;

itensMercado[0]
"leite"
itensMercado["length"]
5

// 8. Some o total dos valores de itens da lista do mercado.

itensMercado
(5) ["leite", "frutas", "cereais", "legumes", "carnes"]
valorTotal = 2.5 + 5.5 + 10.7 + 5.5 + 50.5
74.7

// 9. Filtre uma lista de nomes e retorne somente os que começam com a letra 'A'
const nomes = ['Anna', 'Andressa', 'Luciana', 'Bruna', 'Amanda']

///10. Uma pessoa é representada pelo objeto `pessoa`. Essa pessoa tem a habilidade de comer. A string `>(O)<` representa uma bala. Faça com que essa pessoa consiga comer essa bala, mas pra isso, você vai precisar tirá-la da embalagem. O resultado esperado deve ser: `A NomeDaPessoa comeu a bala: O`;
const confeito = ['>(O)<'];
const pessoa = {
    nome: 'Carlos',
    comer(confeito) {
        console.log(`${this.nome} comeu o confeito: ${praSuavariavel}`);
    }
}
