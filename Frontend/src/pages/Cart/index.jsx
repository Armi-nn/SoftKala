import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  deleteItem,
  removeAll,
  removeItem,
} from "../../Store/Slice/CartSlice";
import CloseIcon from "@mui/icons-material/Close";
import image from "../../assets/Cart.png";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function Cart() {
  const { list } = useSelector((state) => state.cart);
  let totalPrice = 0;
  const dispatch = useDispatch();
  return (
    <>
      {list.length > 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              paddingRight: "115px",
              marginTop: "50px",
              gap: "32px",
              direction: "rtl",
            }}
          >
            <TableContainer
              sx={{
                width: "850px",
                boxShadow: "none",
              }}
              component={Paper}
            >
              <Table
                sx={{
                  direction: "rtl",
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">محصول</TableCell>
                    <TableCell align="right">قیمت</TableCell>
                    <TableCell align="right">تعداد</TableCell>
                    <TableCell align="right">جمع جزء</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list?.map((e) => {
                    totalPrice =
                      totalPrice + e?.attributes?.price * e?.quantity;
                    return (
                      <TableRow>
                        <TableCell>
                          <CloseIcon
                            sx={{
                              cursor: "pointer",
                            }}
                            onClick={() => dispatch(deleteItem(e?.id))}
                          />
                        </TableCell>
                        <TableCell>
                          <img
                            style={{ width: "75px", height: "100%" }}
                            src={
                              process.env.REACT_APP_BASE_URL +
                              e?.attributes?.images?.data[0]?.attributes?.url
                            }
                            alt="#"
                          />
                        </TableCell>
                        <TableCell>{e?.attributes?.discrption}</TableCell>
                        <TableCell>
                          {e?.attributes?.price}
                          تومان
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              direction: "rtl",
                            }}
                          >
                            <button
                              style={{
                                border: "1px solid",
                                borderLeft: "none",
                                backgroundColor: "white",
                                padding: "7px",
                                borderRadius: "0px 200px 200px 0px",
                                cursor: "pointer",
                              }}
                              disabled={e?.quantity ? false : true}
                              onClick={() => dispatch(removeItem(e?.id))}
                            >
                              -
                            </button>
                            {e?.quantity && (
                              <p
                                style={{
                                  fontSize: "14px",
                                  border: "1px solid #777777",
                                  padding: "12px 12px",
                                }}
                              >
                                {e?.quantity}
                              </p>
                            )}
                            <button
                              style={{
                                border: "1px solid",
                                borderRight: "none",
                                backgroundColor: "white",
                                padding: "7px",
                                borderRadius: "200px 0px 0px 200px",
                                cursor: "pointer",
                              }}
                              onClick={() => dispatch(addItem(e))}
                            >
                              +
                            </button>
                          </Box>
                        </TableCell>
                        <TableCell>
                          {e?.attributes?.price * e?.quantity}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>{" "}
            <Box
              sx={{
                width: "405px",
                height: "255px",
                border: "1px solid",
                marginTop: "-10px",
                direction: "rtl",
                display: "flex",
                gap: "20px",
                flexDirection: "column",
                padding: "25px 20px 10px 10px",
                marginLeft: "7.5vw",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "#242424",
                }}
              >
                جمع کل سبد خرید
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "11vw",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  جمع جزء
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    gap: "5px",
                    opacity: ".6",
                  }}
                >
                  <Box>{totalPrice}</Box>
                  تومان
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "22.8vw",
                  height: "1px",
                  backgroundColor: "black",
                  opacity: ".2",
                  marginTop: "-5px",
                }}
              ></Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "11.75vw",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  مجموع
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    gap: "5px",
                    opacity: ".6",
                  }}
                >
                  <Box>{totalPrice}</Box>
                  تومان
                </Typography>
              </Box>

              <Box>
                <Button
                  sx={{
                    color: "#FFFFFF",
                    backgroundColor: "#435FCB",
                    padding: " 10px 118px",
                  }}
                >
                  ادامه جهت تسویه حساب
                </Button>
              </Box>
            </Box>
          </Box>
          <Button
            size="large"
            sx={{ margin: "50px 0px" }}
            variant="contained"
            color="error"
            onClick={() => dispatch(removeAll())}
          >
            Clear Cart
          </Button>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "7.1vw",
            }}
          >
            <img
              style={{
                width: "255px",
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
            سبد خرید شما در حال حاضر خالی است.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              opacity: ".77",
              fontSize: "15px",
            }}
          >
            Before proceed to checkout you must add some products to your
            shopping cart.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              opacity: ".77",
              fontSize: "15px",
            }}
          >
            You will find a lot of interesting products on our "Shop" page.
          </Typography>
          <Link to={"/products/all-category"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "22px",
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
        </>
      )}
    </>
  );
}
