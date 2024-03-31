// VideoList.js
import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@mui/material";

const VideoList = ({ videos }) => {
  return (
    <Grid container spacing={3}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <VideoItem video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoList;
