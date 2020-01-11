// import { useComputers } from "./ComputerDataProvider.js"
import { useEmployees } from "./EmployeeDataProvider.js"
import Employee from "./Employee.js"

// import { useDepartments } from "./DepartmentDataProvider.js"
// import { useLocations } from "./LocationDataProvider.js"

import { useCustomers } from "./CustomerDataProvider.js"
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import Customer from "./Customer.js"



const contentTarget = document.querySelector(".customers")


export const CustomerList = () => {
    // debugger
    // const computers = useComputers()
    const employees = useEmployees()
    // const departments = useDepartments()
    // const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

   
    // const empContractLength = null
    // const employeeCustomers = null


const render = () => {

contentTarget.innerHTML = customers.map(customer => {

// Find this computer assigned to emplyee  - via computers object using
//  find when the id matches the foreign key in the employee called computerId 
// const type = computers.find(type => type.id === employee.computerId) 

// Find the department employee work in using departmentId 
// const dept = departments.find(dept => dept.id === employee.departmentId) 

// Find the location the emp work at using locationId
// const office = locations.find(office => office.id === employee.locationId)

// Find all customer relationships for the current employee

//Instead of listing employees and the customer they have worked for, 
//you need to display all customers and the employees that have worked for them.

//Create a CustomerList list component.
//Copy and paste the code from EmployeeList into it.
//Refactor it to show employees per customer.

// const customerRelationships = empCust.filter(ce => ce.id === employee.id)
const employeeRelationships = empCust.filter(er => er.customerId === customer.id)
// For each relationship, find the company they work at
// const foundEmployeesArray = employeeRelationships.map(re => {
const foundEmployeesArray = employeeRelationships.map(crel => {



 // const foundEmployee = employees.find(employee => employee.id === re.employeeId)
const foundEmployee = employees.find(employee => employee.id === crel.employeeId)
return foundEmployee
})




// const foundEmployeeCustomersArray = customerRelationships.map(rc => {
//     const foundEmployeeCustomer = customers.find(customer => customer.id === rc.customerId)
//     return foundEmployeeCustomer
//     })

// Get HTML representation of product
// debugger
// const html = Employee(type, employee, department)
const html = Customer(customer, foundEmployeesArray)
// const html = Employee(type, employee, dept, office, foundCustomersArray, foundEmployeeCustomersArray )


return html


}).join("")


}
render()

}

export default CustomerList
