import React from "react";
import "./logout.css"
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const navigate = useNavigate()
    return (
        <Box display="flex" justifyContent="center" flexDirection="column" mt="2rem" padding="0 0.25rem">
            <Typography textAlign="center" variant="h5">
                Are You Sure You Want To Logout ?
            </Typography>
            <Box component="div" display="flex" justifyContent="center">
                <Button>Yes</Button>
                <Button onClick={() => navigate("/")}>No</Button>
            </Box>
        </Box>
    )
}
