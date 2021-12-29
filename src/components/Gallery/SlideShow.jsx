import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { getApps, initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import firebaseConfig from "../../Firebase/keys";
import { getFileURL } from "../../Firebase/storage";
function SlideShow() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    if (getApps().length === 0) {
      initializeApp(firebaseConfig);
    }
    const db = getDatabase(getApps()[0]);
    const postsRef = ref(db, `posts`);
    onValue(postsRef, async (snapshot) => {
      let data = [];
      for (const [, value] of Object.entries(snapshot.val())) {
        for (const [postKey, postValue] of Object.entries(value)) {
          data.push({ date: postKey, ...postValue ,url: await getFileURL(postValue.path)});
        }
      }
      console.log(data)
      setPost(data);
    });
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post,index) => {
          return (
            <Grid item xs={4} key={index}>
              <Card >
                <CardHeader
                  avatar={<Avatar>{post.user[0]}</Avatar>}
                  title={post.title}
                  subheader={new Date(post.date).toDateString()}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={post.url}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {post.message}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default SlideShow;
