import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import Disp from "./gitRes";

function InpGit() {

    const [githubData, setGithubData] = useState([])
    const [githubUser, setGithubUser] = useState("ahmadmustafa783")
    const fetchData =(e)=>{
        e.preventDefault();
        
   
        axios.get(`https://api.github.com/users/${githubUser}`)

          .then((res)=>setGithubData(res.data));
        console.log(githubData)
    
      }
     



    return(
        <div>
        <form  >
        <h1>Github Api Please Enter USER Name</h1>
        <input placeholder="Enter user name" onChange={(e)=>setGithubUser(e.target.value)}></input>
        <button onClick={fetchData} >Submit</button>
  
      </form>
      <Disp
        url={githubData.avatar_url}
        name={githubData.name}
        bio={githubData.bio}
      />
    
    </div>
    )
    
}
export default InpGit