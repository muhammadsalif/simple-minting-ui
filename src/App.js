import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ProTip from "./ProTip";
import theme from "./theme";
import logo from "./assets/logo.jpg";

export default function App() {

  const connectWalletHandler= ()=>{
    console.log("connect wallet now")
  }
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.main,
      }}
    >
      <Container
        sx={{ padding: { xs: "2em 0 0 0", md: "10px 2em 3em 2em" } }}
        // style={{ padding: "6em 2em" }}
        maxWidth="xl"
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Grid item xs={8} sx={{
            display: {md: "unset", xs: "flex"} ,
            justifyContent: {md: "unset", xs: "center"} 
          }}>
            {/* <Typography
              style={{ color: "white" }}
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: 30, md: 35 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              ERC-20 Token Mint{" "}
            </Typography> */}
                <img
              alt="logo"
              src={logo}
              style={{ width: "130px", height: "100px" }}
            />
          </Grid>
          <Grid
            item
            md={4}
            xs={10}
            style={{
              display: "flex",
              justifyContent:  {md: "flex-end", xs: "center"} ,
              alignItems: "center",
            }}
          >
            <Button
              size="large"
              variant="contained"
              sx={{
                marginBottom: { xs: 4, md: 0 },
                textTransform: "none",
                color: "#fff",
                fontWeight: 600
              }}
              onClick={connectWalletHandler}
            >
              Connect Wallet
            </Button>
          </Grid>
        </Grid>
        <ProTip />
        {/* <Copyright /> */}
      </Container>
    </main>
  );
}
