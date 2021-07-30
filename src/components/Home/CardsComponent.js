import { Component } from  'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import './CardsStyling.css'

class Cards extends Component{
    render() {
        return (
            <Container className = "cards-container">
                Recent Activity
                <Card>
                    Some card
                </Card>
            </Container>
        )
      }
};
export default Cards;