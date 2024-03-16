import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQnKWYF5JKLCcko8nh4lyNE5HZm-Mg72wM529cvPbkfxKXZrjirjxyzSuKeIqTVRoVDV8S89UbeRUo3wD7G13QQl2LhUnvwzdgcqojCcRQ-QSeXP0JLMxv0jX7MXYxsj39MwMBHsE&usqp=CAc" alt="" />

                <div className="ml-5 space-y-2">
                    <p className=''>Regular Fit T-shirt</p>
                    <p className='opacity-60 font-semibold text-xs'>Size: M</p>
                    <p className='opacity-60 font-semibold text-xs'>Color: Black</p>
                </div>
            </div>

        </Grid>

        <Grid item xs={2}>
            <p>Rs. 399.00</p>
        </Grid>

        <Grid item xs={4}>
            {true && 
            <div> 
                <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>Delivered on Mar 19 2024</span>
                </p>
                <p>
                    <span className='text-xs'>Your Item Has Been Delivered</span>
                </p>
            </div>
           }
            {false && <p>
                <span>Expected Delivery on Mar 19 2024</span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
