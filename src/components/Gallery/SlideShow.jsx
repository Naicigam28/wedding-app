import {
  Avatar,
  Card,
  
  CardHeader,
  CardMedia,
  Grid,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { getApps, initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import firebaseConfig from "../../Firebase/keys";
import { getFileURL } from "../../Firebase/storage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Spinner from "../Spinner/Spinner";

function SlideShow() {
  const [posts, setPost] = useState([]);
  const [expanded, setExpanded] = React.useState(-1);
  const [loading,setLoading]=useState(false)
  
  const handleExpandClick = (index) => {
    if (index !== expanded) {
      setExpanded(index);
    }
    else{
        setExpanded(-1)
    }
  };
  useEffect(() => {
    setLoading(true)
    if (getApps().length === 0) {
      initializeApp(firebaseConfig);
    }
    const db = getDatabase(getApps()[0]);
    const postsRef = ref(db, `posts`);
    onValue(postsRef, async (snapshot) => {
      let data = [];
      for (const [, value] of Object.entries(snapshot.val())) {
        for (const [postKey, postValue] of Object.entries(value)) {
          data.push({
            date: postKey,
            ...postValue,
            url: await getFileURL(postValue.path),
          });
        }
      }
      console.log(data);
      setPost(data);
      setLoading(false)
    });
  }, []);
  return (
    <>
   {loading&&<Spinner/>} 
      <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center" justifyItems={"center"} spacing={2} sx={{minHeight:"50vh"}}>
        {posts.map((post, index) => {
          return (
            <Grid item md={4} key={index}>
              <Card sx={{backgroundColor:"#E8C7C8"}}>
                <CardHeader
                  avatar={<Avatar>{post.user[0]}</Avatar>}
                  title={post.title}
                  subheader={new Date(post.date).toDateString()}
                />
                <CardMedia
                  component="img"
                  sx={{ minWidth:"50vh", width: "100%", height: 500 ,objectFit: "contain"}}
                  image={post.url}
                />
                
                <ExpandMore
                  expand={expanded === index}
                  onClick={() => {
                    handleExpandClick(index);
                  }}
                  aria-expanded={expanded === index}
                  aria-label="show more"
                >
                  {expanded !== index && <Typography variant="subtitle1">Read message</Typography>}
                  <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <Typography paragraph>{post.message}</Typography>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default SlideShow;
