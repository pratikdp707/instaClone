import { Avatar } from '@material-ui/core'
import React from 'react'
import './InfoSection.css'
import profile from '../../images/pp1.png'

const InfoSection = () => {
  return (
      <>
        <div className='info_container'>
            <Avatar className='info_image' src={profile}></Avatar>
            <div className='info_content'>
                <div className='info_username'>parate_prateek</div>
                <div className='info_desc'>Description</div>
            </div>
        </div>
      </>
  )
}

export default InfoSection