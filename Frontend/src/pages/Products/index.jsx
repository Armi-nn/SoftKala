import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import fetchApi from "../../utils/FetchApi";
import MediaCard from "./MediaCard";
import CategoryProduct from "./CategoryProduct";

export default function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("price:desc");
  const sortChange = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchApi(
          process.env.REACT_APP_BASE_API +
            `products?populate=*&${
              categoryId !== "all-category" &&
              `filters[categories][id][$eq]=${categoryId}`
            }&sort[0]=${sort} `
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [sort, categoryId]);
  const items = products?.map((e, index) => (
    <MediaCard
      key={index}
      img={
        process.env.REACT_APP_BASE_URL +
        e?.attributes?.images?.data[0]?.attributes?.url
      }
      title={e?.attributes?.discrption}
      price={e?.attributes?.price}
      id={e?.id}
    ></MediaCard>
  ));
  return (
    <Box component={"section"} px={5}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 410px 0px 75px",
          marginTop: "40px",
          alignItems: "center",
          direction: "rtl",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            direction: "rtl",
          }}
        >
          <Link to={"/"}>
            <Typography
              sx={{
                opacity: ".7",
              }}
            >
              خانه
            </Typography>
          </Link>
          <Typography
            sx={{
              opacity: ".7",
            }}
          >
            /
          </Typography>
          <Link  to={"/products/all-category"}>
            <Typography>فروشگاه</Typography>
          </Link>
        </Box>
        <FormControl
          sx={{
            width: "100px",
            display: "block",
            color: "black",
            direction: "ltr",
          }}
        >
          <InputLabel id="demo-simple-select-label">مرتب سازی</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ width: "220px", display: "block", color: "black" }}
            value={sort}
            label="Sort-By"
            onChange={sortChange}
          >
            <MenuItem value={"price:desc"}>
              مرتب سازی بر اساس گران ترین
            </MenuItem>
            <MenuItem value={"price:asc"}>
              مرتب سازی بر اساس ارزان ترین
            </MenuItem>
            <MenuItem value={"createdAt:desc"}>
              مرتب سازی بر اساس جدید ترین
            </MenuItem>
            <MenuItem value={"createdAt:asc"}>
              مرتب سازی بر اساس قدیمی ترین
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "110px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "70vw",
            marginLeft: "4.9vw",
            marginBottom: "100px",
            marginTop: "30px",
          }}
        >
          {items}
        </Box>
        <Box sx={{
          paddingTop:'30px'
        }}>
          <CategoryProduct Product={true}/>
        </Box>
      </Box>
    </Box>
  );
}
