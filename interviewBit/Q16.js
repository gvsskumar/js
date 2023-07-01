//Design a prototypes for employee which takes id and name in during construction of object and has a salary property

var Employee = function(id,name) {
        if(!id||!name){throw new Error('Employee ID and Name is Required');}
        this.id = id;
        this.name =name;
    }

    Employee.prototype.setSalary = function (salary){
        this.salary = salary
    }

    Employee.prototype.getId = function (){
        return this.id;
    }
    Employee.prototype.getName = function (){
        return this.name
    }
    Employee.prototype.getSalary = function(){
        return this.salary
    }

const employee = new Employee(1,"Surya");
employee.setSalary(100000);
console.log(employee);
console.log(employee.getId());
console.log(employee.getName());
console.log(employee.getSalary());
