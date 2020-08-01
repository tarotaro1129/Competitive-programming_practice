process.stdin.resume();
process.stdin.setEncoding("utf8");

var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lines = [];
//linesに行が入る。
reader.on("line", (line) => {
  lines.push(line);
});

//linerは行の中の列
reader.on("close", () => {
  judgeStatus(lines);
  console.log("終了");
});

let judgeStatus = (param) => {
  let testcaseLength = parseInt(param[0]);
  if (testcaseLength > 10 * 10 * 10 * 10 * 10) {
    return;
  }
  let ACcase = [];
  let WAcase = [];
  let TLEcase = [];
  let REcase = [];
  param.map((caseResult) => {
    if (caseResult === "AC") {
      ACcase.push(caseResult);
    } else if (caseResult === "WA") {
      WAcase.push(caseResult);
    } else if (caseResult === "TLE") {
      TLEcase.push(caseResult);
    } else if (caseResult === "RE") {
      REcase.push(caseResult);
    }
  });
  console.log(`AC × ${ACcase.length}`);
  console.log(`WA × ${WAcase.length}`);
  console.log(`TLE × ${TLEcase.length}`);
  console.log(`RE × ${REcase.length}`);
};
