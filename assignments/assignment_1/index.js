function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    var Name=process.argv[process.argv.length-1];
    return Name
}

function getNameFromEnv() {
    // Write your code here
    return process.env.Name
    
}

function getNameFromReadLine() {
    // Write your code here
    const readline=require('readline');
    readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}