//factorial.ts


//input number of factorial that you want to know and program return the result of that factorial


import * as readline from 'readline';
import * as process from 'process';


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

main()
function main(){
    let num: number = 0
    rl.question('Enter a number ', (answer) => {
        num = parseInt(answer)
        console.log(factorial(num));
        rl.close();
      });
}

function factorial(num: number): number {
    if (num==0){
        return 1
    }
    else if (num<0){
        return -1
    }
    else {
        return num * factorial(num-1)
    }    
}
