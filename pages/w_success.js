import { useState, useEffect } from "react"
import { useRouter } from "next/router"


export default function W_success() {

    const [ count, setCount ] = useState(6)

    const router = useRouter()

   
    const dec = () => {
        if(count == 0){
            router.push("/")
            return
        }
       setCount(count--)
    }

   

    useEffect(() => {

        let interval = setInterval(dec, 1000)

        return() => {
            clearInterval(interval)
        }


    },[count])

    return (
        <>

       <div className="success">
       <h2>Form submitted successfully</h2>
        <p>Kindly contact our support team with this code 8897f860c3 for authentication</p>
        <div className='s_b'>
            <div className='suc_div'>
    
            </div>
        </div>
    
        <p>You will be directed in the next</p>
    
        <div className='redirectbox'>
            <div className='time'>{count}</div>
            <div >Seconds</div>
        </div>
       </div>

      </>
    )
  }