import React, { useState  } from 'react';
import clsx from 'clsx';

import axios from "axios";
import  firebase from "../../util/config.js"   ;


import {Grid,Container,Box,Hidden,Avatar,Card, CardContent,Typography,GridList, Divider,IconButton,Button,
TextField,DialogActions,InputBase} from '@material-ui/core';
import NavBar from '../actualite/drawer';
import Discussions from '../actualite/Discussions'
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Publication from '../actualite/publication'
import SwipeableViews from 'react-swipeable-views';
import {FiEdit} from 'react-icons/fi';
import {AiOutlineCamera} from 'react-icons/ai'
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider,KeyboardDatePicker,DatePicker,TimePicker,DateTimePicker,} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
        overflow: 'hidden',
      },
      image:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 150,
        width: 150,
        bottom: 120,
        boxShadow: '0 6px 21px 0 rgb(0 0 0 / 12%)',
        border: '3px solid white',
    
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
      root2: {
        marginBottom:20,
        marginTop:20,
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      formControl: {
        margin: theme.spacing(1),
       
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      margin: {
        margin: theme.spacing(1),
      },
      
      textField: {
        width: '25ch',
      },
      
  }));
 
  

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={5}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  
  
 
  






function Profil (){ 

  const token = localStorage.FBIdToken;
  axios.defaults.headers.common['Authorization'] = token;




  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [formation, setFormation] =useState("")
  const [email, setEmail] = useState("")
  const [uid, setUid] = useState("")
  const [image, setImage] = useState("")
  const [bio, setBio] = useState("")
  //information a ajouter 
  
  const [universite, setUniversite] = useState("")
  const [faculte, setFaculte ]= useState("")
  const [departement, setDepartement] = useState("")
  const [specialite, setSpecialite] = useState("")
  //const [niveau, setNiveau] = useState("")

 


  axios  
  .get ("http://localhost:5000/etudiant-e96f9/us-central1/api/user")
  
  .then((res) => { 
  
    const user = res.data; 

    setEmail(user.credentials.email);
    setNom(user.credentials.nom);
    setPrenom(user.credentials.prenom);
    setFormation(user.credentials.formation);
    setUid(user.credentials.uid); 
    setImage(user.credentials.imageUrl);
   setBio(user.credentials.bio);
  setDepartement(user.credentials.departement);
  
     
  })
   .catch((err) => console.log(`erreur sur les informations est  =${err}`));


/////////////////////////////////////




























////////////editinfo user/////////////////
const handleEdit =async (e)=>{ 
 
  e.preventDefault();

 
   const EditUserdata = {
     nom:nom,
     prenom:prenom,
     email: email,
     bio:bio,
     universite:universite,
     faculte:faculte, 
     departement:departement,
     specialite:specialite,
      
   };
  


  axios
  .post('http://localhost:5000/etudiant-e96f9/us-central1/api/user',EditUserdata) 
  
   .then((res) => {
    window.alert(res.data.message) ;
   axios.defaults.headers.common['Authorization'] = token;

   axios  
  .get ("http://localhost:5000/etudiant-e96f9/us-central1/api/user")
  
  .then((res) => { 
  
    const user = res.data; 

    setEmail(user.credentials.email);
    setNom(user.credentials.nom);
    setPrenom(user.credentials.prenom);
    setFormation(user.credentials.formation);
    setUid(user.credentials.uid); 
    setImage(user.credentials.imageUrl);
   setBio(user.credentials.bio);
  setDepartement(user.credentials.departement);

  console.log(user)  ;
     
  })
   .catch((err) => console.log(`erreur sur les informations est  =${err}`));










    
 })
 .catch((error) =>{
   console.log(error.response.data);
  })
    
  //handleClose() 
   
};


/////////////////////////////////


  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    
    setValue(index);
  };

  const handleClickOpen = () => {

    setOpen(true);}
  

  const handleClose = () => {
    setOpen(false);
  };

 
    const [state, setState] = React.useState({
      age: '',
      
  });

  const change = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [val, setVal] = React.useState({
   
    password: '',
    
    showPassword: false,
  });

  const pChange = (prop) => (event) => {
    setVal({ ...val, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setVal({ ...val, showPassword: !val.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };











  //partie front 
    return (
        <div className={classes.root}>

           <Grid container spacing={2}>

           <Container maxWidth="lg"  style={{padding:0 ,}} >



             {/***********************************  Navbar**************************************** */}

                <Grid  lg={1} >
                   
                    <NavBar/>

                </Grid>



             {/*********************************** Top image**************************************** */}

                    <Grid item xs={10} sm={9} md={10} lg={12 }xl={12}className={classes.topimg} 
                    style={{ marginTop:100, marginRight: 60 ,marginLeft: 60,height:250 ,}} > 

                       <img ms={2} src={process.env.PUBLIC_URL + '/images/covert.jpg'}

                    style={{width:'100%',height:'100%',objectFit: 'cover',borderRadius: '20px 20px 0px 0px'}} />
 
              
                    


                  {/***********************************  nom utilisateur**************************************** */}
                  <Card>
                <CardContent>

     <h6 style={{fontSize:23,fontWeight:700,textAlign:'center', marginTop: 35,marginBottom:30}}> {email} <br/>
     <IconButton onClick={handleClickOpen}> <FiEdit  color='blue' /></IconButton></h6>

      
                </CardContent>
            </Card>
            
        </Grid>



            {/***********************************  photo de profile**************************************** */}

        <Avatar className={classes.image}  src={image}/>





            {/***********************************  modifier le profil**************************************** */}



            <div>
     
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    
                  >
                    <DialogTitle >
                    <Typography style={{color:'black', fontWeight:700,fontSize:18,textAlign:'center'}}>modifier le profil</Typography>

                    <IconButton aria-label="close"  className={classes.closeButton} onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                                
                    </DialogTitle>
                    <DialogContent>
                      <Typography style={{color:'grey', fontWeight:600,marginBottom:15}}>Vos Informations</Typography>
                    <form className={classes.root2}>
                            <TextField size="small"  variant="outlined" label="Nom"defaultValue={nom} onChange={(e) => setNom(e.target.value)} />
                            <TextField size="small"  variant="outlined" label="Prénom"defaultValue={prenom} onChange={(e) => setPrenom(e.target.value)} />
                            <TextField size="small" type="email"  variant="outlined" label="Adresse Mail"defaultValue={email}/>
                            
                            <TextField size="small" variant="outlined" label="date de naissance" defaultValue="23/12/96" />

                      
                    {/**  <MuiPickersUtilsProvider utils={DateFnsUtils}>
   
                                  <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Date de naissance"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{'aria-label': 'change date',}} />
                              
                            </MuiPickersUtilsProvider> */} 



                            <TextField style={{width:'40ch'}} variant="outlined" label="Bio" multiline rows={4}
                            
                            defaultValue={bio}  onChange={(e)=>setBio(e.target.value)} />

                    </form>

                    <Divider/>



                    <form className={classes.root2}>
                <TextField size="small"  variant="outlined" label="Université" defaultValue={universite} onChange={(e) => setUniversite(e.target.value)} />
                <TextField size="small" style={{ width: '40ch'}}  variant="outlined" label="Faculté" defaultValue={faculte} onChange={(e) => setFaculte(e.target.value)}/>
                <TextField size="small" variant="outlined" label="Département" defaultValue={departement} onChange={(e) => setDepartement(e.target.value)}/>
                <TextField size="small" variant="outlined" label="Spécialité" defaultValue={specialite} onChange={(e) => setSpecialite(e.target.value)}/>
                <FormControl size="small"  htmlFor="outlined-age-native-simple">
                  <InputLabel>Niveau</InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={change}
                    label="Age"
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                      
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={1}>L1</option>
                    <option value={2}>L2</option>
                    <option value={3}>L3</option>
                    <option value={4}>Master 1</option>
                    <option value={5}>Master 2</option>

                        </Select>
                      </FormControl>
                    
                      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={val.showPassword ? 'text' : 'password'}
            value={val.password}
            onChange={pChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {val.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

                    </form>
                    </DialogContent>



                    <DialogActions >



                      <Button variant="outlined" style={{color:'white',backgroundColor:'#50b5ff'}} onClick={handleEdit} >
                        Modifier
                      </Button>
                    
                    </DialogActions>
                  </Dialog>
    </div>
      

   







         {/*********************************** infos de compte**************************************** */}

                           
        <Grid   item xs={10} sm={9} md={10} lg={12 }xl={12} style={{  marginRight: 60 ,marginLeft: 60,}} >  
 


        <AppBar position="static" color="white" style={{marginTop:20}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          variant="scrollable"
          scrollButtons="on"
         
        >
          <Tab  style={{textTransform:'lowercase '}}label="publications" {...a11yProps(0)} />
          <Tab  style={{textTransform:'lowercase '}}label="à propos" {...a11yProps(1)} />
          <Tab style={{textTransform:'lowercase '}} label="abonnés et abonnements" {...a11yProps(2)} />
          <Tab  style={{textTransform:'lowercase '}}label="photos " {...a11yProps(3)} />
          <Tab  style={{textTransform:'lowercase '}}label="vidéos " {...a11yProps(4)} />
          <Tab  style={{textTransform:'lowercase '}}label="groupes et pages" {...a11yProps(5)} />
        </Tabs>

      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >




      {/*********************************** publications**************************************** */}

     <TabPanel value={value} index={0} dir={theme.direction}>
         {/*********************************** Bio**************************************** */}

         <Grid xs={12} sm={12} md={12} lg={12} xl={12} spacing={0}
    align="center"
    justify="center" >

<Card style={{ marginBottom: 25,borderRadius:20,backgroundColor: 'rgb(162 150 150 / 15%)',  
 backdropFilter: 'blur(5px)' }}>

 <CardContent> 
 

  

   <Typography style={{ fontSize:15, }}>
               
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
         sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
   </Typography>
 </CardContent>

 </Card>
  </Grid>
          
     <Grid item xs={12} style={{ marginTop:10,}} >
         
         <Box display="flex" >
        

         <Grid item xs={12} sm={12} lg={8} style={{ marginRight: 25, }}>



            


              {/*********************************** pub**************************************** */}
         
         <Publication/>
       </Grid>


      {/***********************************groupes et photos **************************************** */}

    <Hidden only={['xs', 'sm']}>

       <Grid item xs={4} sm={4} lg={4} >
     




<Card style={{ marginBottom: 25,borderRadius:15 }}>
         <CardContent>
           <h6 style={{fontSize:17,fontWeight:700,marginTop: 10 ,marginBottom: 30,}}> Photo Gallery</h6>


           <GridList cellHeight={76}  className={classes.gridList} cols={3}>
        
            <img src={process.env.PUBLIC_URL + '/images/i9.jpg'}  />
            <img src={process.env.PUBLIC_URL + '/images/img.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/img5.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/img6.png'} />
       
      </GridList>
          
         </CardContent>
       </Card>





       <Card style={{ marginBottom: 25,borderRadius:15 }}>

<CardContent>


  <Typography style={{ marginBottom: 25,fontSize:19,fontWeight:700, }}>
    Mes groupes

  </Typography>
        <Box display='flex'style={{marginBottom:15,marginTop:10}}>

        <Avatar  src={process.env.PUBLIC_URL + '/images/i7.jpg'}/>

        <Typography style={{marginLeft:20,}}>
        <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
        <span style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
        </Typography>
        </Box>

<Divider/>

        <Box display='flex'style={{marginBottom:15,marginTop:10}}>

        <Avatar  src={process.env.PUBLIC_URL + '/images/i8.jpg'}/>

        <Typography style={{marginLeft:20,}}>
        <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>

       <span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span> 
        </Typography>

        </Box>

        <Divider/>



        <Box display='flex'style={{marginBottom:15,marginTop:10}}>

        <Avatar  src={process.env.PUBLIC_URL + '/images/i10.jpg'}/>

        <Typography style={{marginLeft:20,}}>
        <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
        <span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
        </Typography>

        </Box>

        <Divider/>



        <Box display='flex' style={{marginBottom:15,marginTop:10}}>
        <Avatar  src={process.env.PUBLIC_URL + '/images/img4.jpg'}/>

        <Typography style={{marginLeft:20,}}>
       <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
        <span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
        </Typography>

        </Box>

         <Divider/>

</CardContent>

</Card>
       </Grid>

</Hidden>

       </Box>
       </Grid>


        </TabPanel>


    {/*********************************** a propos**************************************** */}

        <TabPanel value={value} index={1} dir={theme.direction}>
        <h3> EMAIL = {email}</h3>
          <h3> NOM = {nom}</h3>
         <h3> PRENOM = {prenom}</h3>
         <h3>FORMATION= {formation}</h3>
         <h3>Bio = {bio}</h3>
         <h3>DEPARTEMENT= {departement}</h3>
         <h3>SPECIALITE={specialite}</h3>
         <h3>UNIVERSITE={universite}</h3>
        </TabPanel>



     {/***********************************  abonnes**************************************** */}

        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Two
        </TabPanel>



       {/*********************************** photos**************************************** */}

        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>


        {/***********************************  vidéos**************************************** */}

        <TabPanel value={value} index={4} dir={theme.direction}>
          Item 4
        </TabPanel>



        {/***********************************  groupes et pages**************************************** */}

        <TabPanel value={value} index={5} dir={theme.direction}>
          Item 5
        </TabPanel>


        </SwipeableViews>
</Grid>
      






                
                    <Grid item  >
                    <Hidden only={['xs','sm']}>
                    <Discussions/>     
                    </Hidden>

                </Grid>
                
           </Container>
           </Grid>




        </div>

    )
}export default Profil;