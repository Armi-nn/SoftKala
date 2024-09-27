import { Box } from "@mui/material";

import React, { useEffect, useState } from "react";

export default function Slide() {
  const [slide, setSlide] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "slides?populate=*"
        );
        const data =await res.json();
        setSlide(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const items = slide?.map((e, index) => (
    <img style={{
      width:'20.7vw',
      cursor:'pointer'
    }}
      key={index}
      src={
        process.env.REACT_APP_BASE_URL +
        e?.attributes?.image?.data?.attributes?.url
      }
      alt="#"
    />
  ));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {items}
    </Box>
  );
}
