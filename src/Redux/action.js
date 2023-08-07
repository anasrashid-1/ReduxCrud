import axios from "axios"

import { DELETE_DATA_FAILURE, 
    DELETE_DATA_LOADING, 
    DELETE_DATA_SUCCESS, 
    GET_DATA_FAILURE, 
    GET_DATA_LOADING, 
    GET_DATA_SUCCESS, 
    POST_DATA_FAILURE, 
    POST_DATA_LOADING, 
    POST_DATA_SUCCESS 

} from "./actionType"

const baseUrL = "http://localhost:8080/todos"


export const getData = () => async (dispatch) => {
  
   
    try {

      dispatch({type:GET_DATA_LOADING })

     const res = await axios.get(baseUrL)
       console.log(res)
     dispatch({type:GET_DATA_SUCCESS , payload: res.data })

        
    } catch (error) {
        dispatch({type: GET_DATA_FAILURE })
    }

  

}


export const postData = (payload) => async (dispatch) => {
    
   
    try {
        dispatch({type: POST_DATA_LOADING  })
        
        const postData =  await axios.post(baseUrL , payload )
        
        dispatch({type: POST_DATA_SUCCESS  })
        
    } 
    catch (error) {
        dispatch({type: POST_DATA_FAILURE })
    }



}


export const updateData = (id, payload, ) =>async  (dispatch) => {

  
    try {

        await axios.patch(`${baseUrL}/${id}`  , payload)
        
    } catch (error) {
        
    }

}


export const toggleData = (id, status) => async (dispatch) => {
  
   
    try {
        await axios.patch(`${baseUrL}/${id}`  , {status : !status})
        
    } catch (error) {
        
    }



}


export const delData = (id) => async (dispatch) => {
  
   
    try {
        dispatch({type: DELETE_DATA_LOADING })

        await axios.delete(`${baseUrL}/${id}`)

        dispatch({type: DELETE_DATA_SUCCESS}) 
        
    } 
    catch (error) {
        dispatch({type: DELETE_DATA_FAILURE })
        
    }



}
