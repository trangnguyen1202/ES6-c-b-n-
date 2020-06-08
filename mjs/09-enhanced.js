/*===========property value shorthand=====================*/
// cách bt
// function getCourse(name,price,free){
// 	return {
// 		name:name,
// 		price:price,
// 		free:free,
// 	}
// }
//property vale shorthand
// function getCourse(name,price,free){
// 	return {
// 		name,
// 		price,
// 		free,
// 	}
// }
// console.log(getCourse('php',12,false));
/*===========method property =====================*/
function getCourse(name,price,free){
	return {
		name,
		price,
		free,
		showtt(){
			console.log(`name : ${ name }, price: ${ price }, free :${ free} `);
		},
		showtt2(dau){
			console.log(`name : ${ name } ${dau} price: ${ price } ${dau} free :${ free} `);
		}
	}
}
var dtuongkh=getCourse('php',12,false);
dtuongkh.showtt2("_");
console.log(dtuongkh);

/*============ computed property names=====================*/
// let bootstrapSupport={
// 	"chrome":true,
// 	"coccoc":true,
// 	"ie":true,
// 	"firefox":false,
// }
// thay dổi thuộc tính
let priopete="sp_";
let bootstrapSupport={
	[priopete+"chrome"]:true,
	[priopete+"coccoc"]:true,
	[priopete+"ie"]:true,
	[priopete+"firefox"]:false,
}
console.log(bootstrapSupport);
