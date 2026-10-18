import React from 'react'

function App() {
  return (
    <div>
      <div style={{display:'flex', backgroundColor:'#2F4F4F',height:'80px'}}>
      <div>
        <img style={{height:'60px', borderRadius:'100px', marginLeft:'20px', marginTop:'10px'}} src="https://th.bing.com/th/id/OIP.kPWcRMSboc3zUi94Oh3sTAHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" />
        </div>
        <div>
      <ul style={{display:'flex', gap:'50px', marginLeft:'400px', listStyle:'none', fontWeight:'700px', fontFamily:'sans-serif', color:'white', marginTop:'25px'}}>
        <li>Home</li>
        <li>About</li>
        <li>Number</li>
        <li>More</li>
      </ul>
        </div>
        <div style={{marginLeft:'270px', marginTop:'5px'}}>
          <button style={{height:'40px', width:'90px', backgroundColor:'black', color:'white', border:'none', borderRadius:'20px', marginTop:'10px'}}>Clik Me</button>
        </div>
      </div>
      <div style={{height:'550px', width:'100%',  display:'flex',}}>
        <div>
          <p style={{fontSize:'30px', width:'70%', textAlign:'center', marginTop:'60px', marginLeft:'20px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad minus debitis at Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui, ex dignissimos fuga autem delectus error aliquam, culpa aspernatur maxime quia illum atque dolorum esse earum eligendi quaerat odit expedita?mollitia hic ducimus quis unde exercitationem eius facere nobis perferendis expedita suscipit inventore, voluptates distinctio sunt dolorum vitae?</p>
        </div>
        <div>
      <img style={{height:'400px', width:'400px', borderRadius:'800px', marginTop:'60px', marginRight:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEr9qcNW4-EUKTtJDKb0wPhEpAnvUgQQ8yTezEVMjsw&s=10" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
