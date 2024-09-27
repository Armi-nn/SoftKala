import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { deleteItem } from "../../Store/Slice/LikeSlice";
import image from "../../assets/Like.png";
import { Link } from "react-router-dom";
export default function Like() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.like);
  const items = list?.map((e, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        onClick={() => dispatch(deleteItem(e?.id))}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        حذف
        <CloseIcon
          sx={{
            fontSize: "20px",
          }}
        />
      </Box>
      <img
        style={{ width: "300px", height: "300px" }}
        src={
          process.env.REACT_APP_BASE_URL +
          e?.attributes?.images?.data[0]?.attributes?.url
        }
        alt="#"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
          }}
        >
          {e?.attributes?.discrption}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          تومان
          <Box>{e?.attributes?.price}</Box>
        </Typography>
      </Box>
    </Box>
  ));
  return (
    <>
      {list.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: "30px",
            padding: "20px 100px",
            flexWrap: "wrap",
            marginTop: "30px",
            marginBottom:'100px'
          }}
        >
          {items}
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "7.1vw",
            }}
          >
            <img
              style={{
                width: "220px",
              }}
              src={image}
              alt="#"
            />
          </Box>
          <Typography
            sx={{
              fontSize: "48px",
              display: "flex",
              justifyContent: "center",
              direction: "rtl",
            }}
          >
            علاقه مندی خالی است.
          </Typography>
          <Link to={"/products/all-category"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
                marginBottom: "90px",
              }}
            >
              <Button
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#435FCB",
                  padding: " 12px 38px",
                  Content: "center",
                  ":hover": {
                    backgroundColor: "#5d72c2",
                  },
                }}
              >
                بازگشت به فروشگاه
              </Button>
            </Box>
          </Link>
        </Box>
      )}
    </>
  );
}
