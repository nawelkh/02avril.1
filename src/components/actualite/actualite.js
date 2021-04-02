import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid,Box,Hidden,Container} from '@material-ui/core';
import Discussions from './Discussions';
import NavBar from './drawer';
import AddPub from "./addPub";
import Suggestions from "./suggestions";
import Publication from './publication'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontWeight: 400,
    fontStyle: 'normal',   
    fontSize: 14,
    lineHeight: 1.8,
    padding: 0,
    margin: 0,   
    color: '#777D74',
    background: '#fafafb',
    overflow : 'hidden',
  },
 topimg:{

  backgroundImage: 'linear-gradient(to left, #ffea00, #ff9800)',
    borderRadius: 10,
    padding:' 0px 50px',
 },
 title:{
  fontFamily: '"Nunito", sans-serif',
  fontSize: '30px',
  color: '#ffffff',
  fontWeight: 800,
  marginBottom: '8px',
  marginTop:0,
 },
}));

function Actualite() {



  
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
           <Container maxWidth="lg" style={{padding:0 ,}} >
       
          

        <Box >

        <Grid item lg={1} >
        <NavBar/>
        </Grid>
        <Grid item xs={8} sm={8} md={12} lg={12} className={classes.topimg} 
        style={{ marginTop:125,marginRight:50,padding:'0 30px',marginLeft: 55 }}
        > 
        <Box display='flex' >
            
        <Box style={{paddingTop:40}}>
                            <h3 className={classes.title}>UniSwap Members </h3>
                            <p style={{color:'white',marginTop:0}}>Check what your friends have been up to!</p>
                            </Box>
                            <Hidden only={['xs', 'sm']}>

                            <img ms={2} src={process.env.PUBLIC_URL + '/images/i2.png'}
                            style={{marginLeft:'auto',marginBottom:'auto'}}
                            /></Hidden>

        </Box>
       
        </Grid>
      
        <Grid item xs={12} style={{ marginTop:30,}} >
         
          <Box display="flex" >
         

          <Grid item xs={12} sm={12} lg={8} style={{ marginRight: 25,marginLeft:55 }}>
            <Grid xs={12} sm={12} lg={12} >
              <AddPub />
              </Grid>
          
          <Publication/>
        </Grid>
        <Grid item xs={3} >
       <Suggestions/>
        </Grid>
        </Box>
        </Grid>

        
        <Grid item  >
        <Hidden only={['xs','sm']}>
        <Discussions/>     
        </Hidden>
      
           </Grid>
        </Box>
      </Container>
      </Grid>
 
      </div>

    
  );
}

export default Actualite;