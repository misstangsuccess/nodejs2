//process:不需要require引入  负责进程相关的东西

console.log(process.argv);
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\notes\\practice\\exercise\\nodejs\\nodejs模块化\\4process.js'
// ]
if(process.argv.includes("-hello")){
  console.log("您好");
}else if(process.argv.includes("world")){
  console.log("世界");
}
console.log(process.argv0);//获取nodejs程序目录

//cwd返回当前node的工作目录
console.log(process.cwd());
console.log(__dirname);//当前文件夹绝对路径

//exit退出进程
let i=1;
setInterval(()=>{
  i++
  if(i>5){
    process.exit("")
  }
  console.log(i);
},100)