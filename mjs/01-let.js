console.log("abc");

/**********block scope*********/

//  bock for > block if > block while
// for (var i = Things.length - 1; i >= 0; i--) {
// 	if (true) {
// 		while (condition) {
// 			// statement
// 		}
// 	}
// }

/**********var*********/

// var scope =100;
// if(scope > 50){
// 	var mes =" Win";
// 	console.log(mes);
// }
// console.log(scope);
// console.log(mes);

/**********let*********/

// let scope =100;
// if(scope > 50){
// 	let mes =" Win";
// 	console.log(mes);
// }
// console.log(scope);
// console.log(mes);

// su khac nhau giua var va let
// let chỉ tồn tại trong 1 phạm vi nhất định, vd trên là vd cụ thể mes chỉ đc định nghĩa trong khối if
// phạm vi truy cập của let nhỏ hơn var
// let sd tạm thời trong 1 block scope nào đó
var ve='';
function draw_gt(){
	ve = ve + '<div class="col-md-2 hinhcn"></div>';
	$('#kq').html(ve);
}
// cách 2
// nếu k dùng let giá trị i thiển thị ra bằng giá trị cuối cùng của vòng for và nó sẽ k hiển thị đúng dl
function draw_gt2(){
	var kq = document.getElementById('kq'); 
	kq.innerHTML='';
	for (let i = 1; i <= 10; i++) {
		var thespan = document.createElement("span"); // 1 đối tượng
		thespan.innerHTML= i;
		kq.appendChild(thespan);
		thespan.onclick=function(){
			alert("Gitri " +i);
		}
	}

}
function clear_draw(){
	var kq = document.getElementById('kq'); 
	kq.innerHTML='';
}
// document.appendChild()// thêm giá trị con vào thẻ cả
// document.createElement('p') // tạo ra một thẻ html nào đó