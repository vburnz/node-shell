module.exports = function(filename){
    const fs = require('fs');
    fs.readFile(`./${filename}`, (err, data) => { 
        if (err) throw err; 
        process.stdout.write(data); 
        process.stdout.write('\nprompt > ')
    })
    

}