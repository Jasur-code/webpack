import { LocalGroceryStore, Public, Search } from '@mui/icons-material'
import { Box, Button, Grid, IconButton } from '@mui/material'
import React from 'react'

const Pages = [
  {
    title:"About Us"
  },
  {
    title:"Service"
  },
  {
    title:"Menu"
  },
  {
    title:"Contact"
  }
]

export default function Header() {

  return (
    <Box sx={{py:3}}>
        <Grid container alignItems={"center"}>
            <Grid item lg={5} sx={{px:6}} >
              <ul style={{display:"flex", gap:"45px"}}>
                {Pages.map((v,i) => (
                  <li key={i} style={{listStyle:"none", color:""}}>{v.title}</li>
                ))}
              </ul>
            </Grid>
            <Grid item lg={3} sx={{display:"flex",  justifyContent:"center"}}>
                  <Public sx={{fontSize:"40px", color:"green"}}/>
            </Grid>
            <Grid item lg={4} sx={{display:"flex", gap:"15px", justifyContent:"center"}}>
              <IconButton>
                <Search/>
              </IconButton>
              <IconButton>
                <LocalGroceryStore/>
              </IconButton>
              <Button variant='contained' color='success' >Register Now</Button>
            </Grid>
        </Grid>
    </Box>
  )
}
