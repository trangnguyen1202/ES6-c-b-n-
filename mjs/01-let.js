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
function clear_draw(){
	$('#kq').html('');
}