import { Divider, Card, CardActionArea, Grid, Typography, CardContent, Hidden, CardMedia, Container } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { width } from '@mui/system';

const useStyles = makeStyles({
    card:{
        display:"flex",
        padding:"5px 25px",
        height:50,
        '&:hover': {
            height:150,
            transition: "all 0.3s ease",
        }

    },
    cardDetails:{
        flex:1,
    },
    cardMedia:{
        width:160,
    },

    left:{
        float:"left",
    },
    right:{
        float:"right",
    },

});

 const chargingcards =  ({data}) => {
    const classes = useStyles();
  return (
    <Grid item xs ={12} spacing={3}>
    <CardActionArea href="#">
        <Card className={classes.card}>
        <div className={classes.cardDetails}>
            <CardContent >
                <Typography variant="h5" component="h2" gutterBottom>
                    Charging StationID:{data.chargingStationid}
                </Typography>
                <Divider />
                <div className={classes.container}>
                <div className={classes.left}>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                    Total Time:{data.totalTime}
                </Typography>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                    Charged Stream:{data.chargedStream}
                </Typography>
                </div>
                <div className={classes.right}>
                <Typography variant="subtitle1" component="h2" gutterBottom>
                    Begin At:{data.beginAt}
                </Typography>
                <Typography variant="subtitle1" component="h2" gutterBottom >
                    End At:{data.endAt}
                </Typography>
                </div> 
                </div>    
            </CardContent>
            </div>
        </Card>
    </CardActionArea>

  </Grid>
  )
};

export default chargingcards;
