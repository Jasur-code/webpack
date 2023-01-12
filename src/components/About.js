import { ArrowRightAlt, Person, Star } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Box
      sx={{
        mt: 2,
        position: "relative",
        p: 4,
        backgroundColor: " #F3FBF8",
      }}
    >
      <img
        style={{ position: "absolute", top: "-5%", left: "5%", width: "500px" }}
        src="https://www.linkpicture.com/q/main1-removebg-preview.png"
        alt=""
      />

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h2" component={"h3"}>
          Organic Fruit & Vegetables
        </Typography>
        <Typography variant="p" component={"p"} mt={2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
          text ever since the <br /> 1500s, when an unknown printer took a
          galley...
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            mt: 8,
            alignItems: "center",
          }}
        >
          <Typography>Order now</Typography>
          <IconButton sx={{ backgroundColor: "green", color: "white" }}>
            <ArrowRightAlt />
          </IconButton>
        </Box>
      </Box>

      <Grid container alignItems={"center"} mt={8}>
        <Grid item lg={9} sx={{ textAlign: "center" }}>
          <img
            src="https://www.linkpicture.com/q/photo_2023-01-10_23-23-07-removebg-preview.png"
            alt=""
          />
        </Grid>
        <Grid item={3} >
          <Box sx={{padding:"10px  50px", background:"white", borderRadius:"7px"}}>
            <Box sx={{display:"flex", gap:"30px", alignItems:"center"}}>
            <Box>
            <IconButton >
                <Person sx={{color:"green"}} />
              </IconButton>
            </Box>           
              <Typography variant="h4" component={"h5"} sx={{fontWeight:"bold", textAlign:"center"}}>
                30K <br />
                <span style={{fontSize:"18px", textAlign:"center"}}>User Order</span>
              </Typography>
            </Box>
          </Box>
          <Box sx={{padding:"10px  50px", background:"white", borderRadius:"7px", mt:2}}>
            <Box sx={{display:"flex", gap:"30px", alignItems:"center"}}>
            <Box>
            <IconButton >
                <Star sx={{color:"gold"}} />
              </IconButton>
            </Box>           
              <Typography variant="h4" component={"h5"} sx={{fontWeight:"bold", textAlign:"center"}}>
                20K <br />
                <span style={{fontSize:"18px", textAlign:"center"}}>Reviews(4.8)</span>
              </Typography>
            </Box>
          </Box>
          <Box sx={{padding:"10px  50px", background:"white", borderRadius:"7px", mt:2}}>
            <Box sx={{display:"flex", gap:"30px", alignItems:"center"}}>
            <Box>
            <IconButton >
                <Person sx={{color:"green"}} />
              </IconButton>
            </Box>           
              <Typography variant="h4" component={"h5"} sx={{fontWeight:"bold", textAlign:"center"}}>
                30K <br />
                <span style={{fontSize:"18px", textAlign:"center"}}>User Order</span>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
