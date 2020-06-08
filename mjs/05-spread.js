let list_course_web=['php', 'zend','laravel'];
let list_course_mobile=['android','ios'];
// let list_coures= ['jquery','windown phone'];
/// muốn hiển thị kq như sau: 'jquery','php', 'zend','laravel','windown phone','android','ios'

// cach hien thị:
// let list_coures= ['jquery',list_course_web,'windown phone',list_course_mobile ];
// ket qua thu dc  ["jquery", Array(3), "windown phone", Array(2)]
// ien thi k theo mau
// sử dụng spread

let list_coures= ['jquery',...list_course_web,'windown phone',...list_course_mobile ];
//kq thu dược sau khi sử dụng  toán tử spread["jquery", "php", "zend", "laravel", "windown phone", "android", "ios"]
console.log(list_coures);