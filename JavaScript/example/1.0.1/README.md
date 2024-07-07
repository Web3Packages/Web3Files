## 环境要求

- nodejs v20

## 项目说明

### 调用示例：

```
const fs = require("fs");
const path = require("path");

const filePath = './';
const fileName = "example@1.0.1";

const contentBuffer = fs.readFileSync(filePath + fileName + ".js"); 
const contentBufferToUtf8Str = encodeURIComponent(contentBuffer);

var code = decodeURIComponent(contentBufferToUtf8Str);


// case1: no args input, return single function
code = code + "\nreturn test1";
const returnFunction= new Function([],code);
const test1 = returnFunction();
console.log(test1("123"))



// // case2: no args input, return multi-funcitons
// code = code + "\nreturn [test1, test2]";
// const returnFunction= new Function([],code);
// const [test1, test2] = returnFunction();
// console.log(test1("123"))
// console.log(test2("345"))


// // case3: no args input, return Class
// code = code + "\nreturn Test3";
// const returnFunction= new Function([],code);
// const Test3 = returnFunction();
// const test3 = new Test3()
// console.log(test3.out("123"))


// // case4: with args input
// code = code + "\nreturn testList";
// const returnFunction= new Function(["args0", "args1"],code);
// const testList = returnFunction("tt1", ["ttt0", "ttt1"]);
// console.log(testList.t1);
```