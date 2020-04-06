import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
                        <code className='logger-code'>vadim blyat vadim blyat<br></br>vadim blyat vadim blyat</code>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        );
    }
}

export default Sample;