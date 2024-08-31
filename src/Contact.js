import React from 'react';


const Contact = () => {

  return (
    <form className='main-contact-form' action='https://formspree.io/f/xqkvgede' method='POST' >
     
 <h1 style={{fontSize:"5rem",textTransform:"capitalize",margin:"5rem 0rem",textAlign:'center'}}>Contact Form </h1>
      <div className="map" style={{margin:"5rem 5rem 0rem 5rem"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224611.86194683757!2d77.15425940577262!3d28.402344350684242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe4f50576c850e0f2!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1725119251364!5m2!1sen!2sin" style={{width:"100%",height:"40rem"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="grid-box-contact" style={{display:'flex',justifyContent:"center",alignItems:'center',height:'100vh',width:"100vw",flexDirection:"column"}}>
       
<div style={{backgroundColor:"#ededed",padding:"7rem",borderRadius:"1rem"}}>

<div className="username" style={{width:"40rem",height:"3rem",marginTop:"1rem"}}>
  <input type="text" style={{textTransform:"capitalize",fontSize:"1.5rem",padding:'1rem 2rem',outline:'none',cursor:"pointer",width:'100%',height:"100%",border:"none",borderRadius:"1rem",}} placeholder='Username' name='username' required/>
</div>
<div className="email" style={{width:"40rem",height:"3rem",marginTop:"1rem"}}>
<input type="email"  style={{textTransform:"capitalize",fontSize:"1.5rem",padding:'1rem 2rem',outline:'none',cursor:"pointer",width:'100%',height:"100%",border:"none",borderRadius:"1rem"}} placeholder='Email' required/>
</div>
<div className="phone" style={{width:"40rem",height:"3rem",marginTop:"1rem"}} >
  <input type="number"  style={{textTransform:"capitalize",fontSize:"1.5rem",padding:'1rem 2rem',outline:'none',cursor:"pointer",width:'100%',height:"100%",border:"none",borderRadius:"1rem"}} placeholder='Phone Number' required/>
</div>

<div className="message" style={{width:"40rem",height:"10rem",marginTop:"1rem"}}>
  <textarea name="message" id="" cols="30" rows="10"  style={{textTransform:"capitalize",fontSize:"1.5rem",padding:'1rem 2rem',outline:'none',cursor:"pointer",width:'100%',height:"100%",border:"none",borderRadius:"1rem"}} placeholder='Message Here'></textarea>
</div>

<div className="button"><button type='submit' className='btn btn-primary' style={{margin:"2rem",fontSize:"2rem"}}>Submit</button></div>
</div>

      </div>



    </form>
  )
}

export default Contact