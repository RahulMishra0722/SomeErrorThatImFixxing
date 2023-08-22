import { Signup } from "ui";
import axios from "axios";

export default function SignUpPage (){
    return(
        <>
       <Signup onClick={async(username, password,email)=>{
         await axios.post('/api/Signup',{
            username,
            password,
            email
        })
       }}
       ></Signup>
       </>
    )

}