process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//linesに行が入る。
reader.on("line", (line) => {
  lines.push(line);
  console.log(lines);
});

//linerは行の中の列
reader.on("close", () => {
  var liner;
  liner = parseInt(lines[0]);
  findDog(liner);
});

let findDog = (param) => {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i <= alpha.length; i++) {
    for (let n = 0; n <= alpha.length; n++) {
      alpha.push(alpha[i] + alpha[n]);
    }
  }
  let name;
  if (param <= 1000000000000001) {
    name = alpha[param];
    console.log(name);
  } else {
    console.log("適切な番号を入力してください");
  }
};
