import { DELETE_DATA_LOADING, 
    DELETE_DATA_SUCCESS, 
    GET_DATA_FAILURE, 
    GET_DATA_LOADING, 
    GET_DATA_SUCCESS 

} from "./actionType";

const initialState = {
    isLoading: false,
    isError: false,
    todos: []
}



export const reducer = (state=initialState, {type , payload}) => {
    
 
    switch (type) {
        case GET_DATA_LOADING:
            return {...state, isLoading: true, isError: false }
        case GET_DATA_SUCCESS:
            return {...state, isLoading: false, todos: payload }   
        case GET_DATA_FAILURE:
            return {...state, isLoading: false, isError: true }
        
        
        // case DELETE_DATA_LOADING:
        //     return {...state, isLoading: true }    
        // case DELETE_DATA_SUCCESS:
        //     return {...state, isLoading: false }          
            
          
    
        default:
            return state;
    }




}






