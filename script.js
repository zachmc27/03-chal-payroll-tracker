// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = [];

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
    let addMore = true;

    while (addMore) {
    let firstName = prompt(`Enter first name`);
    let lastName = prompt('Enter last name');
    let salary = prompt('Enter salary');

    let employeeData = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    };
    
    employeesArray.push(employeeData)

    addMore = confirm("Do you want to add another employee?");
  
  }
  //when click on button, queue a series of alerts asking for: first, last, salary.
  //store each group of inputs into their own object (emp1, emp2, emp3)
  //grab the objects and push into array called employeesArray
  //alert option "do you want to add another employee?" if yes repeat the steps. if no stop there.
};
employeesArray
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let allSalaries = [];
  for (let i = 0; i < 3; i++) {
    let employee = employeesArray[i];
    allSalaries.push(employee.salary);
  }
  const sum = allSalaries.reduce((total, num) => total + num, 0);
  const average = sum / allSalaries.length;
  return average
  /*
  First, loop thru array and grab salary data of each, store in new array
  add all numbers in array together, then divide by the length of array
  return the result for the average
  */
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
  return randomEmployee
  /*
   Use employeesArray[math.floor(Math.random() * employeesArray.length)]
  to get a random place in the index thus selecting random employee.
   return that employee
   */

};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
