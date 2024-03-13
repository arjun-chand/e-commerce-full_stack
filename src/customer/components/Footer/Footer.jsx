import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:'black',color:"whitesmoke",py:3}}>

        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >About</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Blog</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Press</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Jobs</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Partnership</Button></div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5' variant='h6'>Solutions</Typography>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6'>Marketing</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Analytics</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Commerce</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Insight</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Support</Button></div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5' variant='h6'>Documentation</Typography>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Guids</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >API status</Button></div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5' variant='h6'>Legal</Typography>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Claim</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >Privacy</Button></div>
            <div> <Button sx={{color:"whitesmoke"}} className='pb-5' variant='h6' >terms</Button></div>
        </Grid>

        <Grid className='pt-20' item xs={12}>
          <Typography variant='body2' component="p" align='center'>
            &copy; 2024 Company. All rights reserved
          </Typography>
          <Typography variant='body2' component="p" align='center'>
            Made with Love By Arjun Chand
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
