import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addItem,removeItem } from '../../Store/Slice/CartSlice'
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Sliders from '../../Components/Sliders'
import { add } from '../../Store/Slice/LikeSlice'
export default function ProductDetails() {
  const {id}=useParams()
  const productInCart=useSelector(state=>state.cart.list).filter(e=>e?.id==id)[0]?.quantity
  const [product,setProduct]=useState()
  const dispatch=useDispatch()
  const idd=product?.attributes?.categories?.data[0]?.attributes?.name
  let result;
  if (idd === 'موبایل') {
    result = '1';
  } else if (idd === 'کیس') {
    result = '2';
  } else if (idd === 'رم') {
    result = '3';
  } else if (idd === 'کارت گرافیک') {
    result = '4';
  } else {
    result = '';
  }
  useEffect(()=>{
    (async()=>{
       try{
        const res=await fetch( process.env.REACT_APP_BASE_API+ `products/${id}?populate=*`)
        const data =await res.json()
        setProduct(data?.data)
       }catch(err){
        console.log(err)
       }
    })()
  },[id])
  return (
    <>
    <Box sx={{
      display:'flex',
    }}>
       <Stack
      sx={{
        width:'54vw',
        justifyContent: "space-between",
        margin:'40px auto',
        boxShadow:'0 0 1px 1px rgba(0,0,0,.1)',
        overflow:'hidden',
        marginLeft:'140px'
      }}
    >
   
      <Stack sx={{
        direction:'rtl',
        padding:'30px 35px',
        display:'flex',
        gap:'18px'
      }}>
          <Typography variant="body2" sx={{
            display:'flex',
            gap:'10px'
          }}> 
         
          <Box sx={{
            display:'flex',
            gap:'10px',
            opacity:'.6 '
          }}>
             <Link to={'/'}>
          خانه
          </Link>
          <Box>
            /
          </Box>
          <Link to={`/products/${result}`}>
            <p style={{
              color:"black"
            }}>
            {product?.attributes?.categories?.data[0]?.attributes?.name}
            </p>
          </Link>
          <Box>
            /
          </Box>
          </Box>
           {product?.attributes?.discrption}
           </Typography>
          <Typography sx={{
            color:'#333333',
            fontSize:'18px'
          }} variant="body2"> {product?.attributes?.discrption}</Typography>
          <Typography variant="body2" sx={{
            color:'#435FCB',
            fontSize:'21.5px',
            display:'flex',
            gap:'7px'
          }}>     
          <Box>
          {product?.attributes?.price}
          </Box>
          <Box>
          تومان
          </Box>
          
               </Typography>
          <Box sx={{
            display:'flex', 
            gap:'20px',
            alignItems:'center'
          }}>
            <Typography sx={{
              fontSize:'20px',
            }}>

            افزودن به سبد خرید :
            </Typography>
            <Box sx={{
              display:'flex'
            }}>
          <button  style={{
            border:'1px solid',
            borderLeft:'none',
            backgroundColor:'white',
            padding:'7px',
            borderRadius:'0px 200px 200px 0px',
            cursor:'pointer'
          }} disabled={productInCart?false:true} onClick={()=>dispatch(removeItem(id))} >-</button>
          { productInCart&&
          <p  style={{
            fontSize:'14px',
            border:'1px solid #777777',
            padding:'12px 12px',
          }}>{productInCart}
          </p>}
          <button style={{
            border:'1px solid',
            borderRight:'none',
            backgroundColor:'white',
            padding:'7px',
            borderRadius:'200px 0px 0px 200px',
            cursor:'pointer'
          }}  onClick={()=>dispatch(addItem(product))} >+</button>
            </Box>
          </Box>

          <Button onClick={()=>dispatch(add(product))}>
            افزودن به علاقه مندی ها
          </Button>

     <Box sx={{
      direction:'ltr',
        display:'flex',
        gap:'18px',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
        borderBottom:'.5px solid',
    }}>
    <Box sx={{
        display:'flex',
        gap:'10px'

    }}>
        <Box sx={{
            display:'flex',
            padding:'12px 0px 0px 0px',
            flexDirection:'column',
            gap:'5px',
            direction:'rtl'
        }}>
        <p style={{
            color:'#3350E3',
            fontSize:'13px'
        }}>
        ارسال هدیه
        </p>
        <p style={{
            color:'#BFBBC9',
            fontSize:'10px'
        }}>
        ارسال کالا به صورت کادویی
        </p>
        </Box>
        <Box sx={{
        }}>
    <svg style={{
        width:'35px'
    }} xmlns="http://www.w3.org/2000/svg" width="59.304" height="72.003" viewBox="0 0 59.304 72.003"><g id="svg-3811" data-name="Group 172" transform="translate(1.75 1.75)"><g id="Group_171" data-name="Group 171" transform="translate(14.207 0)"><path id="Rectangle_48" data-name="Rectangle 48" d="M6.848,0h0A6.848,6.848,0,0,1,13.7,6.848V13.7a0,0,0,0,1,0,0H6.848A6.848,6.848,0,0,1,0,6.848v0A6.848,6.848,0,0,1,6.848,0Z" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_27" data-name="Path 27" d="M-2171.967,1875.088a.894.894,0,0,0,.894.894h5.953a6.848,6.848,0,0,0,6.848-6.847h0a6.849,6.849,0,0,0-6.848-6.848h0a6.823,6.823,0,0,0-3.311.852" transform="translate(2185.663 -1862.286)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path></g><path id="Path_28" data-name="Path 28" d="M-2197.49,1904.35v19.5a9.989,9.989,0,0,0,9.99,9.989h27.364a9.989,9.989,0,0,0,9.989-9.989v-19.5" transform="translate(2201.721 -1865.338)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_29" data-name="Path 29" d="M-2202.052,1890.283v6.986a5.18,5.18,0,0,0,5.18,5.18h45.445a5.179,5.179,0,0,0,5.179-5.18v-6.986a5.179,5.179,0,0,0-5.179-5.18h-45.445A5.18,5.18,0,0,0-2202.052,1890.283Z" transform="translate(2202.052 -1863.942)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><line id="Line_10" data-name="Line 10" y2="13.027" transform="translate(27.902 46.585)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></line></g></svg>
        </Box>
    </Box>
    
    <Box sx={{
        display:'flex',
        gap:'10px'
    }}>
        <Box sx={{
            display:'flex',
            padding:'12px 0px 0px 0px',
            flexDirection:'column',
            gap:'5px',
            direction:'rtl'
        }}>
        <p style={{
            color:'#3350E3',
            fontSize:'13px'
        }}>
پشتیبانی پاسخ‌گو        
</p>
        <p style={{
            color:'#BFBBC9',
            fontSize:'10px'
        }}>
      پشتیبانی و مشاوره فروش
        </p>
        </Box>
        <Box sx={{
        }}>
            <svg style={{
        width:'35px'
    }} xmlns="http://www.w3.org/2000/svg" width="54.045" height="53.581" viewBox="0 0 54.045 53.581"><g id="svg-2790" transform="translate(1.76 1.75)"><path id="Stroke_1" data-name="Stroke 1" d="M-2378.928,1885.753c.833-1.383,5.429-6.4,8.7-6.256a4.324,4.324,0,0,1,2.548,1.366h0a44.448,44.448,0,0,1,6.5,8.8c.645,3.078-3.028,4.854-1.917,7.959a26.022,26.022,0,0,0,14.808,14.8c3.1,1.125,4.878-2.544,7.956-1.906a44.457,44.457,0,0,1,8.8,6.5h0a4.323,4.323,0,0,1,1.363,2.548c.121,3.45-5.21,8.109-6.249,8.7-2.45,1.755-5.65,1.723-9.55-.09-10.873-4.519-28.266-21.583-32.878-32.868C-2380.6,1891.422-2380.723,1888.193-2378.928,1885.753Z" transform="translate(2380.22 -1879.493)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path" d="M-2341.694,1880.3a21.005,21.005,0,0,1,18.556,18.532" transform="translate(2373.489 -1879.634)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path-2" d="M-2341.694,1891.609a11.665,11.665,0,0,1,9.224,9.224" transform="translate(2373.489 -1881.61)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path></g></svg>
        </Box>
    </Box>

    <Box sx={{
        display:'flex',
        gap:'10px'
    }}>
        <Box sx={{
            display:'flex',
            padding:'12px 0px 0px 0px',
            flexDirection:'column',
            gap:'5px',
            direction:'rtl'
        }}>
        <p style={{
            color:'#3350E3',
            fontSize:'13px'
        }}>
ضمانت بازگشت کال  
</p>
        <p style={{
            color:'#BFBBC9',
            fontSize:'10px'
        }}>
      ضمانت تا حداکثر ۷ روز
        </p>
        </Box>
        <Box sx={{
        }}>
    <svg style={{
        width:'35px'
    }} xmlns="http://www.w3.org/2000/svg" width="51.282" height="50.539" viewBox="0 0 51.282 50.539"><g id="svg-7596" data-name="Group 168" transform="translate(2.475 1.75)"><g id="Group_167" data-name="Group 167" transform="translate(0.019)"><path id="Path_19" data-name="Path 19" d="M-2251.977,1882.835h13.594a9.925,9.925,0,0,1,9.925,9.925v19.832" transform="translate(2275.496 -1882.835)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_20" data-name="Path 20" d="M-2229.071,1926.561a9.928,9.928,0,0,1-2.26,3.544,9.9,9.9,0,0,1-7.052,2.941h-13.594" transform="translate(2275.496 -1886.007)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_21" data-name="Path 21" d="M-2253.817,1931.232h-13.595a9.926,9.926,0,0,1-9.925-9.926v-19.752" transform="translate(2277.336 -1884.193)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_22" data-name="Path 22" d="M-2253.769,1882.835h-13.595a9.9,9.9,0,0,0-7.051,2.94,9.934,9.934,0,0,0-2.261,3.544" transform="translate(2277.288 -1882.835)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_23" data-name="Path 23" d="M-2245.961,1907.212l-6.526-3.463-6.526,3.463v-24.377h13.052Z" transform="translate(2276.007 -1882.835)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_24" data-name="Path 24" d="M-2232.783,1910.392l5.718,5.869v-6.072" transform="translate(2274.104 -1884.82)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path></g><line id="Line_7" data-name="Line 7" x1="5.543" y1="5.69" transform="translate(0 16.339)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></line></g></svg>
        </Box>
    </Box>

    <Box sx={{
        display:'flex',
        gap:'10px'
    }}>
        <Box sx={{
            display:'flex',
            padding:'12px 0px 0px 0px',
            flexDirection:'column',
            gap:'5px',
            direction:'rtl'
        }}>
        <p style={{
            color:'#3350E3',
            fontSize:'13px'
        }}>
ارسال سریع
</p>
        <p style={{
            color:'#BFBBC9',
            fontSize:'10px'
        }}>
            ارسال در کوتاه‌ترین زمان
        </p>
        </Box>
        <Box sx={{
        }}>
    <svg style={{
        width:'44px'
    }} xmlns="http://www.w3.org/2000/svg" width="70.221" height="52.994" viewBox="0 0 70.221 52.994"><g id="svg-3395" data-name="Group 170" transform="translate(1.75 1.75)"><g id="Group_169" data-name="Group 169"><path id="Path_25" data-name="Path 25" d="M-2058.049,1893.278a10.443,10.443,0,0,0-10.443-10.443H-2097.1a10.443,10.443,0,0,0-10.443,10.443v28.608a10.443,10.443,0,0,0,10.443,10.442h28.608a10.443,10.443,0,0,0,10.443-10.442" transform="translate(2107.544 -1882.835)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><path id="Path_26" data-name="Path 26" d="M-2090.134,1905.476l8.6-4.563,8.6,4.563v-22.641h-17.2Z" transform="translate(2106.281 -1882.835)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path></g><line id="Line_8" data-name="Line 8" x2="22.236" transform="translate(44.485 20.085)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></line><line id="Line_9" data-name="Line 9" x2="15.781" transform="translate(44.485 29.41)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></line></g></svg>
        </Box>
    </Box>

    <Box sx={{
        display:'flex',
        gap:'10px'
    }}>
        <Box sx={{
            display:'flex',
            padding:'12px 0px 0px 0px',
            flexDirection:'column',
            gap:'5px',
            direction:'rtl'
        }}>
        <p style={{
            color:'#3350E3',
            fontSize:'13px'
        }}>
پرداخت آنلاین امن
</p>
        <p style={{
            color:'#BFBBC9',
            fontSize:'10px'
        }}>
            پرداخت با کارت‌های شتاب
        </p>
        </Box>
        <Box sx={{
        }}>
    <svg style={{
        width:'35px'
    }} xmlns="http://www.w3.org/2000/svg" width="67.541" height="58.191" viewBox="0 0 67.541 58.191"><g id="svg-5336" data-name="Group 166" transform="translate(1.75 1.75)"><rect id="Rectangle_47" data-name="Rectangle 47" width="54.727" height="44.728" rx="11.573" transform="translate(0 9.962)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></rect><path id="Path_18" data-name="Path 18" d="M-1956.1,1874.277h8.28a18.5,18.5,0,0,1,18.5,18.5v16.137" transform="translate(1993.359 -1874.277)" fill="none" stroke="#435fcb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></path><line id="Line_4" data-name="Line 4" x2="8.769" transform="translate(8.511 44.89)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></line><line id="Line_5" data-name="Line 5" x2="24.675" transform="translate(9.673 33.203)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></line><line id="Line_6" data-name="Line 6" x2="33.693" transform="translate(0 22.113)" fill="none" stroke="#200e32" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"></line></g></svg>
        </Box>
    </Box>
     </Box>

      <Box>
        <Typography sx={{
          display:'flex',
          gap:'5px'
        }}>
          <Box>
          دسته :
          </Box>
          <Box sx={{
            opacity:'.5'
          }}>
          {product?.attributes?.categories?.data[0]?.attributes?.name}
          </Box>
        </Typography>
      </Box>
      <Box sx={{
      }}>
        <Typography sx={{
          display:'flex',
          alignItems:'center',
          gap:'5px'
        }}>
        Share :
        <TelegramIcon sx={{
          // border:'1px solid',
          // color:'white',
          // borderRadius:'50%',
          // backgroundColor:'#777777',
          fontSize:'18px',
          color:'#777777'

        }}/>
        <LinkedInIcon sx={{
          backgroundColor:'white',
          fontSize:'18px',
          color:'#777777'
        }}/>
        <TwitterIcon sx={{
          fontSize:'18px',
          color:'#777777'
        }}/>  
        <FacebookIcon sx={{
          fontSize:'18px',
          color:'#777777'
        }}/>
        <PinterestIcon sx={{
          fontSize:'18px',
          color:'#777777'
        }}/>  
        </Typography>
      </Box>
      </Stack>
    </Stack>
    <Box
        // sx={{
        //   width: { xs: "100%", md: "28%" },
        //   height: { xs: "40%", md: "20%" },
        // }}
        sx={{
          width:'400px',
          height:'400px',
          marginTop:'45px',
          marginRight:'148px',
          // position:'fixed'
          // zIndex:'99999'
        }}
      >
        <img
        style={{width:'100%',height:'100%'}}
          src={
            process.env.REACT_APP_BASE_URL +
              product?.attributes?.images?.data[0]?.attributes?.url
          }
          alt="#"
        />
      </Box>
    </Box>
<Typography sx={{
  fontSize:'24px',
  color:'#242424',
  display:'flex',
  justifyContent:'end',
  paddingRight:'45px'
}}>

    محصولات مرتبط
</Typography>
<Box sx={{
  marginTop:'190px'
}}>

    <Sliders  name={product?.attributes?.categories?.data[0]?.attributes?.name}/>   
</Box>


    </>
  )
}
