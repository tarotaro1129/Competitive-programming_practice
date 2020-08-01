process.stdin.resume();
process.stdin.setEncoding("utf8");

var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//linesに行が入る。
reader.on("line", (line) => {
  payForItem(parseInt(line));
});

//linerは行の中の列
reader.on("close", () => {
  console.log("終了");
});

let payForItem = (yen) => {
  if (yen % 1000 === 0) {
    console.log("0");
  } else {
    let result = yen % 1000;
    result = 1000 - result;
    console.log(result);
  }
};
