import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useFormFields from "../../../utils/useFormFields";
import axios from "axios";

export default function Register({handleChangePageType}) {
  const [fields,handleChange]=useFormFields()
  const handelSubmit=(e)=>{
    e.preventDefault()
    axios.post(process.env.REACT_APP_BASE_API+'auth/local/register',fields)
    .then(res=>{
      if(res?.data?.jwt){
        alert('register successfully')
        handleChangePageType()
      }
    }).catch(error=>alert(error.message))
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems:'center',
          padding:'100px 0px',
        }}
        >
        <Box
          sx={{
            border:'1px solid',
            padding:'50px',
            direction: "rtl",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            borderRadius:'25px'
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
            }}
          >
            عضویت
          </Typography>
          <Box  component="form" noValidate onSubmit={handelSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
           >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                flexDirection: "column",
              }}
             >
              <Typography
                sx={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                نام کاربری
                <Box
                  sx={{
                    color: "#E01020",
                  }}
                >
                  *
                </Box>
              </Typography>
              <Box
                sx={{
                  input: {
                    border: "none",
                  },
                }}
              >
                <input 
                required
                onChange={handleChange}
                  style={{
                    width: "460px",
                    height: "40px",
                    border: "2px solid rgba(0, 0, 0 , 0.1)",
                    borderRadius: "25px",
                    padding: "0px 10px",
                  }}
                  type="text"
                  name="username"
                  id="username"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                آدرس ایمیل
                <Box
                  sx={{
                    color: "#E01020",
                  }}
                >
                  *
                </Box>
              </Typography>
              <Box
                sx={{
                  input: {
                    border: "none",
                  },
                }}
              >
                <input
                required
                onChange={handleChange}
                  style={{
                    width: "460px",
                    height: "40px",
                    border: "2px solid rgba(0, 0, 0 , 0.1)",
                    borderRadius: "25px",
                    padding: "0px 10px",
                  }}
                  type="email"
                  name="email"
                  id="email"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  gap: "5px",
                }}
              >
                گذرواژه
                <Box
                  sx={{
                    color: "#E01020",
                  }}
                >
                  *
                </Box>
              </Typography>
              <Box
                sx={{
                  input: {
                    border: "none",
                  },
                }}
              >
                <input
                required
                onChange={handleChange}
                  style={{
                    width: "460px",
                    height: "40px",
                    border: "2px solid rgba(0, 0, 0 , 0.1)",
                    borderRadius: "25px",
                    padding: "0px 10px",
                  }}
                  type="password"
                  name="password"
                  id="password"
                />
              </Box>
            </Box>
          
            <Button type="submit"
              sx={{
                color: "white",
                backgroundColor: "#435FCB",
                marginTop:'5px',
                ":hover": {
                  backgroundColor: "#5d72c2",
                },
              }}
            >
              عضویت
            </Button>
            <Typography onClick={handleChangePageType} sx={{
              color:'#435FCB',
              fontSize:'17px',
              cursor:'pointer'
            }}>
           ورود حساب کاربری
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
