process.stdin.resume();
process.stdin.setEncoding("utf8");

let lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let x;
let arr_length;
let num_arr;
reader.on("line", (line) => {
  lines.push(line);
  x = lines[0].split(" ")[0] - 0;
  arr_length = lines[0].split(" ")[1] - 0;
  num_arr = lines[1].split(" ");
});

//linerは行の中の列
reader.on("close", () => {
  Main();
  console.log("終了");
});

function Main() {
  let ans = 0;

  if (arr_length > 0) {
    for (let i = 0; i <= x; i++) {
      let min = x - i;
      let answer = num_arr.filter((key) => {
        return parseInt(key) === min;
      });
      if (answer.length) {
        let max = x + i;
        let answer = num_arr.filter((key) => {
          return parseInt(key) === max;
        });
        if (answer.length === 0) {
          console.log(max);
          break;
        }
      } else {
        console.log(min);
        break;
      }
    }
  } else {
    console.log(x);
  }
}
