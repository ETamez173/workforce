import { useComputers } from "./ComputerDataProvider.js"
import { useEmployees } from "./EmployeeDataProvider.js"
import Employee from "./Employee.js"

import { useDepartments } from "./DepartmentDataProvider.js"
import { useLocations } from "./LocationDataProvider.js"

import { useCustomers } from "./CustomerDataProvider.js"
import { useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
 



const contentTarget = document.querySelector(".employees")


export const EmployeeList = () => {
    // debugger
    const computers = useComputers()
    const employees = useEmployees()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomers()

   
    const empContractLength = null
    const employeeCustomers = null


const render = () => {

contentTarget.innerHTML = employees.map(employee => {

// Find this computer assigned to emplyee  - via computers object using
//  find when the id matches the foreign key in the employee called computerId 
const type = computers.find(type => type.id === employee.computerId) 

// Find the department employee work in using departmentId 
const dept = departments.find(dept => dept.id === employee.departmentId) 

// Find the location the emp work at using locationId
const office = locations.find(office => office.id === employee.locationId)

// Find all customer relationships for the current employee

const customerRelationships = empCust.filter(ec => ec.employeeId === employee.id)

// For each relationship, find the company they work at
const foundCustomersArray = customerRelationships.map(crel => {
const foundCustomer = customers.find(customer => customer.id === crel.customerId)
// These are attaching the rate and contractLength to the foundCustomer array
// and passing them thru to be used by employee.js
foundCustomer.rate = crel.rate
foundCustomer.contractLength = crel.contractLength
foundCustomer.hiringManager = crel.hiringManager



// debugger
return foundCustomer
})
// const billRate = foundCustomersArray.rate
// const foundEmployeeCustomersArray = customerRelationships.map(rc => {
//     const foundEmployeeCustomer = customers.find(customer => customer.id === rc.customerId)
//     return foundEmployeeCustomer
//     })

// Get HTML representation of product

// debugger     

// const html = Employee(type, employee, department)
const html = Employee(type, employee, dept, office, foundCustomersArray)
// const html = Employee(type, employee, dept, office, foundCustomersArray, foundEmployeeCustomersArray )


return html
// return ` <h1>Title</h1> ${html} `

}).join("")


}
render()

}

export default EmployeeList
