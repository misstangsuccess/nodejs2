require("jquery")
console.log(module);
//module对象的exports对象就是模块暴露的对象
//exports引用地址指向了module.exports
exports.add=add;
module.exports={
  add,
  mins,
  do1,
}


