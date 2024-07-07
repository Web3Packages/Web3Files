
// case1: no args input, return single function
const test1 = function(text){
    var a = "-12";
    var b = function(bb){
        return bb;
    }
    return text+a+b("-123");
}




// // case2: no args input, return multi-functions
// const test1 = function(text){
//     var a = "-12";
//     var b = function(bb){
//         return bb;
//     }
//     return text+a+b("-123");
// }
// function test2(text){
//     return text
// }



// // case3: no args input, return Class
// class Test3{
//     out(test){
//         return test;
//     }
// }




// // case4: with args input
// const testList = {
//     "t1":`${args0} && ` + args1[0],  // args0, args1 are args from caller
//     "t2":{"tt2":"tt2"},
//     "800":{"url":"https://","text":"text"}
// }
