import { createSlice } from "@reduxjs/toolkit";
const initialState={
    list:[]
}
const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        removeAll:(state)=>{
            state.list=[]
        },
        removeItem:(state,action)=>{
            state.list=state.list.filter((e)=>{
                if(e.id==action.payload){
                    e.quantity=e.quantity-1
                    if(e.quantity>0){
                        return e
                    }
                    return false
                }
                return true
            })
        },
        deleteItem:(state,action)=>{
            state.list=state.list.filter((e)=>{
                if(e.id==action.payload){
                    return false
                }
                return true
            })
        },
        addItem:(state,action)=>{
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
export const {removeAll,removeItem,addItem,deleteItem}=cartSlice.actions
export default cartSlice.reducer