import { API_FAILURE,API_PASS,API_STARTED } from "../action/actiontypes";

let intialState={
    loading:false,
    data:[],
    err:""

}


const postReducer=(state=intialState,action)=>{
    switch(action.type){
        case API_STARTED:
            return{
            ...state, loading:true}
            case API_FAILURE:
                return(
                {
                    ...state,data:[],err:action.err,loading:false 
                });
                case API_PASS:
                    return{
                        ...state,data:action.payload,err:"",loading:false ,
                };
                default:
                    return {...state}
        
    }
}



export default postReducer;