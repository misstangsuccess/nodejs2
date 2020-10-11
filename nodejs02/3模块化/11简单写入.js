//先引入模块
const fs=require("fs")
const path=require("path")
//获取被写入文件的路径
const filePath=path.resolve(__dirname,".2text")
//简单写入
fs.writeFile(filePath,"哈哈",{flag:"a"},(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("文件快速写入成功");
})