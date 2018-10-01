/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr

    Ejemplo 8.2: Pipe Streams
*/

/// PIPING
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('a-wing.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('j-type-327.txt');

// Se lee input.txt y se agrega la data a output.txt
readerStream.pipe(writerStream);

// Salvar el pipe TODO.
// Ejericio: trate de salvar el texto en un nuevo archivo

var combinedStream = require('combined-stream');

var texto = combinedStream.create();
combinedStream.append(fs.createReadStream('a-wing.txt'));
combinedStream.append(fs.createReadStream('j-type-327.txt'));

combinedStream.pipe(fs.createWriteStream('textoCombinado.txt'));


// fin de codigo

console.log("Program Ended");
