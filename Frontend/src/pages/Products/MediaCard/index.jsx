import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function MediaCard({ img, title, price, id }) {
  return (
    <Link to={`/product-details/${id}/${title.split(" ").join("-")}`}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "15.6vw",
            height: "340px",
            cursor: "pointer",
            // boxShadow: "1px 1px 5px 5px rgb(118 120 139 / 10%) !important",
            border: "1px solid rgba(0, 0, 0 , 0.1)",
          }}
        >
          <img
            style={{
              width: "100%",  
              height: "64%",
              padding: "25px 7px 7px 7px   ",
            }}
            src={img}
            alt="#"
          />
          <Box
            sx={{
              width: "80%",
              marginLeft: "25px",
            }}
          >
            <Typography
              sx={{
                marginTop: "15px",
                direction: "rtl",
              }}
            >
              {title.slice(0, 38)}...
            </Typography>
          </Box>
          <Typography
            sx={{
              direction: "rtl",
              color: "#435FCB",
              textAlign: "center",
              paddingTop: "2px",
            }}
          >
            {price}
            <br />
            تومان
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
