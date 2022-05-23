import React from 'react'
import './Navbar.css'
import Grid from "@material-ui/core/Grid";
import insta_logo from "../../images/logoinsta.png";
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg'
import Avatar from '@material-ui/core/Avatar';
import profile from '../../images/pp1.png';

const Navbar = () => {
  return (
    <>
        <div className='navbar_barcontent'>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <img className='navbar_logo' src={insta_logo} width="105px"></img>
                </Grid>
                <Grid item xs={3}>
                    <input type="text" className='navbar_search' placeholder="Search"></input>
                </Grid>
                <Grid item xs={3} style={{"display":"flex"}}>
                    <img className = 'navbar_img' src={home} width="25px"></img>
                    <img className = 'navbar_img' src={message} width="25px"></img>
                    <img className = 'navbar_img' src={find} width="25px"></img>
                    <img className = 'navbar_img' src={react} width="25px"></img>
                    <Avatar className = 'navbar_img' src={profile} style={{"maxWidth":"25px", "maxHeight": "25px"}}></Avatar>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    </>
  )
}

export default Navbar