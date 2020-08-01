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
});

//linerは行の中の列
reader.on("close", () => {
  let K = lines[0].split(" ")[2];
  let A = lines[1].split(" ");
  let B = lines[2].split(" ");
  assessReadTime(A, B, K);
  console.log("終了");
});

let assessReadTime = async (N, M, K) => {
  await N.map((n) => {
    M.push(n);
  });
  await M.sort((a, b) => a - b);
  let sumBooks = [];
  let answer = 0;
  for (let i = 0; i < M.length; i++) {
    sumBooks.push(M[i]);
  }
  let realLength = [];
  sumBooks.map((a) => {
    answer += parseInt(a);
    if (answer <= K) {
      real += parseInt(a);
      realLength.push(a);
    }
  });
  console.log(realLength.length);
};
