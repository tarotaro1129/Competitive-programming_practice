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
  lines.push(line)
  console.log(lines);
});

//linerは行の中の列
reader.on('close', () => {
  var N = lines[0];
  for(var i = 0; i < N; i++) {
    var liner = lines[i+1].split(" ");
    console.log("hello = " + liner[0] + ", world = " + liner[1]);
  }
});