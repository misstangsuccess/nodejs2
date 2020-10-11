//引入自定义模块,可以直接书写路径,可以省略后缀
const add=require("./add")

//引入nodejs自有模块
const fs=require("fs")
const os=require("os")
const mem = os.freemem() / os.totalmem() * 100;
console.log(`内存占⽤用率${mem.toFixed(2)}%`);

//引入第三方模块
const download = require("download-git-repo");
download("github:misstangsuccess/test", "./test", err => {
    //console.log(err ? "error" : "success");
    console.log(err);
})
const $=require("jquery")
console.log($);
