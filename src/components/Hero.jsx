import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TypographyCss } from "./HeroCss";
// import girl from "../assets/Shikha2.jfif.jpeg";
import girl from "../assets/formal photo.jpeg";
function Hero() {
  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            xs={6}
            sx={{
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: "#0CBBA0", width: "150px" }}
            >
              Hello I'm
            </Button>
            <Typography variant="h3" sx={{ fontWeight: "750", mt: 3, mb: 1 }}>
              Shikha Sharma
            </Typography>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Student 
            </Typography>
            <Box
              sx={{
                height: "120px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1" sx={TypographyCss}>
                <EmailIcon sx={{ mr: 1 }} />
                shikha.sharma80777@gmail.com
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <LocalPhoneIcon sx={{ mr: 1 }} />
                 9456463543
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <LocationOnIcon sx={{ mr: 1 }} />
                30 Vijay Vihar Shahganj Agra Uttar Pradesh
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <LinkedInIcon sx={{ mr: 1 }} />
                https://www.linkedin.com/in/shikha-sharma-38462b1bb/
              </Typography>
              <Typography variant="subtitle1" sx={TypographyCss}>
                <GitHubIcon sx={{ mr: 1 }} />
                https://github.com/59ShikhaSharma
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "space-between",
                width: "150px",
              }}
            >
              <FacebookIcon />
              <InstagramIcon />
              <GitHubIcon />
              <LinkedInIcon />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "380px",
                width: "380px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                mt: 8,
              }}
            >
              <img
                src={girl}
                style={{
                  height: "350px",
                  width: "350px",
                  objectFit: "cover",
                  objectPosition: "10% 45%",
                  border: "none",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;