import { Box, Button, Typography } from "@mui/material";
import React from "react";
import useFormFields from "../../../utils/useFormFields";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../../../Store/Slice/AuthSlice";

export default function Login({ handleChangePageType }) {
  const [fields, handleChange] = useFormFields();
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_API + "auth/local", fields)
      .then((res) => {
        dispatch(login({ token: res.data.jwt, user: res.data.user.username }));
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 0px",
        }}
      >
        <Box
          sx={{
            border: "1px solid",
            padding: "50px",
            direction: "rtl",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            borderRadius: "25px",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
            }}
          >
            ورود
          </Typography>
          <Box
            component={"form"}
            onSubmit={handelSubmit}
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
                نام کاربری یا آدرس ایمیل
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
                  name="identifier"
                  id="email"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                }}
              >
                رمز عبور
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
                    border: "2px solid rgba(0, 0, 0 , 0.1)" ,
                    borderRadius: "25px",
                    padding: "0px 10px",
                  }}
                  type="password"
                  name="password"
                  id="password"
                />
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                color: "white",
                backgroundColor: "#435FCB",
                marginTop: "5px",
                ":hover": {
                  backgroundColor: "#5d72c2",
                },
              }}
            >
              ورود
            </Button>
            <Typography
              onClick={handleChangePageType}
              sx={{
                color: "#435FCB",
                fontSize: "17px",
                cursor: "pointer",
              }}
            >
              ایجاد حساب کاربری
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
