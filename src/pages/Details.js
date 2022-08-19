import React from 'react';
import axios from "axios";

import { useState,useEffect } from "react";


export function  Details(){
    

    const [person,setPersons]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/person")
            .then(res=>setPersons(res.data))
            .catch(err=>console.log("Some error occurred"))},[])

            function getRowTags(){
               
                const roww = person.map(c => <tr key ={c.id}>
                <td>{c.id}</td>
                <td>{c.firstname}</td>
                <td>{c.lastname}</td>
                
    
               
                </tr>)
                return roww
            }
            return(
                <div>
                   <table class="table table-dark table-striped" >
                   <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Fist Name </th>
                            <th scope="col">Last Nmae</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        {getRowTags()}
                    </tbody>
                    </table>
                </div>
            )
}

