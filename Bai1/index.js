document.write(`<h2>Input: Cho trước 2 số a, b<h2/>`) 
document.write(`<h2>Output: Thực hiện hoán vị 2 số không dùng biến trung gian<h2/>`)
// document.write(`<h2><h2/>`)
document.write(`<hr/>`)

let a = 5, b = 8;
let temp = a;
document.write(` <li>Hai số khi chưa hoán vị là: a = ${a}, b = ${b}</li> `);
let sum = a + b;
document.write(` <li>Tổng của 2 số a và b là: ${sum}</li>  `);
a = sum - a;
document.write(` <li>Số a sau khi hoán vị sẽ bằng: sum - a = ${sum} - ${temp} = ${a}</li>`);
b = sum - a;
document.write(` <li>Số b sau khi hoán vị sẽ bằng: sum - a = ${sum} - ${a} = ${b}</li>`);
