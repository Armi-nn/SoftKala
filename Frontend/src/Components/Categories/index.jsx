import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";
import { Link } from "react-router-dom";

export default function Categories() {
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
      <CatCard
      key={index}
      p={e?.attributes?.name}
      id={e?.id}
      />
    );
  });
  return (
    <>
    <Box sx={{
      display:'flex',
      direction:'rtl',
      justifyContent:'space-between',
      padding:'20px 50px 0px 120px',
    }}>
    <Link to={'/products/all-category'}>
      <p
          style={{
            color: "#435FCB",
            fontSize: "22px",
          }}
        >
          محصولات فروشگاه
        </p>
    </Link>
        <Box sx={{
          display:'flex',
          gap:'35px'
        }}>
           {items}
        </Box>
    </Box>
    </>
  );
}

// import { Box } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CatCard from "./CatCard";

// export default function Categories() {
//   const [products, setProducts] = useState();
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(
//           process.env.REACT_APP_BASE_API + "categories?populate=*"
//         );
//         const data = await res.json();
//         setProducts(data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     })();
//   }, []);
//   const items = products?.map((e, index) => {
//     return (
//       <CatCard
//       key={index}
//       p={e?.attributes?.name}
//       id={e?.id}
//       />
//     );
//   });
//   return (
//     <>
//     <p
//           style={{
//             color: "#435FCB",
//             fontSize: "22px",
//           }}
//         >
//           محصولات فروشگاه
//         </p>
//       {items}
//     </>
//   );
// }
