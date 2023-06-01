import { createTheme, ThemeProvider } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { useState } from 'react';



function CustomSnackbar({ isOpen = false, autoHideDuration = 2000, anchorOrigin = { vertical: "bottom", horizontal: "right" }, message = "", backgroundColor = "#177910", sx, classes, key, handleSnackbarOpen }) {
    const [open, setOpen] = useState({ isOpen });
    
    function handleState(isOpen) {
        setOpen(isOpen);
        handleSnackbarOpen(isOpen);
    }

    function getMuiTheme() {
        return createTheme({
            components: {
                MuiSnackbarContent: {
                    styleOverrides: {
                        root: {
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 500,
                            borderRadius: "5px",
                            marginTop: "10px",
                            justifyContent: "center",
                            backgroundColor: `${backgroundColor}!important`
                        }
                    }
                },
                MuiSnackbar: {
                    styleOverrides: {
                        root: {
                            right: "5%!important",
                            left: "5%!important"
                        }
                    }
                }
            }
        })
    }

    return (
        <ThemeProvider theme={getMuiTheme()}>
            <Snackbar
                open={isOpen}
                autoHideDuration={autoHideDuration}
                onClose={() => { handleState(false) }}
                anchorOrigin={anchorOrigin}
                classes={classes}
                message={message}>
            </Snackbar>
        </ThemeProvider>
    );
}

export default CustomSnackbar;