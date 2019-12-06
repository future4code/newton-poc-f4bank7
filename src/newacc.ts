import { appendFile } from 'fs';

const nome = process.argv[2];
const cpf = process.argv[3];
const nascimento = process.argv[4];

const newCliente = {
  Nome: nome,
  CPF: cpf,
  Nascimento: nascimento,
  Saldo: 0,
};

function createAccount(): void {

  appendFile("./clientes.json", JSON.stringify(newCliente, null, 4), (err) => {
    if (err) {
      console.log(err);
      return;
    };
    console.log("Cliente cadastrado com sucesso!");
  });

}

createAccount();