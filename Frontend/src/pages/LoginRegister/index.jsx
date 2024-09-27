import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function LoginRegister() {
    const {token} =useSelector((state)=>state.auth)
    const [pageType,setPageType]=useState('login')
    const handleChangePageType=()=>{
        pageType==='login'?setPageType('register'):setPageType('login')
    }
    const navigate=useNavigate()
    useEffect(()=>{
        if(token){
            navigate(-1)
        }
    },[token])
  return (
    <>
    {pageType==='login'?<Login handleChangePageType={handleChangePageType}/>:<Register handleChangePageType={handleChangePageType}/>}
    </>
  )
}
