const fs=require("fs");
const path=require("path");
const{promisify}=require("util")

//获取被写入的文件路径
const filePath=path.resolve(__dirname,"./text")

const openFile=promisify(fs.open);
const writeFile=promisify(fs.write);
const closeFile=promisify(fs.close);

const fn=async()=>{
  //await的返回值是后边等待的promise对象成功值
  const fd=await openFile(filePath,"a");
  await writeFile(fd,"头有点痛")
  await closeFile(fd)
}
fn().then(()=>{
  console.log("success");
}).catch(()=>{
  console.log("error");
})