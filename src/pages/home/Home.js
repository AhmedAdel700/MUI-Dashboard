import React from "react";
import './home.css';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
// import { useTheme } from "@emotion/react";

export default function Home() {
  // const themee = useTheme()
  //this for testing the custom theme
  return (
    <>
      {/* <Typography color={themee.palette.test.main}>Ahmed Adel</Typography> */}
      <Box>
        <Paper
          className="paper"
          sx={{
            position: "relative", width: "360px", display: "flex",
            justifyContent: "space-between", mt: "22px", pt: "27px", pb: "7px"
          }}>
          <Typography sx={{ ml: "16px", fontSize: "1.3rem" }} variant="h6">GYM</Typography>
          <Typography sx={{ mr: "33px", fontWeight: "500", fontSize: "1.4rem", opacity: "0.8" }} variant="h6">$100</Typography>
          <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
      </Box>
    </>
  )
}