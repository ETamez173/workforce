const Employee = (type, employee, dept, office, customers, empRate) => {
    // const Employee = (type, employee) => {

    return `
    
    <section class="employee">
        
 
    <header class="employee__name">
    <h2>${employee.firstName} ${employee.lastName}<h2>
    </header>
    
        
    <div class="emp__age">
               Age ${employee.age}
    </div> 
    <br>
    
    <div class="employee__computer">
    Assigned Computer ${type.year} ${type.model}
    </div>  
    <br>
        
        
   <div class="employee__department">
   Works in the ${dept.deptName} department
   </div>
   <br>

   <div class="employee__location">
   Works in ${office.location} office
   <br>
   
   </div>
    <h2>Current Client Assignment(s)  ...</h2>
   <ol>
   
   ${
       customers.map(customer => {
           return `<li>${customer.businessName} </li>
           <br>
           <div class="cust__manager">
           - Hiring Manager is ${customer.hiringManager}
           </div>
           <br>
           <div class="cust__rate">
           - Hourly Bill Rate $${customer.rate}
           </div>              
           <br>
           <div class="cust__contrLength">
           - Contract Length in days ${customer.contractLength}
           </div>
           <br>
         
         
            `
    }).join("")
    }
    </ol>
           
     </div>

    </div>   
    <br>

    

    </section>



    
    `

}

export default Employee

{/* <div class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
    <section class="employee__department">
        Works in the IT department
    </section>
</div> */}



// ${dept.department}