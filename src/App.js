import { Container, Grid } from "@mui/material";
import React from "react";
import MenuAppBar from "./components/appbar";
import './App.css';
import Featuredpost from "./components/Featurpost";
import { featuredPosts } from "./data";
import PostCards from "./components/PostCards";
import { dummydata } from "./dummydata";
import ChargingCards from "./components/chargingcards";
import BottomBar from "./components/bottombar";
function App() {
  return (
    <Container>
      <MenuAppBar />
      <Featuredpost />
      <br />
      <Grid container spacing={4}>
        {
          featuredPosts.map((post, index) => (
              <PostCards key={index} post={post} />
          ))
        }
      </Grid>
      <br />
      <Grid container spacing={4} mb={20}>
        {
          dummydata.map((data,index) =>(
            <ChargingCards key={data.id} data={data} />
          ))
        }
      </Grid>
      <BottomBar />
    </Container>
  );
}

export default App;
