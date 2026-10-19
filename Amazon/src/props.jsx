// import React from 'react'
// import Student from './pages/Student'

// const App = () => {
//   return (
//  <div style={{textAlign:'center',border:'12PX solid red',height:500,width:800}}>
//       <Student name="Rohit" age={19}  course="react" />
      
      
//  <div/>
   
//   )
// }

// export default App




// import React from 'react'
// import Profile from './pages/Profile'
// const App = () => {
//   return (
//     <div style={{textAlign:'center',border:'12PX solid red',height:500,width:800}}>
//     < Profile name = "Rohit"
//     image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP66xZe_6NzZqJBWm79x8S2MHyt4QklAK-9-jQ-IRAFw&s=10'
//     city = 'mohali'
    
    
//     />
    
//     <div/>
//   )
// }

// export default App





import React from 'react'
import Product from './pages/Product'
const App = () => {
  return (
    <div style={{textAlign:'center',border:'14PX solid red',height:505,width:789}}>
      <h1>Product Card</h1>
      <Product
        name = "Laptop"
        price = {90000}
        description = "A pawerful laptop for study and work."
      />
        <Product
          name = "Head Phone"
          price = {1100}
          description = "comfartable headphone whith clear sound."
        />
      <Product
        name = "Phone"
        price = {40000}
        description = "A smartphone  with excellent features."
      />
    </div>
  )
}

// export default App



// import React from 'react'
// import Employee from './pages/Employee'
// const App = () => {
//   return (
//     <div style={{textAlign:'center',border:'12PX solid red',height:500,width:800}}>
//       <h1>EMPLOYEE DETAILS</h1>
//       <Employee      
//       name = "Rohit"
//       role = "softwere engineer"
//       salary ={50000}
//       />
//        <Employee      
//       name = "Gorave"
//       role = "UI Designer"
//       salary ={30000}
//       />
//        <Employee      
//       name = "Vishal"
//       role = "web Developer"
//       salary ={35000}
//       />
      
//     </div>
//   )
// }

// export default App