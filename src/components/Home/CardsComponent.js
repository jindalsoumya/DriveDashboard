import { Component } from  'react';
import Container from '@material-ui/core/Container'
import Rating from '@material-ui/lab/Rating';
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import './CardsStyling.css'
import data from './data.json'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FastForwardIcon from '@material-ui/icons/FastForward';
import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon fontSize="large"/>,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon fontSize="large"/>,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon fontSize="large"/>,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon fontSize="large"/>,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon fontSize="large"/>,
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
                    IconContainerComponent={IconContainer} readOnly/>
                </div>
                {acc ? (
                    <Card className = "cards-card">
                        <CardHeader
                            avatar={
                                <FastForwardIcon fontSize="large"/>
                            }
                            title="Pushing Metal"
                            className = "cards-head"
                        />
                        <CardContent className = "cards-desc">
                            You rapidly accelerated {acc} times in your trip.
                        </CardContent>
                    </Card>
                ) : (
                    <div>
                    </div>
                )}
                {brake ? (
                    <Card className = "cards-card">
                        <CardHeader
                            avatar={
                                <SlowMotionVideoIcon fontSize="large"/>
                            }
                            title="Brakes make Tear"
                            className = "cards-head"
                        />
                        <CardContent  className = "cards-desc">
                            You braked hard {brake} times in your trip.
                        </CardContent>
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