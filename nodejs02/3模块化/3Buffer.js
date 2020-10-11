//在内存中开辟一块干净的区域，长度固定，如果没有填充内容，则区域保存的都是0  
//打印显示的时候 显示的是十六进制数据
const buf1=Buffer.alloc(10,)
console.log(buf1);

const buf2=Buffer.alloc(10,"hello")
console.log(buf2);
console.log(buf2.toString());//将buffer数据转换成字符串

//去内存中找一个空间（这个空间可能还没有被清理干净）
const buf3=Buffer.allocUnsafe(5);
console.log(buf3);
console.log(buf3.toString());

const buf4=Buffer.from("hello world")
console.log(buf4);
console.log(buf4.toString());

buf4.forEach((item,index)=>{
  console.log(item);
})