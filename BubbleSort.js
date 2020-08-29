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
  console.log(lines);
});

//linerは行の中の列
reader.on("close", async () => {
  var liner;
  liner = parseInt(lines[0]);
  let array = await [1, 4, 3, 8, 7, 6, 2, 5];
  await bubble_sort(array);
  console.log("ソート済み");
  console.log(array);
});

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length; i < j; j--) {
      if (array[j] < array[j - 1]) {
        let tmp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = tmp;
      }
    }
  }
}
