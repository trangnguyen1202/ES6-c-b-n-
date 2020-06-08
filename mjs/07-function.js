function showinfo(name='a',price='10'){
	return `<b>Course name</b> :${name}, <b>price:</b> ${price} `;
}
var vd4 =document.getElementById('vd4');
vd4.innerHTML=showinfo();

//Rest params
// bai toan yeu cau tinh tong hoac tu cua 2 soos
// ta co 1 function ntn
// sau do eu ca len tog cua 4 so tro len ta phai viet nhieu function 
// su dung restprams de giai quet van de nay
// function caculate(action,x,y){
// 	let kq=0;
// 	switch (action) {
// 		case '+':
// 			// statements_1
// 			kq =x + y;
// 		break;
// 		case '-':
// 			// statements_1
// 			kq =x - y;
// 		break;
// 	}
// 	return kq;
// }
// su dung resst params
function caculate(action,...value){
	// luc nay value se la 1 mang, tuong ung voi gia tri truyen vao

	let kq=0;
	switch (action) {
		case '+':
			// statements_1
			for (let i  of value) {
				kq += i;
			}
		break;
		case '-':
			// statements_1
			for (let i  of value) {
				kq -= i;
			}
			kq +=value[0];
		break;
	}
	return kq;
}
console.log(caculate("+",2,3,4,5));

/********************arrow function**************************/
// function hien thi te va tuiooi
function fun01(name,age){
	return `fun01 Mane ${name} , age ${age}`;
}
var fun02= function(name,age){
	return `fun02 Mane ${name} , age ${age}`;
}
// arrow function vs nhieu khoi lenh
var fun03= (name,age) =>{
	return `fun03 Mane ${name} , age ${age}`;
}
// arrow function vs 1 khoi lenh
var fun04= (name,age) =>`fun04 Mane ${name} , age ${age}`;

// mot tham so
var fun05 = name =>`fun05 Mane ${name}`;
// k co tham so
var fun06 = () =>`fun06 Mane `;

// console.log(fun04('trang',25));
// console.log(fun05('trang'));
// console.log(fun06());


/********************vd arrow function**************************/

let dskhoahoc=["java","php","javascript"];
console.log(
	dskhoahoc.map( dkkh => {
		return dkkh.toUpperCase();
	})
);
let d=[1,4,2,10,8];
d.sort(
	(x,y) => x < y ? true : false 
	
);
console.log(d);