process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

//linerは行の中の列
reader.on("close", () => {
  var liner;
  liner = lines[0].split(" ");
  findOne(liner);
  console.log("終了");
});

let findOne = (param) => {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === "0") {
      console.log(i + 1);
    }
  }
};
