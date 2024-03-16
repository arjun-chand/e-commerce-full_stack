import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarBorder } from '@mui/icons-material'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-lg py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className="py-20">
            <OrderTracker activeStep={3}/>
        </div>
        <Grid className='space-y-10' container >
          {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl round-md border' sx={{alignItems:"center", justifyContent:"space-between"}}>
            <Grid item sx={6}>
              <div className='flex items-center space-x-4'>
                <img className='ml-5 w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnS9JmefKcht8nDekuiVoIqMVJj5Xx2So2RyeO8NUaaCkz8xfeN0sN1qZ32lwchJkOxZH5WI0C-yDsuoPSEFcjiflGdY2-IFz4h0oe7MmTy5-sQjZyVMuHSSIclv-EpKuJte09-VY&usqp=CAc" alt="" />

                <div className='space-y-2 ml-5'>
                  <p className='font-semibold'>Men's Purple Beast Within Graphic Printed Oversized T-shirt</p>
                  <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Pink</span><span> Size: M</span></p>
                  <p>Seller: Bewakoof</p>
                  <p>₹839</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{color:deepPurple[500]}}>
                <StarBorder sx={{fontSize:"2rem"}} className='px-2'/>
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>)}
          
        </Grid>
    </div>
  )
}

export default OrderDetails