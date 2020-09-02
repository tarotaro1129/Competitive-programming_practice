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

reader.on("close", async () => {
  console.log(input_lines);

  var crypto = require("crypto");
  var hash = crypto.createHash("sha256");

  let SimonInstruction = input_lines[0].split(" ");
  function t() {}
  console.log(t());
});
