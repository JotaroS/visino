import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-feather';
import Counter from './Counter';
class Sample extends Component{
    constructor(props){
        super(props);
        this.state={
            bodyText: "vadim blyat",
            Counters : []
        }
        // this.Counters = [<Counter />,<Counter />];
    }
    onButtonClick = ()=>{
        const array = this.state.Counters;
        array.push(array.length+1);
        this.setState({Counters:array});
    }

    onDelete = (id)=>{

    }
    render(){
        return(
            <Row>
                <Col md={6}>
                <Card>
                    <Card.Header as="h6">Logger</Card.Header>
                    <Card.Body>
                        <Card.Title>incoming message:</Card.Title>
                        <Card.Text>
                        {this.state.Counters.map(()=>(<Counter />))}
                        </Card.Text>
                        <Button variant="primary" onClick={this.onButtonClick}>
                            Go somewhere
                        </Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        );
    }
}

export default Sample;