// __filename

console.log('filename: ', __filename);

// __dirname

console.log('dirname: ', __dirname);

// - setTimeout(callback, milliseconds);
function printHelloWorld() {
    console.log('Hello world !!!');
}
setTimeout(printHelloWorld, 2000);


// setInterval
setInterval(printHelloWorld, 1000);