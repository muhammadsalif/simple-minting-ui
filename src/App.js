import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ProTip from "./ProTip";
import theme from "./theme";

export default function App() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.main,
      }}
    >
      <Container style={{ padding: "6em 2em" }} maxWidth="xl">
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Grid item xs={8}>
            <Typography
              style={{ color: "white" }}
              variant="h2"
              component="h1"
              gutterBottom
            >
              ERC-20 Token Mint{" "}
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            xs={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button size="large" variant="contained">
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
