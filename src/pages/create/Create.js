import React from "react";
import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

  return (
    <Box sx={{ width: { xs: "90%", sm: "380px" } }} component="form">
      <TextField
        label="Transaction Title"
        fullWidth
        sx={{ mt: { xs: 0, sm: 1 }, display: "block", mt: { xs: "0", sm: "22px" } }}
        InputProps={{
          startAdornment: <InputAdornment position="start">&#128073;</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        label="Transaction Title"
        id="filled-start-adornment"
        fullWidth
        sx={{ mt: { xs: 0, sm: 1 }, display: "block", mt: { xs: "22px" } }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton sx={{ mt: "20px" }} variant="contained">Submit <ChevronRightIcon /> </ColorButton>
    </Box>
  )
}
