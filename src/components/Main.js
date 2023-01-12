import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export default function Main() {
  return (
    <Box>
      <Grid container sx={{background:"rgba(9, 166, 109, 0.05)"}}>
        <Grid item lg={6} sx={{ p: 10 }}>
          <Box
            sx={{
              background: "#09A66D",
              padding: "90px 0px",
              borderRadius: "6px",
            }}
          >
            <img
              style={{
                width: "250px",
                transform: "rotate(30deg)",
                marginLeft: "70px",
              }}
              src="https://www.linkpicture.com/q/img1_15.jpg"
              alt=""
            />
            <img
              style={{
                width: "200px",
                transform: "rotate(30deg)",
                marginLeft: "60px",
                marginBottom: "40px",
              }}
              src="https://www.linkpicture.com/q/img2_3.jpg"
              alt=""
            />
            <img
              style={{ width: "200px", transform: "rotate(30deg)" }}
              src="https://www.linkpicture.com/q/img3_14.jpg"
              alt=""
            />
            <img
              style={{
                width: "250px",
                transform: "rotate(30deg)",
                marginLeft: "60px",
                marginTop: "-60px",
              }}
              src="https://www.linkpicture.com/q/img4_5.jpg"
              alt=""
            />
          </Box>
        </Grid>
        <Grid item lg={5} sx={{ pt:15, position:"relative"}}>
        <img style={{width:"500px", position:"absolute", bottom:"0%", right:"0%"}} src="https://www.linkpicture.com/q/main1-removebg-preview.png" alt="" />
          <Box>
            <Typography variant="h2" component={"h4"}>
              Explor Our Special Items
            </Typography>
            <Typography variant="p" component={"p"} sx={{color:"gray", mt:5}}> 
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the <br /> 1500s, when an unknown printer...
            </Typography>
            <Box sx={{display:'flex', gap:"10px", alignItems:"center", mt:6}}>
                <Typography variant="p" component={"p"} sx={{fontWeight:"bold"}}>
                    Explor Now
                </Typography>
                <IconButton sx={{background:"green", color:"white", fontSize:"18px"}}>
                    <ArrowRightAlt/>
                </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
