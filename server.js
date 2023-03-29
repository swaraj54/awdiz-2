// JavaScript Hoisting -
// Hoisting is JavaScript's default behavior of moving 
// declarations to the top.

// Hoisting is only possible with var varible.

// JavaScript only hoists declarations, not initializations.

// Imp tip - delcacre varible to the top of file


// var a ; // declaration
// a = 1 ; // initialization
// console.log(a)



































// JavaScript Closure 
// A closure is the combination of a functions bundled together
// (enclosed) with references to its surrounding state (the lexical environment).

// In other words, a closure gives you access to an outer function's scope from
//  an inner function.

// In JavaScript, closures are created every time a function is created,
//  at function creation time.



function outerFunction(){
    var b = "Hello";
    function innerFunction(){
        console.log(b)
    }
    return innerFunction;
}
var c  = outerFunction();
c();








































// useEffect - 
// The useEffect Hook allows you to perform side effects
//  in your components.

// Some examples of side effects are: fetching data,
//  directly updating the DOM, and timers.

// useEffect accepts two arguments. The second argument
//  is optional.

// useEffect(<function>, <dependency>)

// 1. useEffect(() => {
//   //Runs on every render
// });
// 2. useEffect(() => {
//   //Runs only on the first render
// }, []);
// 3. useEffect(() => {
//   //Runs on the first render
//   //And any time dependency value changes
// }, [state]);
// 4. useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [state,state]);