//=============== class ====================/
// class Student{
// 	// khoi tao
// 	// thuoo tinh
// 	constructor(code, name, age){
// 		this.code=code;
// 		this.name=name;
// 		this.age=age;
// 	}
// 	// phương thức
// 	showthongtinsv(){
// 		return this.code + " - " + this.name + " - " + this.age;
// 	}
// 	getagesv(){
// 		let date = new Date();
// 		let year =date.getFullYear();
// 		return year - this.age;
// 	}
// }
// let st = new Student("sv001","trang","1995");
// console.log(st);
// console.log(st.getagesv());

//=============== Inheritance sự kế thừa  ====================/
class Person{
	constructor(code, name, age){
		this.code=code;
		this.name=name;
		this.age=age;
	}
	showthongtinpr(){
		return this.code + " - " + this.name + " - " + this.age;
	}
	getageps(){
		let date = new Date();
		let year =date.getFullYear();
		return year - this.age;
	}
}


class Student extends Person{
	constructor(code, name, age, score){
		// this.code=code;
		// this.name=name;
		// this.age=age;
		super(code,name,age); // kế thừa
		this.score=score;
	}
	showthongtinpr(){
		super.showthongtinpr();
		return super.showthongtinpr() +" - "+ this.score; 
	}
}
let personobj = new Person("120","Person1","1995");
console.log(personobj.showthongtinpr());
let st = new Student("sv001","trang","1995",10);
console.log(st.showthongtinpr());