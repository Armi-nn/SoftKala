import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryProduct({ Product }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "categories?populate=*"
        );
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const items = products?.map((e, index) => {
    return (
      <Link to={`/products/${e?.id}`} key={index}>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#7C7C7C",
            cursor: "pointer",
            ":hover":{
              color:"blue"
            }
          }}
        >
          {e?.attributes?.name}
        </Typography>
      </Link>
    );
  });
  return (
    <>
      <Box
        sx={{
          display: "flex",
          direction: "rtl",
        }}
      >
        <Link to={"/products/all-category"}></Link>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {Product && (
            <p
              style={{
                fontSize: "16px",
                fontWeight: "bolder",
                marginBottom: "5px",
              }}
            >
              دسته‌های محصولات
            </p>
          )}

          {items}
        </Box>
      </Box>
    </>
  );
}
