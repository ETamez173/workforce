const Customer = (customer, fea) => {
    // const Employee = (type, employee) => {
// debugger
    return `
    
    <section class="customer">
        
    <header class="customer__name">
    <h1>${customer.businessName} <h1>
    </header>
         
     <br>
    
     </div>
              <h2>Past Workforce Consultants  ...</h2>
             <ol>
             
             ${
                 fea.map(employee => {
                     return `<li>Employee: ${employee.firstName} ${employee.lastName} </li>`
              }).join("")
              }
             </ol>
          
          
              
      </div>   
     
         <br></br>
   
   

    

    </section>



    
    `

}

export default Customer



