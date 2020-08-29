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
reader.on("close", () => {
  var liner;
  liner = lines[0];
  searchReg(liner);
});

let searchReg = (url) => {
  console.log(url);
  //let result1 = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
  //let result2 = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[0];
  //
  // /^https?:\/{2,}(.*?)(?:\/|\?|#|$)/
  //let regex = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/);
  const regexp = new RegExp("(https?://([\\w-]+\\.)+[\\w-]+(/[\\w- .?%&=]*)?)");
  let regex = url.match(regexp);
  //let result4 = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[3];
  //console.log(result1); // example.com
  //console.log(result2); //http://example.com/
  console.log(regex);
  console.log(url.split(/[^\w-$'&]+/));
  console.log(url.split(/[?$]/));
  console.log(decodeURI(url).split(/[\/$]/));
  //console.log(result4);
};
