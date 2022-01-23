import { Card,CardActionArea, Grid, Typography, CardContent, Hidden, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    card:{
        display:"flex",

    },
    cardDetails:{
        flex:1,
    },
    cardMedia:{
        width:160,
    },

});
    const PostCards = ({post}) => {
    const classes = useStyles();
  return <Grid item xs ={12} md={6}>
    <CardActionArea href="#">
        <Card className={classes.card}>
        <div className={classes.cardDetails}>
            <CardContent >
                <Typography variant="h5" component="h2">
                    {post.title}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    {post.date}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    {post.description}
                </Typography>
                <Typography variant="subtitle1" style={{color:"skyblue"}}>
                    continue reading...
                </Typography>
            </CardContent>
            </div>
            <Hidden xsDown>
                <CardMedia
                className={classes.cardMedia}
                image={post.image}
                title={post.imageTitle}
                />
            </Hidden>
        </Card>
    </CardActionArea>

  </Grid>;
};

export default PostCards;
