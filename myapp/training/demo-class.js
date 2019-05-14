// simple class ex 
class Emp{

    constructor(eid, ename){
        this.eid = eid;
        this.ename = ename; 
    }

    showDetails(){
        console.log("Emp id : "+this.eid +"\nEname : "+this.ename);
    }
}

var obj = new Emp(10,"Lalit");
obj.showDetails();

// inheritance 
// no overloading is supported in JS
class Manager extends Emp{
    constructor(eid,ename,no_rep){
        super(eid,ename);
        this.no_rep = no_rep;
    }

    showDetails(){
        console.log("Emp id : "+this.eid +"\nEname : "+this.ename+"\nNo of Rep : "+this.no_rep);
    }
}

var obj = new Manager(10,"Lalit",15);
obj.showDetails();

