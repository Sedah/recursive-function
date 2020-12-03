"use strict";
//exponent.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//input number and exponent, program return the result of that 
const readline = __importStar(require("readline"));
const process = __importStar(require("process"));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
main();
function main() {
    let num = 0;
    let expo = 0;
    rl.question('Enter a number ', (answer) => {
        num = parseInt(answer);
        rl.question('Enter a exponent ', (answer) => {
            expo = parseInt(answer);
            console.log(exponent(num, expo));
            rl.close();
        });
    });
}
function exponent(num, expo) {
    if (expo == 0) {
        return 1;
    }
    //currently not handle negatiove power
    else if (expo < 0) {
        return -1;
    }
    else {
        return num * exponent(num, expo - 1);
    }
}
