import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header, { drawerWidth } from "./header/Header";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

export default function Layout() {

    const storedTheme = localStorage.getItem("dark")
    const checkTheme = storedTheme ? JSON.parse(storedTheme) : true;

    const [currentMode, setCurrentMode] = useState(checkTheme);

    useState(() => {
        toggleMode();
    }, [])

    function toggleMode() {
        setCurrentMode(prev => !prev)
        localStorage.setItem("dark", JSON.stringify(currentMode))
    }

    // ******* VIP *******
    const darkTheme = createTheme({
        palette: {
            mode: currentMode ? "light" : "dark",
            newColor: {
                main: currentMode ? "#647488" : "teal",
            },
            cyanColor: {
                main: currentMode ? "black" : cyan[700],
            },
            bgColor: {
                main: currentMode ? "#a7ffeb" : "#37474f",
            }
            // this is new custom color i created
        },
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Header mode={toggleMode} currentMode={currentMode} />
                <Box
                    component="main"
                    sx={{
                        mt: "66px", ml: { xs: 0, sm: `${drawerWidth}` }, width: { sm: `calc(100% - ${drawerWidth})` },
                        display: "flex", justifyContent: "center"
                    }}>
                    <Outlet />
                </Box>
            </ThemeProvider>
        </>
    )
}
