// Input:Cho trước 3 số a, b, c

// Output:Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần

document.write(`<h2>Input:Cho trước 3 số a, b, c<h2/>`) 
document.write(`<h2>Output:Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần<h2/>`)
document.write(`<hr/>`)


const a=1, b=13, c= 8;
document.write(` <li>Thứ tự 3 số đầu vào lần lượt là: a= ${a}, b= ${b}, c= ${c}</li> `);

if(a<b && a<c){
    if(b<c){
        document.write(` <li>Thứ tự các số sau khi sắp xếp là: a= ${a}, b= ${b}, c= ${c}</li> `);
    }else document.write(` <li>Thứ tự các số sau khi sắp xếp là: a= ${a}, c= ${c}, b= ${b} </li> `);
}else if(b<a && b<c){
    if(a<c){
        document.write(` <li> Thứ tự các số sau khi sắp xếp là: b= ${b}, a= ${a}, c= ${c}</li> `);
        
    }else document.write(` <li>Thứ tự các số sau khi sắp xếp là: b= ${b}, c= ${c}, a= ${a}</li> `);

}else if(c<a && c<b){
    if(b<a){
        document.write(` <li>Thứ tự các số sau khi sắp xếp là: c=${c}, b= ${b}, a= ${a}</li> `);

    }else document.write(` <li>Thứ tự các số sau khi sắp xếp là: c= ${c}, a= ${a}, b= ${b}</li> `);

}