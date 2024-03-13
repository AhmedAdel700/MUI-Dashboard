import React, { useEffect, useState } from "react";
import './home.css';
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
// import { useTheme } from "@emotion/react";

export default function Home() {
  // const themee = useTheme()
  //this for testing the custom theme

  const [myData, setMyData] = useState([])
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    fetch("http://localhost:3100/myData")
      .then(res => res.json())
      .then(data => setMyData(data));
  }, []);

  useEffect(() => {
    // Calculate total price when myData array changes
    const total = myData.reduce((acc, paper) => acc + paper.price, 0);
    setTotalPrice(total);
  }, [myData])

  function deleteData(paper) {
    fetch(`http://localhost:3100/myData/${paper.id}`, { method: 'DELETE' })
    const newArray = myData.filter(object => object.id !== paper.id);
    setMyData(newArray)
  }

  const papers = myData.map(paper => {
    return (
      <Paper
        key={paper.id}
        className="paper"
        sx={{
          position: "relative", width: "360px", display: "flex",
          justifyContent: "space-between", mt: "22px", pt: "27px", pb: "7px"
        }}>
        <Typography sx={{ ml: "16px", fontSize: "1.3rem", textTransform: "capitalize" }} variant="h6">{paper.title}</Typography>
        <Typography sx={{ mr: "33px", fontWeight: "500", fontSize: "1.4rem", opacity: "0.8" }} variant="h6">${paper.price}</Typography>
        <IconButton
          onClick={() => deleteData(paper)}
          sx={{ position: "absolute", top: "0", right: "0" }}>
          <Close sx={{ fontSize: "20px" }} />
        </IconButton>
      </Paper>
    )
  })

  return (
    <>
      {/* <Typography color={themee.palette.test.main}>Ahmed Adel</Typography> */}
      <Box>
        {papers}
        <Typography sx={{ textAlign: "center", mt: "1rem" }} variant="h6">
          &#128073; You Spent ${totalPrice}
        </Typography>
      </Box>
    </>
  )
}