### Set.prototype.add()

`**add()**` 方法用来向一个 `Set` 对象的末尾添加一个指定的值。

```js
var mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // 可以链式调用

console.log(mySet);
// Set [1, 5, "some text"]

mySet.add(5).add(1);
console.log(mySet);
// Set [1, 5, "some text"]  // 重复的值没有被添加进去
规范
```

```js
var array1 = ['a', 'b'];
var array2 = ['a', 'b'];
var array3 = ['a', 'b'];


var elements = [0, 1, 2];

//因为这些方法都会直接在原数据上进行修改，则不需要设置let
array1.push(elements);
array2.push.apply(array2, elements);
//产生新数据，使用let声明
let arr4 = array3.concat.apply(array3, elements);

//let arr = [].concat.apply([], arguments);

console.log(array1); //["a", "b", [0, 1, 2]]
console.log(array2); //["a", "b", 0, 1, 2]
console.log(array3); //["a", "b"]
console.log(arr4); //["a", "b", 0, 1, 2]

// function combine(){ 
//     let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
//     return Array.from(new Set(arr));
// } 

// var m = [1, 2, 2], n = [2,3,3]; 
// console.log(combine(m,n));  


function combine(){ 
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    return arr
} 

var m = [1, 2, 2], n = [2,3,3]; 
console.log(combine(m,n));  

function combine2(){ 
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组 
    return arr
} 

var m = [1, 2, 2], n = [2,3,3]; a = [9];
console.log(combine(m,n,a));  
```

