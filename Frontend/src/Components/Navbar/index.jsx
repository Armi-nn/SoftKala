import React, { useEffect, useState } from "react";
import image from "../../assets/image.png";
import icon from "../../assets/mega-menu-category.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Badge,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Store/Slice/AuthSlice";
import fetchApi from "../../utils/FetchApi";
import SearchResult from "./SearchResult";
import CategoryProduct from "../../pages/Products/CategoryProduct";
export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.list).length;
  const likeCount = useSelector((state) => state.like.list).length;
  const { user } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [searchResult, setSearchResult] = useState();
  const [search, setSearch] = useState();
  const closeSearch = () => {
    setSearch("");
  };
  useEffect(() => {
    if (search) {
      (async () => {
        const res = await fetchApi(
          process.env.REACT_APP_BASE_API +
            `products?populate=*&&filters[name][$containsi]=${search}`
        );
        setSearchResult(res.data);
      })();
    }
  }, [search]);

  const searchItems = searchResult?.map((e, index) => (
    <SearchResult
      key={index}
      closeSearch={closeSearch}
      name={e?.attributes?.name}
      id={e?.id}
      img={
        process.env.REACT_APP_BASE_URL +
        e?.attributes?.images?.data[0]?.attributes?.url
      }
      price={e?.attributes?.price}
    ></SearchResult>
  ));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "118px",
          backgroundColor: "white",
          boxShadow: "22px 5px 8px rgb(118 120 139 / 10%) !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: {
              md: "0px 50px",
              lg: "0px 130px !important",
              sm: "0px 20px",
              xs: "0px 0px",
            },
            marginTop: "30px",
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "20px",
              color: "#7c7c7c",
            }}
          >
            <li
              style={{
                cursor: "pointer",
              }}
            >
              تماس با ما
            </li>
            <li
              style={{
                cursor: "pointer",
              }}
            >
              درباره ما
            </li>
            <Link to={"/products/all-category"}>
              <li
                style={{
                  cursor: "pointer",
                }}
              >
                فروشگاه
              </li>
            </Link>
          </ul>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                marginTop: "-10px !important",
              }}
            >
              <Typography
                sx={{
                  color: "#7c7c7c",
                }}
              >
                از برندهای معتبر در فروشگاه سافت کالا IT عرضه محصولات
              </Typography>
              <Link to={"/"}>
                <img
                  style={{
                    width: "200px",
                    height: "40px",
                  }}
                  src={image}
                  alt="#"
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "30px 130px",
            //     padding: {md:"1000px 50px",
            //     lg:'0px 130px !important',
            //   sm:'0px 20px',
            // xs:'0px 0px' },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {token ? (
              <Button
                onClick={() => dispatch(logout())}
                sx={{
                  border: "1px solid #7c7c7c",
                  borderRadius: "17px",
                  padding: "8px 15px",
                  color: "#333333",
                }}
              >
                <Box
                  sx={{
                    direction: "rtl",
                    display: "flex",
                    gap: "3px",
                  }}
                >
                  <Box>خروج از</Box>
                  {user}
                </Box>
                <PermIdentitySharpIcon />
              </Button>
            ) : (
              <Link to={"login-register"}>
                <Button
                  sx={{
                    border: "1px solid #7c7c7c",
                    borderRadius: "17px",
                    padding: "8px 15px",
                    color: "#333333",
                  }}
                >
                  ورود / ثبت نام <PermIdentitySharpIcon />
                </Button>
              </Link>
            )}
            <Box
              sx={{
                display: "flex",
                gap: "15px",
              }}
            >
              <Link to={"/like"}>
                <Badge badgeContent={likeCount} color="secondary">
                  <FavoriteBorderOutlinedIcon
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </Link>
              <Link to={"cart"}>
                <Badge badgeContent={cartCount} color="secondary">
                  <ShoppingCartOutlinedIcon
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/*  */}

            <Box
              className="searchBox"
              sx={{
                boxSizing: "border-box",
                position: "relative",
                // height: "60%",
                // width: "250px",
                marginRight: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  style={{
                    direction: "rtl",
                    position: "relative",
                    width: "355px",
                    height: "40px",
                    backgroundColor: "#EBEFFA",
                    borderRadius: "25px",
                    border: "none",
                    padding: "0px 15px",
                  }}
                  placeholder="جستجوی محصولات"
                ></input>
                <SearchIcon
                  sx={{
                    position: "absolute",
                    marginLeft: "15px",
                    color: "#777777",
                    fontSize: "30px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  position={"absolute"}
                  sx={{
                    width: "85%",
                    height: "350px",
                    overflow: "scroll",
                    overflowX: "hidden",
                    backgroundColor: "white",
                    zIndex: "1000",
                    borderRadius: "20px",
                    visibility: search ? "visible" : "hidden",
                    opacity: search ? "1" : "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    padding: "20px 5px",
                  }}
                >
                  {searchItems}
                </Box>
              </Box>
            </Box>

            {/*  */}

            <Box
              sx={{
                backgroundColor: "#EBEFFA",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "25px",
                position: "relative",
                cursor: "pointer",
                ":hover": {
                  ".Box": {
                    visibility: "visible",
                    transitionDelay: ".3s",
                  },
                },
              }}
            >
              <ExpandMoreIcon />
              دسته بندی کالاها
              <img src={icon} alt="" />
              <Box
                className="Box"
                sx={{
                  position: "absolute",
                  width: "80%",
                  height: "auto",
                  visibility: "hidden",
                  marginTop: "180px",
                  zIndex: "999999",
                  backgroundColor: "white",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "end",
                  borderRadius: "0px 0px 20px 20px",
                  border: "1px solid rgba(0, 0, 0 , 0.1)",
                  // transition:'all 1s'
                  // backgroundColor:'black'
                }}
              >
                <CategoryProduct />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* <Box
            className="searchBox"
            sx={{
              boxSizing: "border-box",
              position: "relative",
              height: "60%",
              width: "250px",
              marginRight: "20px",
            }}
           >
            <TextField
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              sx={{
                width: "100%",
                backgroundColor: "white",
                height: "100%",
              }}
              type="search"
            />
            <Box
              position={"absolute"}
              sx={{
                width: "100%",
                height: "350px",
                backgroundColor: "white",
                zIndex: "1000",
                borderRadius: "0 0 20px 20px",
                visibility: search ? "visible" : "hidden",
                opacity: search ? "1" : "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {searchItems}
            </Box>
          </Box> */}
      </Box>
    </>
  );
}
