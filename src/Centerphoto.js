import "./index.css"
import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Centerphoto(qwer){
    const [specificPers,setSpecificPers] = useState({Date :"",
    Gender : "",
    Id:  "",
    Location : "",
    Name: "",
    Photo: "" ,
    Time : "",
    id:""})
    const{users} = qwer
    let [searchParams] = useSearchParams();
    const getId = searchParams.get("id")
    const specificPersonAr = users.filter(user => user.Id === getId)
     
    const specificPerson = specificPersonAr[0]

    useEffect(() => {
      setSpecificPers(() => ({...specificPerson}))
      // console.log(specificPers.Photo,specificPers.Gender)
    },[specificPers,specificPerson])
    


    return(
    <div>
   


    <div> {specificPers.Gender}</div>
    <div><img className="pxar" alt="" src={specificPers.Photo}/></div>

    </div>
    )
}
export default Centerphoto