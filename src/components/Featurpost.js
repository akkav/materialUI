import { Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
        fontSize:40,
        fontFamily: 'Montserrat', 
    },
    cover:{
        padding:"35px 25px",
    }
});

const Featuredpost = () => {
    const classes = useStyles();
  return (
      <Card className={classes.cover}>
          <CardContent className={classes.textContainer}>
              <Typography className={classes.title} >
                  Title of the post
              </Typography>
              <Divider />
              <Typography variant='h6'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero quasi aliquid molestiae magnam quo cupiditate laboriosam? Accusamus rerum pariatur enim ullam repellendus.
              </Typography>
          </CardContent>
          <CardActions>
              <Button variant='text'>Read More...</Button>
          </CardActions>
      </Card>
  )
};

export default Featuredpost;
