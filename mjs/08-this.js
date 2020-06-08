// ===========truong hợp có lỗi
// let student ={
// 	name:'John',
// 	course:['php','ios','html'],
// 	showinfo:function(){
// 		this.course.forEach(function(kh){
// 			console.log(`${ this.name }study ${ kh }`);
// 		});
// 	}

// };
// ===========su dung được bằng khai báo this ở phía ngoài
// let student ={
// 	name:'John',
// 	course:['php','ios','html'],
// 	showinfo:function(){
// 		var _this =this;
// 		this.course.forEach(function(kh){
// 			console.log(`${ _this.name } study ${ kh }`);
// 		});
// 	}

// };
// ==========trường hợp 3
// let student ={
// 	name:'John1',
// 	course:['php','ios','html'],
// 	showinfo:function(){
// 		this.course.forEach(function(kh){
// 			console.log(`${ this.name } study ${ kh }`);
// 		}.bind(this));
// 	}

// };
//========== sử dụng arow function
let student ={
	name:'John1',
	course:['php','ios','html'],
	showinfo:function(){
		this.course.forEach((kh) =>{
			console.log(`${ this.name } study ${ kh }`);
		});
	}

};
student.showinfo();