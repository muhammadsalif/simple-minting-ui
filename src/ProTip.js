import * as React from "react";
import {useState} from 'react'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import rocket from "./assets/rocket.png";
import CustomSnackbar from "./reusable/CustomSnackbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#002",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10),
  },
}));


export default function ProTip() {
  const [data,setData]= useState({
    receiverAddress: "",
    tick: "",
    maxSupply: ""
  })
 // snackbar details
 const [alertBox, setAlertBox] = useState({
  isOpen: false,
  message: "",
  backgroundColor: "#a71313"
});


const validate = () => {
  if (data.receiverAddress === "" || data.tick ==="" || data.maxSupply ==="") {
    return {
      success: false,
      message: "Please fill all values to continue",
    };
  }
  // if(
  //   parseFloat(data.maxSupply) < 1000 || 
  //   parseFloat(data.maxSupply) > 1000000000){
  //     return {
  //       success: false,
  //       message: "Min value is 1000, Max is 1000000000(10^9)",
  //     };
  //   }
  return {
    success: true,
    message: "",
  };
}
const mintHandler =()=>{
    let vali = validate();
    if (vali.success === false) {
      setAlertBox({
        isOpen: true,
        message: vali.message,
        backgroundColor: "#a71313"
      });
      return;
    } else {
      setAlertBox({
        isOpen: true,
        message: "Token 'Test' Successfully Minted",
        backgroundColor: "#177910" 
       });
    }
}

function handleSnackbarState(isOpen) {
    setAlertBox({
        ...alertBox,
        isOpen: isOpen
    });
}
  return (
    <Box sx={{ flexGrow: 1 }}>
        {alertBox.isOpen &&
                    <CustomSnackbar
                        isOpen={alertBox.isOpen}
                        autoHideDuration={3000}
                        message={alertBox.message}
                        backgroundColor={alertBox.backgroundColor}
                        handleSnackbarOpen={handleSnackbarState} />
                }
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // spacing={2}
      >
        <Grid item xs={12} md={8}>
          <Item>
            <FormControl>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "2em",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel style={{ color: "white" }}>
                  <Typography
                    style={{ color: "white", marginRight: "1em",textAlign: "left" }}
                    sx={{ fontSize: { xs: 15, md: 20 } }}
                    variant="body"
                    component="h2"
                    gutterBottom
                  >
                    Receiver Address{" "}
                  </Typography>
                </FormLabel>
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white",
                    },
                  }}
                  value={data.receiverAddress}
                  onChange={e=> setData(d=> {
                    return {
                      ...d,
                      receiverAddress: e.target.value
                    }
                  })}
                />{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "2em",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel style={{ color: "white" }}>
                  <Typography
                    style={{ color: "white", marginRight: "1em",textAlign: "left" }}
                    sx={{ fontSize: { xs: 15, md: 20 } }}
                    variant="body"
                    component="h2"
                    gutterBottom
                  >
                    Token tick{" "}
                  </Typography>
                </FormLabel>
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white",
                    },
                  }}
                  inputProps={{
                    maxLength: 4,
                    }}
                  value={data.tick}
                  onChange={e=> setData(d=> {
                    return {
                      ...d,
                      tick: e.target.value
                    }
                  })}
                />{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "2em",
                  justifyContent: "space-between",
                }}
              >
                <FormLabel style={{ color: "white" }}>
                  <Typography
                    style={{ color: "white", marginRight: "1em" ,textAlign: "left"}}
                    variant="body"
                    component="h2"
                    gutterBottom
                    sx={{ fontSize: { xs: 15, md: 20 } }}
                  >
                    Max Supply{" "}
                  </Typography>
                </FormLabel>
                <TextField
                  sx={{
                    input: {
                      color: "black",
                      background: "white",
                    },
                  }}
                  value={data.maxSupply}
                  onChange={(e)=> {
                    if (!e.target.value) {
                      setData(d=> {
                        return {
                          ...d,
                          maxSupply: ""
                        }
                      })
                    }
                    if (
                      !isNaN(e.target.value) &&
                      /^[0-9]\d*(\.\d+)?$/.test(parseFloat(e.target.value))
                    ) {
                    setData(d=> {
                      return {
                        ...d,
                        maxSupply: e.target.value
                      }
                    })
                  }
                  }}
                />
              </div>
              <Button size="large" variant="contained" onClick={mintHandler}>
                Mint
              </Button>
            </FormControl>
          </Item>
        </Grid>
        <Grid item md={4} xs={10}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img
              alt="rocket.png"
              src={rocket}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
