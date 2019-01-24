// Closures Concept of JavaScript
/*var a = 10;
function outerFn(){
    var b = 20;
    var innerFn = function(){
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return innerFn;
}
function greet(Fname){
    Fname();
}
var iFn = outerFn();
greet(iFn);
*/
/*
var a=10;
function outerFn() {
    var b = 20;
    var innerFn = Function()
    {
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return innerFn;
}
function greet(Fname) {
    Fname();
}
var iFn=outerFn();
greet(iFn);
*/

/*
let name="john";
function fun() {
    alert("hi:" + name);
}
 name="doe";
fun();
*/
/*
var a=10;
function outer() {


    function inner() {
        var b = 20;
        console.log(a);
        console.log(b);
    }
    inner();

}
outer();

*/
var a=10;
function outer() {
    var b = 20;
    var inner = function()
    {
        console.log(a);
        console.log(b);
    };

    return inner;
}
var innerFn=outer();
innerFn();


