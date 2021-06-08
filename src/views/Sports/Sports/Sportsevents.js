import React from "react";
import Media from "react-media";
import { Col, Row } from "reactstrap";
import { history } from "../../../history"

class Sportsevents extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
    }
 
    sportsEvent(e){
        history.push('/sportsevent',e)
    }
    
    render() {
        const sportsEvents = this.props.sportsEvents;
        return(
            <Media queries={{
                small: "(max-width: 768px)",
                medium: "(min-width: 769px) and (max-width: 999px)",
                large: "(min-width: 1000px)"
                }}>
                {matches => (
                    <React.Fragment>
                    {matches.small && 
                        <Row className='m-1'>
                            {/* <div className='sports-align-left' style={{width:'calc(100% - 30px)'}}>
                                <Row style={{width:'100%'}}>
                                    <Col xs={8}>
                                        <Row>
                                            <Col xs={8} className='sports-team'>
                                                <div>{sportsEvents.teamName1}</div>
                                                <div>{sportsEvents.teamName2}</div>
                                            </Col>
                                            <Col xs={4} className='sports-score-board'>
                                                <div>{sportsEvents.scoreBoard1}</div>
                                                <div>{sportsEvents.scoreBoard2}</div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='item-center' xs={4}>
                                        <div style={{width:'100%'}}>
                                            <div style={{margin:'0px'}}>{sportsEvents.WINNER[0].odd}</div>
                                            <div style={{margin:'0px', marginLeft:'1px'}}>{sportsEvents.WINNER[1].odd}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='sports-other-markets'>+{sportsEvents.OtherMarkets}</div> */}
                        </Row>
                    }
                    {matches.medium && 
                        <Row className='m-1'>
                            {/* <div className='sports-align-left' style={{width:'calc(100% - 30px)'}}>
                                <Row style={{width:'100%'}}>
                                    <Col sm={6}>
                                        <Row>
                                            <Col sm={8} className='sports-team'>
                                                <div>{sportsEvents.teamName1}</div>
                                                <div>{sportsEvents.teamName2}</div>
                                            </Col>
                                            <Col sm={2} className='sports-start-time'>
                                                {sportsEvents.startTime}
                                            </Col>
                                            <Col sm={2} className='sports-score-board'>
                                                <div>{sportsEvents.scoreBoard1}</div>
                                                <div>{sportsEvents.scoreBoard2}</div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='item-center' sm={6}>
                                        <div style={{width:'100%'}}>
                                            <div>{sportsEvents.WINNER[0].odd}</div>
                                            <div>{sportsEvents.WINNER[1].odd}</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='sports-other-markets'>+{sportsEvents.OtherMarkets}</div> */}
                        </Row>
                    }
                    {matches.large &&
                        <Row className='m-1'>
                            <div className='sports-align-left' style={{width:'calc(100% - 30px)'}}>
                                <Row style={{width:'100%'}}>
                                    <Col sm={6}>
                                        <Row>
                                            <Col sm={8} className='sports-team'>
                                                <div onClick={()=>this.sportsEvent(sportsEvents)}>{sportsEvents.HomeCompetitor.Name}</div>
                                                <div onClick={()=>this.sportsEvent(sportsEvents)}>{sportsEvents.AwayCompetitor.Name}</div>
                                            </Col>
                                            <Col sm={2} className='sports-start-time'>
                                                {sportsEvents.ScheduledTime}
                                            </Col>
                                            <Col sm={2} className='sports-score-board'>
                                                <div>{!sportsEvents.Status.HomeScore ? 0 : sportsEvents.Status.HomeScore}</div>
                                                <div>{!sportsEvents.Status.AwayScore ? 0 : sportsEvents.Status.AwayScore}</div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='item-center' sm={6}>
                                        <div>
                                            <div>{sportsEvents.oneTotwo.one ? sportsEvents.oneTotwo.one : "Lock"}</div>
                                            <div>{sportsEvents.oneTotwo.draw ? sportsEvents.oneTotwo.draw : "Lock"}</div>
                                            <div>{sportsEvents.oneTotwo.two ? sportsEvents.oneTotwo.two : "Lock"}</div>
                                        </div>
                                        <div>
                                            {sportsEvents.handicap.one ? 
                                                <div>
                                                    <span className='start'>{sportsEvents.handicap.spec}</span>
                                                    <span className='end'>{sportsEvents.handicap.one}</span>
                                                </div> : <div>Lock</div>
                                            }
                                            {sportsEvents.handicap.two ? 
                                                <div>
                                                    <span className='start'>{ sportsEvents.handicap.spec ? (sportsEvents.handicap.spec * -1).toFixed(2) : sportsEvents.handicap.spec}</span>
                                                    <span className='end'>{sportsEvents.handicap.two}</span>
                                                </div> : <div>Lock</div>
                                            }
                                        </div>
                                        <div>
                                            {sportsEvents.total.two ? 
                                                <div>
                                                    <span className='start'>{sportsEvents.total.spec}</span>
                                                    <span className='end'>{sportsEvents.total.one}</span>
                                                </div> : <div>Lock</div>
                                            }
                                            {sportsEvents.total.two ? 
                                                <div>
                                                    <span className='start'>{sportsEvents.total.spec ? (sportsEvents.total.spec * -1).toFixed(2) : sportsEvents.total.spec}</span>
                                                    <span className='end'>{sportsEvents.total.two}</span>
                                                </div> : <div>Lock</div>
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='sports-other-markets'>{sportsEvents.market ? sportsEvents.market.length : 0}</div>
                        </Row>
                    }
                    </React.Fragment>
                )}
            </Media>
        )
    }
}

export default Sportsevents