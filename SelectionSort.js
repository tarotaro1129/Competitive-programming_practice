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
  await selection_sort(array);
  console.log("ソート済み");
  console.log(array);
});

function selection_sort(array) {
  //配列の数だけループする
  for (let i = 0; i < array.length; i++) {
    //最小値を一番右の値と仮定
    let min = array[i];
    //最小値の配列の添字も保存
    let k = i;
    //配列の隣の位置から最後まで最小値との比較を繰り返す。
    for (let j = i + 1; j < array.length; j++) {
      //最小値の方が大きかったら、その値が最小値になる。
      if (min > array[j]) {
        min = array[j];
        //最小値のある添字も更新
        k = j;
      }
    }
    //現段階の最小値を仮保存
    let tmp = array[i];
    //実際の最小値を一番左へ
    array[i] = array[k];
    //現段階の最小値を交換
    array[k] = tmp;
  }
}
