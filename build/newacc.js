"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
const nome = process.argv[2];
const cpf = process.argv[3];
const nascimento = process.argv[4];
const client = {
    Nome: nome,
    CPF: cpf,
    Nascimento: nascimento,
    Saldo: 0
};
const allClients = [];
function createAccount() {
    allClients.push(client);
    fs_1.appendFile("./clientes.json", JSON.stringify(allClients, null, 4), (err) => {
        if (err) {
            console.log(err);
            return;
        }
        ;
        console.log();
        console.log("\x1b[32m%s\x1b[0m", "Cliente cadastrado com sucesso!");
        console.log();
    });
}
function ageFromDateofBirth(dateOfBirth) {
    return moment().diff(dateOfBirth, 'years');
}
const userage = ageFromDateofBirth(nascimento);
if (userage < 18) {
    console.log();
    console.log("\x1b[31m%s\x1b[0m", "Desculpe, apenas maiores de idade podem criar uma conta!");
    console.log();
}
else {
    createAccount();
}
//# sourceMappingURL=newacc.js.map