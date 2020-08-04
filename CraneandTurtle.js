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
  assessCombination(liner);
  console.log("終了");
});

let assessCombination = (param) => {
  //Y = 2C + 4(X - C);
  //-2C = Y - 4X;
  //C = Y - 4X / 2;
  //T = X - C;
  //T + C = X;
  //T = X - (Y - 4X / 2);
  //X - T = Y - (4 * X) /2;
  const X = parseInt(param[0]);
  const Y = parseInt(param[1]);
  let C;
  let T;
  C = Y - (4 * X) / 2;
  T = X - C;
  if (1 <= X && X <= 100) {
    if (1 <= Y && Y <= 100) {
      if (T >= 0 && C >= 0) {
        console.log("Yes");
      } else {
        console.log("No");
      }
    } else {
      console.log("No");
    }
  } else {
    console.log("No");
  }
};
