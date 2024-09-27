import { createSlice } from "@reduxjs/toolkit";
const initialState={
    list:[]
}
const likeSlice=createSlice({
    name:'likeSlice',
    initialState,
    reducers:{
        deleteItem:(state,action)=>{
            state.list=state.list.filter((e)=>{
                if(e.id==action.payload){
                    return false
                }
                return true
            })
        },
        add:(state,action)=>{
            let add=false
            state.list=state.list?.map((e)=>{
                if(e.id==action.payload.id){
                    e.quantity=e.quantity+1
                    add=true
                    return e
                }
                return e
            })
            if(!add){
                state.list.push({...action.payload,quantity:1})
            }
        },
    }
})
export const {add,deleteItem}=likeSlice.actions
export default likeSlice.reducer