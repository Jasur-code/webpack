import { Person } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

export default function Service() {
  return (
    <Box sx={{ mt: 5, paddingBottom:"150px" }}>
      <Box sx={{ ml: 10 }}>
        <Typography variant="h2" component={"h3"}>
          Why We Aer The Best?
        </Typography>
        <Typography variant="p" component={"p"} sx={{ color: "gray", mt: 2 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
          text ever since the <br /> 1500s, when an unknown printer took a
          galley...
        </Typography>
      </Box>

      <Grid container alignItems={"center"} mt={7}> 
        <Grid item lg={5}>
          <Box
            sx={{
             ml:10,
             width:"400px"     
            }}
          >
            <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <Box>
                <IconButton>
                  <Person sx={{ color: "green" }} />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component={"h5"}
                  sx={{ fontWeight: "bold", }}
                >
                  Fasted delivery Service
                </Typography>
                <Typography variant="p" component={"p"} sx={{fontSize:"14px"}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
             ml:10,
             width:"400px" ,
             mt:4
            }}
          >
            <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <Box>
                <IconButton>
                  <Person sx={{ color: "green" }} />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component={"h5"}
                  sx={{ fontWeight: "bold", }}
                >
                  Fasted delivery Service
                </Typography>
                <Typography variant="p" component={"p"} sx={{fontSize:"14px"}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
             ml:10,
             width:"400px",
             mt:4    
            }}
          >
            <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <Box>
                <IconButton>
                  <Person sx={{ color: "green" }} />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  component={"h5"}
                  sx={{ fontWeight: "bold", }}
                >
                  Fasted delivery Service
                </Typography>
                <Typography variant="p" component={"p"} sx={{fontSize:"14px"}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} sx={{textAlign:"center", mt:"-60px", position:"relative"}}>
            <img style={{width:"300px"}} src="https://www.linkpicture.com/q/service1_1.jpg" alt="" />
            <img style={{position:"absolute", width:"300px", right:"15%", zIndex:"-9999", top:"-6%"}} src="https://www.linkpicture.com/q/service2_1.jpg" alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}
