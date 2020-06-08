var el = document.getElementById('vd2');
el.style.color='red';
var coursename=" Javascript ";
var couresprice= '1.000.000 VNĐ';
// binh thuong
// el.innerHTML='<p>Coures name: '+couresprice+' <br>Coures price: '+couresprice+'</p>'
// el.innerHTML='<p>Coures name: Javascript <br>Coures price: 1.000.000 VNĐ </p>'
// viet theo kieu template string
// nội dung đẻ đc trên nhiều dòng khác nhau mà k bị báo lõi như các viết lồng biến vào  như cách thông thường
el.innerHTML=`<p>Coures name: ${coursename} 
				<br>Coures price: ${couresprice} </p>`;
// ví dụ khác khó hơn

var cv ={
	id:69,
	name:"play football",
	status:true
};
var vd3 = document.getElementById('vd3');
vd3.innerHTML=`<div id="todo-${ cv.id }">
				<i class=" ${ cv.status === true ? "hidden ": "" }glyphicon glyphicon-ok"></i>
				<span class="name">${ cv.name }</span>
			</div>`;

// lưu ý
// khai bao  = dau ``
// hien thi bien hoac bieu thuc javascritt ${}