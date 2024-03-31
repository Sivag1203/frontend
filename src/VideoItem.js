// VideoItem.js
import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoItem = ({ video }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={video.thumbnail}
        alt={video.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {video.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {video.channelName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {video.views} views
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoItem;
