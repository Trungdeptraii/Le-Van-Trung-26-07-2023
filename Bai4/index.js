// Input:Cho trước 2 số a, b

// Output:Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình

document.write(`<h2>Input:Cho trước 2 số a, b<h2/>`) 
document.write(`<h2>Output:Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình<h2/>`)
document.write(`<hr/>`)

let a = 5, b = -6;
if(a * b > 0)
    document.write(` <li>Hai số a = ${a} và b = ${b} cùng dấu</li>`)
else document.write(` <li>Hai số a = ${a} và b = ${b} trái dấu</li>`)
