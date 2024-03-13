import React, { useState } from "react";
import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import './create.css'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]), // this get me a text with a color that match's my background
  // backgroundColor: purple[500],
  backgroundColor: theme.palette.newColor.main,
  // backgroundColor: theme.palette.newColor.main, this too add the new custom color i created
  '&:hover': {
    backgroundColor: theme.palette.newColor.main,
    scale: "0.99"
    // backgroundColor: purple[700],
  },
}));

export default function Create() {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()

  return (
    <Box sx={{ width: { xs: "90%", sm: "380px" } }} component="form">
      <TextField
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        label="Transaction Title"
        fullWidth
        sx={{ display: "block", mt: { xs: "0", sm: "22px" } }}
        autoComplete="off"
        InputProps={{
          startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        onChange={(e) => {
          setPrice(Number(e.target.value))
        }}
        label="Amount"
        id="filled-start-adornment"
        fullWidth
        sx={{ display: "block", mt: { xs: "22px" } }}
        autoComplete="off"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton
        onClick={() => {
          if (title && price) {
            fetch("http://localhost:3100/myData", {
              method: 'POST',
              headers: {
                'Content-Type': 'applications/json'
              },
              body: JSON.stringify({ title, price })
            })
              .then(() => navigate("/"))
          }
        }}
        sx={{ mt: "20px" }} variant="contained">Submit <ChevronRightIcon />
      </ColorButton>
    </Box >
  )
}
