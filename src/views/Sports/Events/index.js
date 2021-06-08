import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Card, CardBody, CardImg, Col, CardImgOverlay } from "reactstrap"
import SportsEventItem from './SportsEventItem'
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
        if(!this.props.location.state.market){
            await this.props.get_sports_lists();
        }
        // console.log("-----------------------" , this.props.location.state);
        // await this.props.getSelectedItem(this.props.location.state);
        this.setState({allData: this.props.location.state.market});
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(this.props.selecteData !== prevProps.selecteData){
    //         this.setState({allData: this.props.selecteData});
    //     }
    // }
    
    render() {
        return (
            <div className='sports-events'>
                <Row>
                    <Col sm='12'>
                        <Row>
                            <Col sm='12'>
                                <div className='sports-events-title'>{'Soccer  >  Poland   >   Ekstraklasa'}</div>
                            </Col>
                        </Row>
                        <Card className="text-white">
                            <CardImg bottom className="img-fluid" src={'https://sportsbet.io/sports/assets/img/worldcup/3.jpg'} alt="card image cap" />
                            <CardImgOverlay className="d-flex flex-column justify-content-between">
                            <CardBody>
                                <div style={{textAlign:'center', color:'white', fontSize:'2rem'}}>
                                    <span>{this.state.team.AwayCompetitor.Name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span>
                                    {
                                        (this.state.team.Status.AwayScore==="null" || !this.state.team.Status.AwayScore ? 0 + " - " + 0 :
                                        this.state.team.Status.AwayScore+' - '+this.state.team.Status.HomeScore)
                                    }
                                    </span>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.team.HomeCompetitor.Name}</span>
                                </div>
                                <div style={{textAlign:'center', color:'white', fontSize:'1.5rem'}}>
                                {
                                    this.state.team.ScheduledTime
                                    // .slice(this.state.team.ScheduledTime.indexOf(':')-2,this.state.team.ScheduledTime.indexOf(':')+3)
                                }
                                </div>
                            </CardBody>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col xs='12' lg='9'>
                        {
                            this.state.team.MarketStatus !== "Suspended" ? (
                                this.state.allData && this.state.allData.length ? this.state.allData.map((Item, index)=>(
                                    <SportsEventItem team={this.state.team} Item={Item} key={index}/>
                                )):<h1> Any market doens't exist! </h1>
                            ) : <h1> Attention! All markets Suspend </h1>
                        }
                    </Col>
                    <Col xs='12' lg='3'>

                    </Col>
                </Row>
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
