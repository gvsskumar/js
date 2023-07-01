// Print Message Inner function Acces the outside Scope
function outer() {
    let str = "This OuterScope Variable";
    function inner() {
        console.log(str);
        console.log("This InnerScope ")
    }
    return inner;
}
const fun = outer();
fun();

