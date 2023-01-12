import { Facebook, Instagram, Public, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{display:"flex",justifyContent:"space-around", padding:"100px 40px"}}>
      <Box>
        <Public sx={{fontSize:"50px", color:"green"}} />
        <p>
          Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
          industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever
          since the 1500s, when <br /> an unknown printer...
        </p>
      </Box>
      <Box>
        <p style={{fontSize:"18px", fontWeight:"bold"}}>Navigate</p>
        <ul style={{listStyle:"none", marginTop:"20px", padding:"0px"}}>
            <li>About Us</li>
            <li>Service</li>
            <li>Menu </li>
        </ul>
      </Box>
      <Box>
        <p style={{fontSize:"18px", fontWeight:"bold"}}>Resources</p>
        <ul style={{listStyle:"none", marginTop:"20px", padding:"0px"}}>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Update News </li>
        </ul>
      </Box>
      <Box>
        <p style={{fontSize:"18px", fontWeight:"bold"}}>Contact Us</p>
         <p>Email: oyasim@email.com</p>
         <div style={{display:'flex', gap:"30px"}}>
            <Facebook/>
            <Twitter/>
            <Instagram/>
         </div>
      </Box>
    </Box>
  );
}
