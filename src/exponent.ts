//exponent.ts


//input number and exponent, program return the result of that 


import * as readline from 'readline';
import * as process from 'process';


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

main()
function main(){
    let num: number = 0
    let expo: number = 0
    rl.question('Enter a number ', (answer) => {
        num = parseInt(answer)
        rl.question('Enter a exponent ', (answer) => {
            expo = parseInt(answer);
            console.log(exponent(num, expo));
            rl.close();
        })
      })
}

function exponent(num: number,expo: number): number {
    if (expo==0){
        return 1
    }
    //currently not handle negatiove power
    else if (expo<0){
        return -1
    }
    else {
        return num * exponent(num,expo-1)
    }    
}
