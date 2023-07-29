document.write(`<h2>Input:Cho trước 3 số a, b, c<h2/>`) 
document.write(`<h2>Output: Tìm số lớn nhất trong 3 số và hiển thị kết quả<h2/>`)
document.write(`<hr/>`)

let a = 5, b = 3 , c = 12;
let result = (a>b) && (a>c) ? a : ( a>c) && (a>b) ? a : (b>a) && (b>c) ? b : (b>c) && (b>a) ? b : (c>a) && (c>b) ? c : (c>b) && (c>a) ? c : 'null';
document.write(` <li>Số lớn nhất trong các số  ${a}, ${b}, ${c} là ${result}</li>`);

