import { Component } from  'react';
import Container from '@material-ui/core/Container'
import Rating from '@material-ui/lab/Rating';
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import './CardsStyling.css'
import data from './data.json'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import fast from './fast.svg'; 
import stop from './stop.svg'; 

const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};
  
var acc = 0;
var brake = 0;
var iconval = 0;

class Cards extends Component{
    render() {
        return (
            <Container className = "cards-container">
                <p className = "cards-title">
                    Perfomance Snapshot
                </p>
                {data.segment_stats.data.map((item, index, element) => {
                    if(index < (data.segment_stats.data.length-1))
                    {
                        if((item.speed_mph + 10) < element[index+1].speed_mph)
                        {
                            acc = acc + 1;
                        }
                    }
                })}
                {data.segment_stats.data.map((item, index, element) => {
                    if(index < (data.segment_stats.data.length-1))
                    {
                        if(item.speed_mph > (element[index+1].speed_mph+10))
                        {
                            brake = brake + 1;
                        }
                    }
                })}
                <div>
                    <Rating
                    name="customized-icons"
                    value = {(acc+brake) > 100 ? (
                        iconval = 0
                    ) : (acc+brake) > 80 ? (
                        iconval = 1
                    ) : (acc+brake) > 60 ? (
                        iconval = 2
                    ) : (acc+brake) > 40 ? (
                        iconval = 3
                    ) : (acc+brake) > 20 ? (
                        iconval = 4
                    ) : (
                        iconval = 5
                    )}
                    IconContainerComponent={IconContainer} readOnly 
                    />
                </div>
                {acc ? (
                    <Card className = "cards-card">
                        <Grid container>
                            <Grid item xs={4}>
                                <img src = {fast} className = "cards-image"></img>
                            </Grid>
                            <Grid item xs={8} className = "card-head">
                                Pushing the metal
                            </Grid>
                            <Grid item xs={12} className = "card-desc">
                                You rapidly accelerated {acc} times in your trip.
                            </Grid>
                        </Grid>
                    </Card>
                ) : (
                    <div>
                    </div>
                )}
                {brake ? (
                    <Card className = "cards-card">
                        <Grid container>
                            <Grid item xs={4}>
                                <img src = {stop} className = "cards-image"></img>
                            </Grid>
                            <Grid item xs={8} className = "card-head">
                                Brakes make tear
                            </Grid>
                            <Grid item xs={12} className = "card-desc">
                                You braked hard {brake} times in your trip.
                            </Grid>
                        </Grid>
                    </Card>
                ) : (
                    <div>
                    </div>
                )}
            </Container>
        )
      }
};
export default Cards;