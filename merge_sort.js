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
  //console.log(input_lines);
  let array = await [];
  for (let i = 0; i < 100; i++) {
    await array.push(getRandomInt(100));
  }
  await console.log(array);
  await merge_sort(array);
  await console.log(array);
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

//datas 並べ替えをする配列
function merge_sort(datas) {
  // 要素数
  const COUNT = datas.length;
  // 要素数が 1 以下の場合
  if (COUNT <= 1) {
    return;
  }

  // 中央の添字
  const CENTER = Math.floor(COUNT / 2);
  // 中央で分割した配列
  let leftData = datas.slice(0, CENTER);
  let rightData = datas.slice(CENTER);

  // 各配列のマージソート
  merge_sort(leftData);
  merge_sort(rightData);

  // 結合後の配列
  const mergedData = [];

  // 分割した配列の要素数
  let count1 = leftData.length;
  let count2 = rightData.length;

  let i = 0;
  let j = 0;

  // 両方の配列に要素がある間
  while (i < count1 && j < count2) {
    //比較する値
    let value1 = leftData[i];
    let value2 = rightData[j];

    if (value1 <= value2) {
      // value1とvalue2が等しい OR value1 が小さい場合
      mergedData.push(leftData[i]);
      i++;
    } else {
      // value2 が小さい場合
      mergedData.push(rightData[j]);
      j++;
    }
  }

  // leftDataに要素がある間
  while (i < count1) {
    mergedData.push(leftData[i]);
    i++;
  }

  // rightDataに要素がある間
  while (j < count2) {
    mergedData.push(rightData[j]);
    j++;
  }

  // 入れ替え
  for (let i = 0; i < COUNT; i++) {
    datas[i] = mergedData[i];
  }
}
