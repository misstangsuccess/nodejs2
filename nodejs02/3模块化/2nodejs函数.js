//console.log(global);
//console.log(module);
//console.log(exports);
//1.在nodejs中，每个js都包裹了一层函数
// function fn1(){
//   console.log(arguments.callee.toString());
// }
// fn1()

//只要arguments能打印就能说明外层包裹了一层函数
//console.log(arguments);
console.log(arguments.callee.toString());

/* 外层自动包裹的函数：
    function (exports, require, module, __filename, __dirname) {

    }
    exports：指向的是暴露对象module.exports
    require: 引入
    module：module对象
    __dirname:文件夹的绝对 
    __filename：文件的绝对路径 */
console.log(__filename);//D:\notes\practice\exercise\nodejs\nodejs模块化\2nodejs函数.js
console.log(__dirname);//D:\notes\practice\exercise\nodejs\nodejs模块化