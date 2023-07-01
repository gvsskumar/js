//Design aclass for employee which takes id and name in during construction of object and has a salary property
//Design a class for manager which is employeeand can have department property
class Employee {
    constructor(id,name){
        if(!id||!name){throw new Error('Employee ID and Name is Required');}
        this.id = id;
        this.name =name;
    }

    setSalary(salary){
        this.salary = salary
    }

    getId(){
        return this.id;
    }
    getName(){
        return this.name
    }
    getSalary(){
        return this.salary
    }

}
// const employee = new Employee(1,"Surya");
// employee.setSalary(100000);
// console.log(employee);
// console.log(employee.getId());
// console.log(employee.getName());
// console.log(employee.getSalary());

class Department extends Employee{
    setDepartment(dept){
        this.dept = dept;
    }
    getDepartment(){
        return this.dept;
    }
}

const manager = new Department(1,"Surya");
manager.setSalary(100000);
manager.setDepartment("Frontend Developer");
console.log(manager);
console.log(manager.getId());
console.log(manager.getName());
console.log(manager.getSalary());
console.log(manager.getDepartment());