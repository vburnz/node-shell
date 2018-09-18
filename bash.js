// Output a protmpt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const input = data.toString().trim().split(' ');
    const cmd = input[0]; 
    if (cmd === 'pwd') {
        //go to other file and run that 
        const pwd = require('./pwd'); 
        pwd(); 
    } 
    else if (cmd === 'ls'){ 
        const ls = require('./ls'); 
        ls();
    }  
    else if (cmd === 'cat'){ 
        const cat = require('./cat'); 
        cat(input[1]); 
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ')
    }
})
;
