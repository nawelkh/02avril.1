
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { addPost, getPosts } from "../../actions/post.actions";

import  axios from 'axios'





import { makeStyles,Divider,TextField ,Box,Grid,Typography, IconButton,Avatar,CardActions,CardContent,Card } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";



const useStyles = makeStyles((theme) => ({
  root: {
     
      '& > *': {
        margin: theme.spacing(1),
        height:50,
      
        marginLeft: 20,
        
      },
      '& .MuiInput-underline':{
         border:0,
      },
    },
   
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    
    },
    
    
    expand: {
     
      marginLeft: 'auto',
    
    },
    input: {
      display: 'none',
    },
   
  }));



export default function AddPub() {
  


  const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };






  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState("");
  const userData = useSelector((state) => state.userReducer.credentials);
  const dispatch = useDispatch();
 
 
  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);} ,[userData]);
 
 


    const handlePost = async () => {
      const token = localStorage.FBIdToken;
      axios.defaults.headers.common['Authorization'] = token; 

     if (messages){
      const data ={
        email: userData.email,
      body: messages,
      nom:userData.nom,
      prenom:userData.prenom,
     userImage:userData.userImage,};


        await dispatch(addPost(data));
        dispatch(getPosts());
        
      } else {
        alert("Veuillez entrer un message")
      }
    };






  const classes = useStyles();

  


    return (
  
     


<Card  style={{ marginBottom:20,}}>

{isLoading ? (
        <i> coucou </i>
      ) : (
        <>



      <CardContent>
      <Box display="flex"alignItems="center"
        style={{height:50
        }}
        
        >
          <Avatar alt="Remy Sharp" src={userData.imageUrl} />
          <TextField id="outlined-basic"  placeholder="Ajoutez un text"
              multiline 
              rows={3}
              className={classes.root}
              name="messages"
             
              value={messages}
              onChange={(e)=> setMessages(e.target.value)}
              
              /> 
      

        </Box>
       
        
      </CardContent>
     <Divider />
     
      <CardActions disableSpacing >
        

      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
      <IconButton >
        <AddPhotoAlternateIcon  style={{ color: 'darkmagenta', }}/>

        </IconButton>
      </label>


       
        <IconButton 
        
        
        >
        <EmojiEmotionsIcon  style={{ color: '#ffc700', }}/>
      
        </IconButton>

       
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
      <IconButton >
        <AttachFileIcon  style={{ color: 'blue',}}/>
        </IconButton>
      </label>




       
   
        <IconButton style={{ color: 'crimson',}}
          className={classes.expand}
          onClick={handlePost}
        >
         <SendIcon/>
        </IconButton>
      </CardActions>
      </>
      )}
  
    </Card> 

  


    )
}
