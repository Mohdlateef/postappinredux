
import { API_STARTED,API_FAILURE,API_PASS } from "./actiontypes";
import axios from "axios";

export const apiStarted=()=>{
    return{
        type:API_STARTED
    }
}
export const apiPass=(data)=>{
    return {
        type:API_PASS,
        payload:data,
    }
}
export const apiFailure=(err)=>{
    return{
        type:API_FAILURE,
        payload:err,
    }
}


export function postRequest (){
    return(dispatch)=>{
    dispatch(apiStarted());
  axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
  .then((response)=>{
      console.log(response.data)
     dispatch(apiPass(response.data))})
        .catch((err)=>{
             console.log(err.message);
             dispatch((apiFailure(err.message)))})
        }
}