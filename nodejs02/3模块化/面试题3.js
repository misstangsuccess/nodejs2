//1 2 19 3 5 4 20  9 10 11 17 13 12 6 7 16 8  15 14
console.log(1); //同步代码
new Promise((res, rej) => {
    console.log(2); //同步代码
    res();
}).then(() => {
    console.log(3); //微任务
    Promise.resolve().then(() => {
        console.log(5);//微任务
        setTimeout(function () {
            console.log(6); //宏任务
            Promise.resolve().then(function () {
                console.log(7);//微任务
            });
            setTimeout(function () {
                console.log(8);//宏任务
            }, 0);
        }, 0);
    });
}).then(() => {//微任务
    console.log(4);
});

new Promise((res) => {
    console.log(19); //同步代码
    setTimeout(() => {
        console.log(20); //宏任务
    }, 0);
});
Promise.resolve().then(() => {//微任务
    setTimeout(() => {//宏任务
        Promise.resolve().then(() => {
            console.log(12);//微任务
        });
        console.log(13); //宏任务
    }, 0);
});
setTimeout(() => {
    console.log(9); //宏任务
    new Promise((res) => {
        res();//同步代码
        console.log(10);
    }).then(() => {//微任务
        console.log(11);
    });
});
setTimeout(() => {//宏任务
    setTimeout(() => {//宏任务
        setTimeout(() => {//宏任务
            Promise.resolve().then(() => {//微任务
                console.log(14);
            });
            console.log(15);//宏任务
        }, 0);
        console.log(16);//宏任务
    }, 0);
    console.log(17); //宏任务
}, 0);