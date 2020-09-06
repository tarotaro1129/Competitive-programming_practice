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

let array = [2, 1, 7, 8, 3, 9, 4, 6, 5];

reader.on("close", async () => {
  //console.log(input_lines);
  await console.log(array);
  await quick_sort(0, array.length - 1);
  await console.log(array);
});

//クイックソート関数
function quick_sort(startId, endId) {
  //minからmaxの範囲からrandomな数を選ぶ関数
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let randomInt = getRandomArbitrary(startId, endId);
  //ピボットをランダムな数に指定
  let pivot = array[randomInt];
  //引数を左端、右端として変数にいれる
  let left = startId;
  let right = endId;

  //ピポットより小さい値を左側へ、大きい値を右側へ分割する
  while (true) {
    //leftの値がpivotより小さければleftを一つ右へ移動する
    while (array[left] < pivot) {
      left++;
    }
    //rightの値がpivotより小さければrightを一つ左へ移動する
    while (pivot < array[right]) {
      right--;
    }
    //leftとrightの値が同じだったら、そこでグループ分けの処理を止める。
    //rightとrightの値が同じになっていない場合、つまりグループが左右逆になっている場合、leftとrightを交換
    //交換後にleftを後ろへ、rightを前へ一つ移動する
    if (right <= left) {
      break;
    } else {
      let tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
      left++;
      right--;
    }
  }

  //左側に分割できるデータがある場合、quick_sort関数を呼び出す。
  if (startId < left - 1) {
    quick_sort(startId, left - 1);
  }
  //右側に分割できるデータがある場合、quick_sort関数を呼び出す。
  if (right + 1 < endId) {
    quick_sort(right + 1, endId);
  }
}
