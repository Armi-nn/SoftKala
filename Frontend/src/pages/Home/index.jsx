import React from "react";
import image1 from "../../assets/0013657.png";
import image2 from "../../assets/0009829.png";
import image3 from "../../assets/0009828_-cpu.png";
import { Box } from "@mui/material";
import Slider from "../../Components/Slider";
import Slide from "../../Components/Slide";
import Categories from "../../Components/Categories";
import Slider2 from "./Slider2";
import Sliders from "../../Components/Sliders";
import image4 from "../../assets/0009825.png";
export default function Home() {
  return (
    <>
      <Box>
        <Box
          sx={{
            marginLeft: "125px",
            marginTop: "75px",
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              style={{
                width: "30.7vw",
              }}
              src={image1}
              alt="#"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              gap: "50px",
              marginLeft: "18px",
            }}
          >
            <img
              style={{
                width: "12.3vw",
                height: "150px",
              }}
              src={image2}
              alt="#"
            />
            <img
              style={{
                width: "12.4vw",
                height: "150px",
              }}
              src={image3}
              alt="#"
            />
          </Box>
        </Box>
        <Slider />
        <Slide /> 
        <Box sx={{
          marginTop:'115px'
        }}>
        <Categories />
        </Box>
        <Box sx={{
          marginTop:'30px'
        }}>
        <Slider2 />
        </Box>
        <Box
          sx={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "end",
            paddingRight: "45px",
          }}
        >
          <p
            style={{
              color: "#435FCB",
              fontSize: "22px",
            }}
          >
            برترین کیس ها
          </p>
        </Box>
        <Box sx={{
          marginTop:'190px'
        }}>
        <Sliders name={"کیس"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "28px",
          }}
        >
          <img
            style={{
              width: "83vw",
            }}
            src={image4}
            alt=""
          />
        </Box>

        <Box
          sx={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "end",
            paddingRight: "45px",
          }}
        >
          <p
            style={{
              color: "#435FCB",
              fontSize: "22px",
            }}
          >
            منتخب کارت گرافیک
          </p>
        </Box>
        <Box sx={{
          marginTop:'190px'
        }}>
        <Sliders name={"کارت گرافیک"} />
        </Box>
      </Box>
    </>
  );
}
