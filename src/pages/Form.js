import React from 'react';
import { useState } from "react"
import { Button } from "primereact/button"
import axios from "axios"
import { useNavigate } from "react-router"


export function Form()
{

    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    
    const [firstnameError,setfirstnameError]=useState(null)
    const [lastnameError,setlastnameError]=useState(null)
   
   
   
    
    const handlefisrtnameChange=(e)=>{
        setfirstname(e.target.value)
    }
    const handlelastnameChange=(e)=>{
        setlastname(e.target.value)
    }

 
    const validatePerson=()=>{
        let isValid=true
      
        if(firstname===""||firstname.length<=5){
            isValid=false
            setfirstnameError("First Name Invalid")
        }
        if(lastname===""||lastname.length<=3)
        {
            isValid=false
            setlastnameError("last name Invalid")
        }
        return isValid
    }
    const navigate=useNavigate()
    const submitPerson=()=>{
        const person={firstname,lastname}
       
       const valid=validatePerson()
       if(!valid){
           // alert("INVALID DETAILS")
            return
        }else{
        
        axios.post("http://localhost:8080/api/person",person)
    .then(res=>{navigate("/details")})
           .catch(err=>{
               alert("Error")
           })
        }
    }

    return(
        <>
            <div><h1>FORM</h1></div>
            <div>
            <div>
                    First Name:<input type="text" onChange={(e)=>handlefisrtnameChange(e)}/>
                    <small className="p-error">{firstnameError}</small>
                </div>
                <div>
                    Last Name:<input type="text" onChange={(e)=>handlelastnameChange(e)}/>
                    <small className="p-error">{lastnameError}</small>
                </div>
               
                
                <br></br>
                
                <Button label="Submit" onClick={submitPerson}></Button>
            </div>

        </>
    )
}