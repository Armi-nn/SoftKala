import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import style from "./style.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Card from "../Card";
export default function Sliders({name}) {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "products?populate=*"
        );
        const data = await res.json();
        setProducts(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const items = products?.map((e, index) => {
    if(e?.attributes?.categories?.data[0]?.attributes?.name==name){
      return (
        <SwiperSlide key={index}>
          <Card
            img={
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.images?.data[0]?.attributes?.url
            }
            title={e?.attributes?.discrption}
            price={e?.attributes?.price}
            id={e?.id}
          />
        </SwiperSlide>
      );
    }

  });
  return (
    <>
      <Swiper
        style={{
            paddingTop:'0px',
          paddingRight: "120px",
          paddingBottom: "40px",
          marginTop: "-160px",
          display: "flex",
        }}
        slidesPerView={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {items}
      </Swiper>
    </>
  );
}
