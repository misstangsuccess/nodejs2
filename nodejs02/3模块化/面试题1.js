//1 2 10 5 6 8 9 3
const p1 = () => (new Promise((resolve, reject) => {
  console.log(1);//同步代码
  let p2 = new Promise((resolve, reject) => {
      console.log(2);//同步代码
      const timeOut1 = setTimeout(() => {
          console.log(3);//宏任务
          resolve(4);
      }, 0)
      resolve(5)
  })
  resolve(6);
  p2.then((arg) => {
      console.log(arg);//微任务
  })
}));

const timeOut2 = setTimeout(() => {//宏任务
  console.log(8);
  const p3 = new Promise(reject => {//同步代码
      reject(9);
  }).then(res => {//微任务
      console.log(res);
  })
}, 0)

p1().then((arg) => {
  console.log(arg);//微任务
})
console.log(10)//同步代码