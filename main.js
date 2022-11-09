// sintaxe do JS

//Nullish Coalescing Operator (operador para lidar com valores nulos)

// const idade = null;
// document.body.innerHTML = `Sua idade é: ${idade ?? "Nao Informado"}`;

//OBJETO
// const user = {
//   name: "Diego",
//   idade: 27,
//   adress: {
//     street: "rua numero bobo",
//     number: 155,
//   },
// };

// document.body.innerText = Object.keys(user); //todas as chaves do objeto
// document.body.innerText = Object.values(user); //todos os valores do objeto, nao identifica o objeto de ntro do objeto
// document.body.innerText = JSON.stringify(Object.values(user)); //apresente de uma forma melhor
// document.body.innerHTML = JSON.stringify(Object.entries(user)); //mostra em vetores os dados, mostra a chave e seus valores

//DESESTRUTURACAO

//const adress = user.adress;
// const { adress, idade } = user;
// const { adress, idade: age } = user; //reonmeando a variavel
// const { adress, idade: age, nickname = "Dias" } = user; //criando uma variavel e setando um valor default
// document.body.innerHTML = JSON.stringify({ adress, age, nickname });

//DESESTRUTURACAO na FUNCAO

//SEM DESTRUCTURING
// function mostrarIdade(user) {
//   return user.idade;
// }
//COM DESTRUCTURING
// function mostrarIdade({ idade }) {
//   return idade;
// }
// document.body.innerHTML = JSON.stringify(mostrarIdade(user));

//REST OPERATOR

// const { idade, ...rest } = user; //depois da virgula pega todos as propridades menos que está está da virgula

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [first, second, ...rest] = array;
// const [first, , third, ...xuxu] = array; //pula o segundo indice
// document.body.innerHTML = JSON.stringify({ first, third, xuxu });

//Short Syntax

// const name = "Vinicius";
// const age = 28;

// const user = {
//   name,
//   age,
// };

//Opitional Chaining
// const user = {
//   name: "Diego",
//   idade: 27,
//   adress: {
//     street: "rua numero bobo",
//     number: 155,
//     zip: {
//       code: 99999999,
//     },
//     // showAdress() {
//     //   return "ok";
//     // },
//   },
// };
// document.body.innerHTML = user.adress?.zip?.code ?? "Nao informado";
// document.body.innerHTML =
//   user.adress?.showAdress?.() ?? "funcao Show adress nao existe";

// const key = "idade"; //fazer  uma busca no objeto
// document.body.innerHTML = user[key];

//Metodos de Arrays
const array = [1, 2, 3, 4, 5];

//podemos imprimir o array pelo for;
//foreach

// array.forEach(console.log(array));

//Map
// Map sempre vai voltar um vetor do tamanho original.
// Só uso o map quando quero transformar meu array em um novo Array, mudando alguma nesse item
// const NovoArray = array.map((item) => {
//   //   console.log(item);
//   return item * 2;
// });

// document.body.innerText = NovoArray;

//metodos importantes: Map,filter,every,some,find,findIndex,reduce

//Filter
//só filtra, nao altera os valores

// const NovoArray = array.filter((item) => item % 2 !== 0);

// const NovoArray = array
//   .filter((item) => item % 2 !== 0)
//   .map((item) => item * 10);

//Every
//se todos os valores forem true ou false, EVERY.

// const todosSaoNumeros = array.every((item) => {
//   return typeof item == "number";
// });

//Some
//pelo menos um elemento é diferente

// const peloMenosUmnumero = array.some((item) => {
//   return typeof item !== "number";
// });

//Find
//encontra um item, sempre é o primeiro a ser encontrado da esquerda para direita

// const par = array.find((item) => item % 2 == 0);

//FindIndex
//retorna o indice daquele valor do array
// const parIndex = array.findIndex((item) => item % 2 == 0);

//Reduce
//Reduce pegar um array e criar uma nova estrutura de dados com base nesse array, criar algo novo

// document.body.innerText = parIndex;

//Promisses
//then//catch

// const SomaDoisNumero = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// };

// SomaDoisNumero(2, 5)
//   .then((soma) => {
//     document.body.innerText = soma;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch("https://api.github.com/users/vinialeixo")
//   .then((responde) => {
//     return responde.json();
//   })
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("deuu certo");
//   });

async function buscaDadosNoGit() {
  try {
    const response = await fetch("https://api.github.com/users/vinialeixo");
    const body = await response.json();

    return body.login;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("deuuuu");
  }
}

buscaDadosNoGit().then((login) => {
  console.log(login);
});
