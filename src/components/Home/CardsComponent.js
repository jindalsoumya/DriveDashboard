import { Component } from  'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import './CardsStyling.css'
import fast from './fast.svg'; 
import stop from './stop.svg'; 

class Cards extends Component{
    render() {
        return (
            <Container className = "cards-container">
                <p className = "cards-title">
                    Perfomance Snapshot
                </p>
                <Card className = "cards-card">
                    <Grid container>
                        <Grid item xs={4}>
                            <img src = {fast} className = "cards-image"></img>
                        </Grid>
                        <Grid item xs={8}>
                            Pushing the metal
                        </Grid>
                        <Grid item xs={12}>
                            xs=12
                        </Grid>
                    </Grid>
                </Card>
                <Card className = "cards-card">
                    <Grid container>
                        <Grid item xs={4}>
                            <img src = {stop} className = "cards-image"></img>
                        </Grid>
                        <Grid item xs={8}>
                            Brakes make tear
                        </Grid>
                        <Grid item xs={12}>
                            xs=12
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        )
      }
};
export default Cards;