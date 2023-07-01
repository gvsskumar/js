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

    var Manager = function(params){
        Employee.apply(this,arguments);
    }

    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.setDepartment = function (name){
        this.dept = name;
    }

    Manager.prototype.getDepartment = function (){
        return this.dept;
    }
    const manager = new Manager(1,"Surya");
    manager.setSalary(100000);
    manager.setDepartment("Frontend Developer");
    console.log(manager);
    console.log(manager.getId());
    console.log(manager.getName());
    console.log(manager.getSalary());
    console.log(manager.getDepartment());