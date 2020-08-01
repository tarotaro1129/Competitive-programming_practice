process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//linesに行が入る。
reader.on("line", (line) => {
  console.log(line);
  lines.push(line);
});

//linerは行の中の列
reader.on("close", () => {
  findChange(lines);
  console.log("終了");
});

let findChange = (param) => {
  let diff = [];
  let S = Array.from(param[0]);
  let T = Array.from(param[1]);
  console.log(S);
  console.log(T);
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) {
      diff.push(i);
    }
  }
  console.log(diff.length);
};
