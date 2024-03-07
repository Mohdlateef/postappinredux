import React, {useEffect} from "react";
import { UseDispatch,useDispatch,useSelector } from "react-redux";
import { apiFailure,apiPass,apiStarted } from "../redux/action/postAction";
import axios from "axios";
import { postRequest } from "../redux/action/postAction";

const PostApp=()=>{
    let dispatch=useDispatch()
// useEffect(()=>{
//    dispatch(apiStarted());
//     axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//     .then((response)=>{
//         console.log(response.data)
//         dispatch(apiPass(response.data))})
//     .catch((err)=>{
//         console.log(err.message);
//         dispatch((apiFailure(err.message)))})
// },[])
useEffect(()=>{dispatch(postRequest())},[])
const {loading,data,err}=useSelector((state)=>state);
console.log(loading);
console.log(err);
    return(
        <div>
            <h1>Post App</h1>
            {loading===true&&(<div>loading</div>)||data.length>0&&(
           data.map((iteam)=>(
            <div>
            <h3>{iteam.title}</h3>
           <h5>{iteam.body}</h5>
           </div>))
            )}
        </div>
    )
}



export default PostApp;