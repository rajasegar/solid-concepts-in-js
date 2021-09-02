class BadEmployee {
  constructor(name, pos, hours) {
    this.name = name;
    this.pos = pos;
    this.hours = hours;
  }

  calculatePay() {
    return this.hours * 100;
  }

  reportHours() {
    return this.hours;
  }

  save() {
    console.log('employee added to the DB.');
  }
}


class EmployeeData {
  constructor(name, pos, hours) {
    this.name = name;
    this.pos = pos;
    this.hours = hours;
  }
}

class PayCalculator {
  constructor(employee) {
    this.employee = employee;
  }

  calculatePay() {
    return this.employee.hours * 100;
  }
}

class HourReporter {
  
  constructor(employee) {
    this.employee = employee;
  }

  reportHours() {
    return this.employee.hours;
  }
}

class EmployeeServer  {
  
  constructor(employee) {
    this.employee = employee;
  }


  save() {
    console.log(`employee ${this.employee.name} added to the DB.`);
  }
}

class Employee {
  constructor(name, pos, hours) {
    this.employee = new EmployeeData(name, pos, hours);
    this.payCalculator = new PayCalculator(this.employee);
    this.hourReporter = new HourReporter(this.employee);
    this.empServer = new EmployeeServer(this.employee);
  }
  calculatePay() {
    return this.payCalculator.calculatePay();
  }

  reportHours() {
    return this.hourReporter.reportHours();
  }

  save() {
    this.empServer.save();
    return 'success';
  }

}

const emp = new Employee('Raja', 'FE Dev', 40);
console.log(emp.calculatePay());
console.log(emp.reportHours());
console.log(emp.save());
