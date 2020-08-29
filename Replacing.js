process.stdin.resume();
process.stdin.setEncoding("utf8");

var input_lines = [];
var output;
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  input_lines.push(line);
});

reader.on("close", () => {
  tx = input_lines[0] - 0;
  function t(x) {
    if (x <= 1) {
      return 0;
    } else if (x % 2 === 0) {
      return t(x + 1) + x;
    } else {
      return t(x - 3) - x;
    }
  }
  console.log(t(tx));
});
