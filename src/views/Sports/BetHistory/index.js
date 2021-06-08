import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Card, CardBody, CardImg, Col, CardImgOverlay } from "reactstrap"
import {getSelectedItem, get_sports_lists} from "../../../redux/actions/sports/index"


export class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allData : null,
            team : this.props.location.state
        }
    }

    async componentDidMount(){

    }

    render() {
        return (
            <div className='sports-events'>
                <Row>
                    <Col sm='12'>
                        <Row>
                            <Col sm='12'>
                                <div className='sports-events-title'>{'My Bet History'}</div>  
                            </Col>
                        </Row>
                        <Card className="text-white">
                            <CardImg bottom className="img-fluid" src={'https://sportsbet.io/sports/assets/img/worldcup/3.jpg'} alt="card image cap" />
                            <CardImgOverlay className="d-flex flex-column justify-content-between">
                            <CardBody>
                                <div style={{textAlign:'center', color:'white', fontSize:'2rem'}}>

                                </div>
                            </CardBody>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <h1> Hello World! </h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selecteData : state.sports.select_outcomes_data
})

const mapDispatchToProps = {
    getSelectedItem, get_sports_lists
}

export default connect(mapStateToProps, mapDispatchToProps )(Events)
