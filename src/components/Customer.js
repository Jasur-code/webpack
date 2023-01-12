import { Apple, ChevronLeft, ChevronRight, Google } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Rating, Typography } from "@mui/material";
import React from "react";

export default function Customer() {
  return (
    <Box sx={{ mt: 10 }}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item lg={5}>
          <Typography variant="h2" component={"h3"} sx={{ fontWeight: "bold" }}>
            What Our Customers About Us saying
          </Typography>
          <Typography variant="p" component={"p"} sx={{ mt: 3, color: "gray" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text{" "}
            <br />
            ever since the 1500s, when an unknown printer took a galley of type{" "}
            <br />
            and scrambled it to make a type specimen book. It has survived not{" "}
            <br />
            only five centuries, but also the leap into electronic typesetting,{" "}
            <br />
            remaining essentially unchanged. It was popularis
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-between ", mt: 4 }}
          >
            <Box>
              <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Ahmed Hridoy
              </Typography>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
            </Box>
            <Box>
              <IconButton sx={{ mr: 4 }}>
                <ChevronLeft />
              </IconButton>
              <IconButton sx={{ background: "green", color: "#fff" }}>
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={5} sx={{ textAlign: "center" }}>
          <img
            style={{ width: "346px" }}
            src="https://www.linkpicture.com/q/img5_3.jpg"
            alt=""
          />
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} alignItems={"center"} mt={16}>
        <Grid item lg={4}>
          <Box sx={{ position: "relative", ml: 7 }}>
            <img
              style={{ width: "240px", height: "496px" }}
              src="https://www.linkpicture.com/q/img7_1.jpg"
              alt=""
            />
            <img
              style={{
                width: "220px",
                height: "470px",
                position: "absolute",
                left: "2%",
                bottom: "3%",
                borderRadius: "30px",
              }}
              src="https://www.linkpicture.com/q/img6_1.jpg"
              alt=""
            />
          </Box>
        </Grid>
        <Grid item lg={5}>
          <Box>
            <Typography
              variant="p"
              component={"p"}
              sx={{
                padding: "4px 15px",
                background: "aqua",
                display: "inline-block",
                borderRadius: "16px",
              }}
            >
              Download App
            </Typography>
            <Typography variant="h2" component={"h3"}>
              Simple Way To Order Your Organic Fruit
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{ color: "gray", mt: 3 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...
            </Typography>
            <Box sx={{mt:8}}>
                <Button startIcon={<Apple/>} variant="contained"  sx={{padding:"3px 10px", background:"black"}}>
                   <span style={{fontSize:"8px"}}>Download on the <br /> <span style={{fontSize:"15px"}}> App Store</span> </span>  
                </Button>
                <Button startIcon={<Google/>} variant="contained"  sx={{padding:"3px 10px", background:"black", ml:5}}>
                   <span style={{fontSize:"8px"}}> Get It On <br /> <span style={{fontSize:"15px"}}> Google Play</span> </span>  
                </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
