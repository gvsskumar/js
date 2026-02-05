var user = {
    firstname: 'Surya',
    lastname: 'Kumar ',
    getName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var userName = function(arg1, arg2) {
    console.log(this.getName() + ' ' + arg1 + ' and ' + arg2);
};
// Call
userName.call(user,'using call method argument1', 'argument2'); 
// Apply
userName.apply(user,['using apply method argument3', 'argument4']); 
// Bind
var bindFunc = userName.bind(user); 
bindFunc("using bind method argument5","argument6")