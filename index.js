process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

//linesに行が入る。
reader.on('line', (line) => {
  console.log(line);
  lines.push(line);
  var liner;
  liner = lines[0].split(" ");
  console.log("hello = " + liner[0] + ", world = " + liner[1]);
  multiplify(liner[0], liner[1], liner[2]);
});

//linerは行の中の列
/*reader.on('close', () => {
  var liner;
  liner = lines[0].split(" ");
  console.log("hello = " + liner[0] + ", world = " + liner[1]);
  multiplify(liner[0], liner[1], liner[2]);
});*/

let multiplify = (x, y ,z) => {
  let sum = [];
  for (let i = parseInt(x); i <= parseInt(y); i++) {
    if (i % parseInt(z) === 0) {
      sum.push(i);
    }
  }
  console.log(sum.length);
} 