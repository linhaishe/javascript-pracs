- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.

[Xnip2020-06-08_19-53-46.jpg](Xnip2020-06-08_19-53-46.jpg)
so things like jQuery and Bootstrap and libraries that span the entire project that don't rely on the web page can be placed up here in the head section.

`// single line comment`

<!-- /*
Detail complex logic...
Some algorithm.... */ -->

`let price` output undefined
`const price` output error

声明变量后再使用，否则会报错。用 var 则不会报错，会有问题。尽量用 let/const

let price = 12;
showMessage(++price) //13
console.log(price) 13

showMessage(price++) //12
console.log(price) 13

price++，输出后再运算 12
++price,运算后输出 13

use inaccurate floating point numbers
let price = 1.1+1.3;
console.log(price)
//2.4000000000000004

```
let name = "Jack";
let message = `hello



${name}`;
```

在 web 页面会自动消除空格，但是在 cosolelog 页面会把空格打印出来

But it's agreed among many developers that when we want to wipe out the value of a variable, we use null instead of undefined. That way we can always differentiate between what JavaScript is doing with undefined and what developers are doing with null.

let price = 10;
price = null;

更好的是使用!== 和 ===
