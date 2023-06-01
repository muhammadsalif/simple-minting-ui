import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import rocket from "./rocket.png";
import Typography from "@mui/material/Typography";

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
  return (
    <Box sx={{ flexGrow: 1 }}>
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
                    style={{ color: "white", marginRight: "1em" }}
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
                    style={{ color: "white", marginRight: "1em" }}
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
                    style={{ color: "white", marginRight: "1em" }}
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
                />
              </div>
              <Button size="large" variant="contained">
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
