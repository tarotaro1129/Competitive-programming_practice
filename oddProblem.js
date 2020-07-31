process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//linesに行が入る。
reader.on('line', (line) => {
  lines.push(line);
  console.log(lines);
});

//linerは行の中の列
reader.on('close', () => {
  var liner;
  liner = lines[1].split(" ");
  oddProblem(liner);
});

let oddProblem = (y) => {
  let odd = [];
  y.map((yes) => {
    console.log((y.indexOf(yes) + 1) % 2 !== 0);
    console.log(parseInt(yes) % 2 !== 0);
    if ( (y.indexOf(yes) + 1) % 2 !== 0 && parseInt(yes) % 2 !== 0) {
      odd.push(yes);
    }
  });
  console.log(odd);
}