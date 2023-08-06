function a()
{
    setTimeout(() => {
        console.log("a");
    }, 3000);
}
function b()
{
    setTimeout(() => {
        console.log("b");
    }, 2500);
}
function c()
{
    setTimeout(() => {
        console.log("c");
    }, 2000);
}
function d()
{
    setTimeout(() => {
        console.log("d");
    }, 1500);
}
function e()
{
    setTimeout(() => {
        console.log("e");
    }, 1000);
}
async function  fun()
{
await a();
 await b();
await c();
await d();
await e();
}
fun();
