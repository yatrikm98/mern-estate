import { createSlice } from '@reduxjs/toolkit'

const userSlice=createSlice({
name:'user',
initialState:{
    currentUser:null,
    loading:false,
    error:null
},
reducers:{
    signInstart:(state,action)=>{
        state.loading=true
    },
    signInSuccess:(state,action)=>{
        state.loading=false
        state.currentUser=action.payload
        state.error=null
    },
    signInFailure:(state,action)=>{
        state.error=action.payload
        state.loading=false
    },
    updateUserStart:(state,action)=>{
        state.loading=true
    },
    updateUserSuccess:(state,action)=>{
        state.currentUser=action.payload,
        state.loading=false,
        state.error=null
    },
    updateUserFailure:(state,action)=>{
        state.error=action.payload
        state.loading=false
    },
    deleteUserStart:(state,action)=>{
        state.loading= true
    },
    deleteUserSuccess:(state,action)=>{
        state.currentUser=null,
        state.loading=false,
        state.error=null
    },
    deleteUserFailure:(state,action)=>{
        state.error=action.payload,
        state.loading=false
    },
    signOutUserStart:(state,action)=>{
        state.loading= true
    },
    signOutUserSuccess:(state,action)=>{
        state.currentUser=null,
        state.loading=false,
        state.error=null
    },
    signOutUserFailure:(state,action)=>{
        state.error=action.payload,
        state.loading=false
    }
}
})


export const {signInFailure,signInstart,signInSuccess,
    updateUserFailure,updateUserStart,updateUserSuccess,
deleteUserFailure,deleteUserStart,deleteUserSuccess,
signOutUserFailure,signOutUserStart,signOutUserSuccess
}=userSlice.actions
export const userReducer= userSlice.reducer