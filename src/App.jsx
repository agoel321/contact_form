
import './App.css'

function App() {
  function Submit(e){
    const formEle=document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
    const formData=new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbyPeqVkBlXCZyJZpqiPc6H1U26qJkH5ZZcQe1tmEDubWeqiTGB7IVSFIWnp23uK9tMB5g/exec",{
      method:"Post",
      body:formData
    }).then((res)=>res.json()).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })

  }
  return (
    
      <div className='App'>
        <h1>ContactForm</h1>
        <form className='form' onSubmit={(e)=>Submit(e)}>
          <div className='input-field'>
          <input className="input" placeholder="Name" name="Name" type="text" required/>
          <input className="input" placeholder="Email" name="Email" type="text" required/>
          <input className="input" placeholder="Phone" name="Phone" type="text" required/>
          <input className="input" placeholder="Message" name="Message" type="text" required/>
          <input type="submit" className='button' />
          </div>
        </form>
      </div>
     
    
  )
}

export default App
