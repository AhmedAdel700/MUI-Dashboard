import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function PageNotFound() {
    const theme = useTheme()
    return (
        <Box>
            <Typography sx={{ color: theme.palette.error.main, margin: "100px auto 0", fontWeight: "500" }} variant="h2">
                This Page Is Not Found
            </Typography>
        </Box>
    );
}
