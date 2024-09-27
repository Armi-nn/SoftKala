import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CatCard({ p, id }) {
  return (
    <>
      
        <Link to={`/products/${id}`}>
          <p
            style={{
              fontSize: "16px",
              color: "#7C7C7C",
              cursor:'pointer'
            }}
          >
            {p}
          </p>
        </Link>
    </>
  );
}
