import { Button } from "@mui/material";
import React from "react";
import market from "./market.module.css";
import Models from "../Models/Models";

function Market() {
  return (
    <div className={market.mainC}>
      <div className={market.titleC}>
        <h1>Market Sectores</h1>
        <h3>
          We serve a range of industries from education to retail, hospitals to
          care facilities and leisure to offices. Our vast selection of flooring
          options cover a variety of settings and budget.
        </h3>
      </div>
      <Models />
      <div className={market.buttonHolder}>
        <Button
          color="primary"
          sx={{ width: "50%" }}
          variant="outlined"
          size="large"
        >
          Get A Free Quote
        </Button>
      </div>
    </div>
  );
}

export default Market;
