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
  await insertion_sort(array);
  console.log("ソート済み");
  console.log(array);
});

function insertion_sort(array) {
  for (let i = 1; i < array.length; i++) {
    let j;
    //挿入する値をいったん変数に保存
    let tmp = array[i];
    //整列ずみのどの部分に挿入するか、整列済みの分だけ整列済みの大きい方から順にループ
    for (j = i - 1; j >= 0; j--) {
      //挿入する変数tmpが、整列済みの変数array[j]より大きい場合、そのままループから抜け出すbreak
      if (tmp > array[j]) {
        break;
      } else {
        //挿入する変数tmpが整列済みの変数array[j]より小さい場合、array[j]の添字が一個増えたところにarray[j]の値を保存。
        array[j + 1] = array[j];
      }
    }
    //breakした場合、挿入する値はarray[j+1]に
    array[j + 1] = tmp;
  }
}
