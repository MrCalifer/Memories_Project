import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../Posts/Post";
import Form from "../Form/Form";
import { getPost } from "../../actions/posts";
import { useDispatch } from "react-redux";

export const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(getPost());
  }, [disptach]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
