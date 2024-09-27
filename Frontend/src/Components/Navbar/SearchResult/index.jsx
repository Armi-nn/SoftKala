import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SearchResult({ name, img, id, closeSearch, price }) {
  return (
    <Link
      style={{
        display: "block",
        width: "100%",
        height: "100px",
        borderBottom: "1px solid rgba(0, 0, 0 , 0.1)",
        direction: "rtl",
      }}
      onClick={closeSearch}
      to={`/product-details/${id}/${name.split(" ").join("-")}`}
    >
      <Stack
        sx={{
          display: "flex",
          gap: "10px",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <img
          src={img}
          style={{
            width: "65px",
            height: "65px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "black",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              gap: "5px",
              color: "blue",
            }}
          >
            <Box>{price}</Box>
            تومان
          </Typography>
        </Box>
      </Stack>
    </Link>
  );
}
