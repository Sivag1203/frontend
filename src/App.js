import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import { api } from "./Global";
import { Container } from "@mui/material";

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchVideos(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchVideos = () => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setVideos(
          data.filter((video) => {
            return video.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        );
      })
      .catch((error) => console.error("Error fetching videos:", error));
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: "#001523" }}>
      <SearchBar setSearchQuery={setSearchQuery} />
      {loading ? <Loader /> : <VideoList videos={videos} />}
    </Container>
  );
}

export default App;
