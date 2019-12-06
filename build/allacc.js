"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function getAllAccounts() {
    fs_1.readFile("./clientes.json", (err, data) => {
        if (err) {
            return console.log(err);
        }
        console.log(data.toString());
    });
}
getAllAccounts();
//# sourceMappingURL=allacc.js.map