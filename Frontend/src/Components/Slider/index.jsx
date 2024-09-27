import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
export default function Slider() {
  const [slide, setSlide] = useState();
  
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "sliders?populate=*"
        );
        const data = await res.json();
        setSlide(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const items = slide?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
        src={
          process.env.REACT_APP_BASE_URL +
          e?.attributes?.image?.data?.attributes?.url
        }
        alt="#"
      />
    </SwiperSlide>
  ));
  return (
    <Box sx={{}}>
      <Swiper
        style={{
          height: "515px",
          width: "820px",
          marginLeft: "41vw",
          marginTop: "-220px",
          padding: "0px",
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        direction={"vertical"}
      >
        {items}
      </Swiper>
    </Box>
  );
}
