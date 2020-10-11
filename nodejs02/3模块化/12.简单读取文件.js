//先引入模块
const fs=require("fs")
const path=require("path")
//获取被写入的文件路径
const filePath=path.resolve(__dirname,"text")
//简单读取readFile
fs.readFile(filePath,(err,data)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(data);
  console.log(data.toString());
})