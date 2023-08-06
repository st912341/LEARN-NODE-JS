<<<<<<< HEAD
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
=======
class student
{
    constructor(name, roll, age , marks)
    {
        this.roll=roll;
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    display=()=>
    {
        console.log(this.name+" "+ this.roll);
    }
    setplacementAge()
    {
        console.log("eligible");
    }

}

obj1=new student('sourabh',19);
obj1.display();


>>>>>>> 1dd0e7f73cc70755e450a1326385fae62f632f4b
