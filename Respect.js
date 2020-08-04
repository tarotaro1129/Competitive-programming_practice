process.stdin.resume();
process.stdin.setEncoding("utf8");

var input_lines = [];
var output;
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  input_lines.push(parseInt(line));
});

reader.on("close", () => {
  var K = input_lines[0];
  var seq = 7 % K;
  var flag = false;
  var cnt = 1;

  while (cnt <= K) {
    if (seq == 0) {
      flag = true;
      break;
    }
    cnt++;
    seq = (((seq * 10) % K) + 7) % K;
  }

  if (flag) {
    output = cnt;
  } else {
    output = -1;
  }

  console.log(output);
});
