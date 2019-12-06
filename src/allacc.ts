import { readFile } from 'fs';

function getAllAccounts(): void {

    readFile("./clientes.json", (err, data: Buffer) => {
        if (err) {
            return console.log(err);
        }
        console.log(data.toString());
    })
}

getAllAccounts();