// thao tác vs 1 mảng
let arr=[123,'ES6', false];
// canhs gán thông thường để hiển gán giá trị

// let id=arr[0];
// let name=arr[1];
// let free=arr[2];
// sử dụng destructing
// let [id, name, free] =arr;
// console.log(id +" - "+name+" - "+free);

// thao tác với object

let objcourse={
	id:4,
	name:'ES6',
    free:false
}
let {id, name, free} =objcourse;

console.log(id +" - "+name+" - "+free);
// dối vs object vẫn sử dụng đc destructing như k giống vs mang
// sẽ gọi ra thuộc tính cùa ddoois tượng, nếu thuốc tính  tồn tại sẽ là undefined
// neu thuoc tinh k có trong object thì bạn có thể gián giá trị thuộc tính mới trong destructing