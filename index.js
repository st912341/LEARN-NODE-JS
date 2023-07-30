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


