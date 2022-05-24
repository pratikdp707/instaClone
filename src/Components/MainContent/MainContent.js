import React from 'react'
import './MainContent.css'
import Grid from "@material-ui/core/Grid";
import Status from '../Status/Status';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';

const MainContent = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
          <Status/>
          <MainPage/>
        </Grid>
        <Grid item xs={2}>
          <InfoSection/>
          <Suggestions/>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  )
}

export default MainContent