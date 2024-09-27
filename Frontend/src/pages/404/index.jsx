import { Box, Typography } from '@mui/material'
import React from 'react'
import image from '../../assets/Scree.png' 
export default function PageNotFound() {
  return (
    <>
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      paddingTop:'20px',
      alignItems:'center'
    }}>
    <img style={{
      position:'relative',
      width:'39vw'
    }} src={image} alt="#" />
    <Typography sx={{
      color:'#435FCB',
      fontSize:'46px',
      position:'absolute'
    }}>
    یافت نشد
    </Typography>
    </Box>
    </>
  )
}
