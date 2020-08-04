process.stdin.resume();
process.stdin.setEncoding("utf8");

let lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
let D;
let Xs = [];
let Ys = [];
reader.on("line", (line) => {
  lines.push(line);
});

//linerは行の中の列
reader.on("close", () => {
  findDistance(lines);
  console.log("終了");
});

let findDistance = (lines) => {
  N = lines[0].split(" ")[0] - 0;
  console.log("N: " + N);
  D = lines[0].split(" ")[1] - 0;
  console.log("D: " + D);
  for (let i = 1; i <= N; i++) {
    Xs.push(lines[i].split(" ")[0] - 0);
    Ys.push(lines[i].split(" ")[1] - 0);
  }
  let Dises = [];
  for (let n = 0; n < N; n++) {
    Dises.push(Math.sqrt(Xs[n] * Xs[n] + Ys[n] * Ys[n]));
  }
  Dises.map((Dis) => {
    if (Dis <= D) {
      console.log(Dis);
    }
  });
};
