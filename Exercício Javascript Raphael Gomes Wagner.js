const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

// Exercicio 3

console.log(
  "3) Agora que você manipulou os dados, precisamos que desenvolva uma função que retorna os dados de uma pessoa pelo nome passado via parâmetros."
);

const exercicio3 = pessoas.filter((user) => user.name === "Gabriel Gomes");

console.log(exercicio3);

// Exercicio 4
console.log(
  "4) E então, desenvolva uma função que retorna um vetor com os nomes das pessoas (Bônus: Retornar somente o primeiro nome). "
);

const pessoascopia = pessoas;

function quebrarnome(user) {
  var tmp = user.name.split(" ");
  user.name = tmp[0];
}

pessoascopia.forEach(quebrarnome);

const exercicio4 = pessoascopia.map((user) => {
  return user.name;
});
console.log(exercicio4);

// Exercicio 5

console.log(
  "5) Desenvolva uma função que insira um id único para cada pessoa no vetor"
);

const exercicio5 = pessoas.map((user, index) => ({
  id: index + 1,
  ...user,
}));

console.log(exercicio5);

// Exercicio 6

console.log(
  "6) Desenvolva uma função que retorna os dados das pessoas para quem tem idade suficiente para tirar a primeira habilitação."
);

const exercicio6 = exercicio5.filter((user) => user.age >= 18);

console.log(exercicio6);

// Exercicio 7

console.log("7) Cria uma função que retorne a média das idades das pessoas.");

function media() {
  let total = 0;
  pessoas.forEach((number) => {
    total = total + number.age;
  });
  total = total / pessoas.length;
  console.log("Media das idades é: " + total);
}

media();
