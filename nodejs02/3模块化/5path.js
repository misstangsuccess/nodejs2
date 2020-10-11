//path模块主要负责处理路径需要require引入
const path=require("path")
console.log(path);

//没有参数时默认是当前文件夹所在绝对路径
const filepath=path.resolve('./test','../txt/01.js')
console.log(filepath);

//获取兄弟文件的绝对路径
const filepath1=path.resolve(__dirname,'4process.js');
console.log(filepath1);
