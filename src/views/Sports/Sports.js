import React from "react"
import { connect } from "react-redux"
import { FormGroup, Input, Row, Col, Button} from "reactstrap"
import { ChevronDown, ChevronRight, Search } from "react-feather"
import Media from 'react-media';
import Swiper from "react-id-swiper"
import {get_sports_lists,get_odds} from "../../redux/actions/sports"
import collapseItems from './collapseItems' 


const params = {
	spaceBetween: 60,
	centeredSlides: true,
	autoplay: {
	  delay: 5000,
	  disableOnInteraction: false
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
}

class Sports extends React.Component{
    constructor(){
        super()
        this.state={
            id:1,
            Item:{},
        }
    }

    UNSAFE_componentWillMount(){
        this.props.get_sports_lists()
    }

    async position(Item){
        await this.setState({ id : Item.sport_id, Item : Item });
        this.props.get_odds(Item);
    }   

    render(){
        return(
            <div style={{height:"100%"}} className='sports-background'>
                <FormGroup className="position-relative has-icon-left">
                    <Input
                        type="text"
                        className="round"
                        placeholder='Search'
                        value={this.state.value}
                        onChange={e => this.setState({ value: e.target.value })}
                    />
                    <div className="form-control-position px-1">
                        <Search size={15} />
                    </div>
                </FormGroup>
                <div style={{overflow:'auto',}}>
                    <div style={{ margin:'5px', display:'flex', flex:1, alignItems:'center'}}>
                        {this.props.sport_list && this.props.sport_list.length > 0 ? this.props.sport_list.map( (Item,i) => (
                            <div
                                key={i} 
                                onClick={()=>this.position(Item)}
                                style={{display:'inline-block', width:'57px', height:'90px', marginLeft:'5px', cursor:'pointer'}}
                            >
                                {
                                    Item.sport_id === this.state.id ? (
                                        <div className='sports-tab-active-background' style={{}}>{''}</div>
                                    ) : null
                                }
                                <div className='sports-tab-background' style={{borderRadius:'25%',marginTop:'0px'}}>
                                    <svg style={{color:Item.color, margin:'1.2rem'}} width="22" height="22" viewBox={Item.viewBox}>
                                        <path d={Item.icon} fill="currentColor"/>
                                    </svg>
                                </div>
                                <div 
                                    style={{padding:'2px', textAlign:'center', wordBreak: 'break-all', fontSize:'0.7rem'}}
                                    className={
                                        (Item.sport_id === this.state.id ? 'font-color-2':'font-color-1')
                                    }
                                >
                                    {Item.sport_name}
                                </div>
                            </div>
                        )) : null                    
                    }
                    </div>
                </div>
                {
                    this.state.id && this.props.fp_images1 ? (
                        this.state.id === 1 ? (<SportsTab defalt = {true} data={collapseItems[0]} Item={this.state.Item} fp_images={this.props.fp_images1}/>) : 
                            (<SportsTab data = {this.props.search_odds_data} Item={this.state.Item} fp_images={this.props.fp_images1}/>)
                    ) : null
                }
            </div>
        )
    }
}

const load_fp_data = (state) => {
	return {
		fp_images : state.auth.login.fpImage,
        fp_images1 : state.auth.login.fpImage1,
        sport_list : state.sports.sports_list,
        search_odds_data : state.sports.search_odds_data
	}
}

export default connect(load_fp_data,{get_sports_lists,get_odds})(Sports)



class SportsTab extends React.Component {

    constructor(props){
        super(props)
        this.state={
            activeIndex: 1,
            activeTab: 'Featured sports',
        }
    }
  
    activeTab = (Item) => {
        this.setState({ 
            activeIndex: Item.index,
            activeTab: Item.title
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.data !== this.props.data){ 
            this.setState({
                activeIndex: null,
                activeTab: null                
            })
        }
    }
  
    render() {
        const Items = this.props.Item;
        const arrya = [
            'https://sportsbet.imgix.net/India/GeneralBrettLee.jpg?w=1200&auto=compress,enhance,format',
            'https://sportsbet.imgix.net/Promotions/Sports/2020/Sportsbet_promo_1800x800_EuropeSoccer.jpg?auto=compress,enhance,format',
            'https://sportsbet.imgix.net/Promotions/Sports/2020/Sportsbet_GeneralMultimaster_promo_1800x800.jpg?auto=compress,enhance,format'
        ]
        return(
            <div style={{height:'calc(100% - 105px)', marginBottom:'15px'}}>
                {this.props.defalt !== true ? (
                    <>
                    <div className='pt-2 sports-background1' style={{borderRadius:'25px 25px 0px 0px'}}>
                        <div className='sports-tab-title'>
                            <svg style={{color:Items.color, margin:'1.2rem'}} width="22" height="22" viewBox={Items.viewBox}>
                                <path d={Items.icon} fill="currentColor"/>
                            </svg>
                            <span>{Items.sport_name}
                                {this.state.activeTab ? " : "+this.state.activeTab : ''}
                            </span>
                        </div>
                        {/* {
                            Items.tab ? Items.tab.map ((Item, i)=>(
                                <div 
                                    key={i}
                                    className={
                                        'p-0 pl-1 pr-1 children-tab ' + 
                                        (Item.index === this.state.activeIndex ? 'children-tab-active':'')
                                    }
                                    onClick = {()=>this.activeTab(Item)}
                                >
                                    {(()=>{
                                        if (Item.index === 1 && !this.state.activeIndex && !this.state.activeTab) {
                                            this.setState({
                                                activeIndex : Item.index,
                                                activeTab : Item.title,
                                            });
                                        }
                                    })()}
                                    {Item.title}
                                    <div className='mr-auto ml-auto' style={{marginTop:'3px'}}></div>
                                </div>
                            )):null
                        } */}
                    </div>
                    <div className='sports-featured-back'>
                        <span className='sports-featured-home'>Home &nbsp;&nbsp;&nbsp;<ChevronRight size={15} />&nbsp;&nbsp;&nbsp;</span>
                        <span className='sports-featured-active-button'>{Items.sport_name}</span>
                    </div>
                    <div className='sports-event'>
                        {
                            this.props.data ? this.props.data.map((sportsBetItem, i)=>(
                                <SportsBet key={i} sportsBetItem={sportsBetItem} data={Items}/>
                            )):null
                        }
                    </div>
                    </>
                ):(
                    <div className='pt-2 pb-2 sports-background' style={{height:'100%', overflow:'auto'}}>
                        <Media queries={{
                            small: "(max-width: 1219px)",
                            medium: "(min-width: 1220px) and (max-width: 1499px)",
                            large: "(min-width: 1500px)"
                            }}>
                            {matches => (
                                <React.Fragment>
                                {matches.small && 
                                    <div id='sports-slider' style={{margin:'auto',padding:'10px'}}>
                                        <Swiper {...params}>
                                            {
                                                arrya.map((item, i) => (
                                                    <div key={i}>
                                                        <img src={item} alt="swiper 1" className="img-fluid" />
                                                    </div>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                }
                                {matches.medium && 
                                    <div id='sports-slider' style={{width:'auto',margin:'auto'}}>
                                        <Swiper {...params}>
                                            {
                                                arrya.map((item, i) => (
                                                    <div key={i}>
                                                        <Row>
                                                            <div className='sports-background1' style={{width:'45%'}}>
                                                                <div className='p-2 pl-4'>
                                                                    <h4>Brett Lee's Weekly Casino Cashback</h4>
                                                                    <p>Sportsbet.io has got you covered with up to 250,000 INR weekly cashback on your net Casino losses with Brett Lee's special Weekly Casino Cashback.</p>
                                                                    <Button className='sports-read-me'>Read more</Button>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'55%'}}>
                                                                <img src={item} alt="swiper 1" className="img-fluid" />
                                                            </div>
                                                        </Row>
                                                    </div>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                }
                                {matches.large &&
                                    <div id='sports-slider' style={{width:'auto', margin:'auto'}}>
                                        <Swiper {...params}>
                                            {
                                                arrya.map((item, i) => (
                                                    <div key={i}>
                                                        <Row>
                                                            <div className='sports-background1' style={{width:'40%'}}>
                                                                <div className='p-5'>
                                                                    <h3>Brett Lee's Weekly Casino Cashback</h3>
                                                                    <p className='mt-2' style={{lineHeight:'2'}}>Sportsbet.io has got you covered with up to 250,000 INR weekly cashback on your net Casino losses with Brett Lee's special Weekly Casino Cashback.</p>
                                                                    <Button className='sports-read-me'>Read more</Button>
                                                                </div>
                                                            </div>
                                                            <div style={{width:'60%'}}>
                                                                <img src={item} alt="swiper 1" className="img-fluid" />
                                                            </div>
                                                        </Row>
                                                    </div>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                }
                                </React.Fragment>
                            )}
                        </Media>
                        
                        {/* <div className='mt-2 p-2 pl-3 pr-3 sports-background1'>
                            <div className='p-1 sports-align-left font-color-2' xs={9} style={{fontSize:'1.8rem'}}>Featured events</div>
                            <div className='sports-background' style={{borderRadius:'20px 20px 0px 0px'}}>
                                <div className='sports-tab-title'>
                                    <Row>
                                        <Col xs={9}>
                                            <svg style={{color:collapseItems[1].color, margin:'1.2rem'}} width="22" height="22" viewBox={collapseItems[1].viewBox}>
                                                <path d={collapseItems[1].icon} fill="currentColor"/>
                                            </svg>
                                            <span>{collapseItems[1].type}
                                                {this.state.activeTab ? " : "+this.state.activeTab : ''}
                                            </span>
                                        </Col>
                                        <Col className='sports-see-all sports-align-right' xs={3} style={{paddingRight:'30px', cursor:'pointer', fontSize:'1rem'}}>
                                            See all
                                        </Col>
                                    </Row>
                                </div>
                                {
                                    collapseItems[1].data ? collapseItems[1].data.map((sportsBetItem, i)=>(
                                        <SportsBet key={i} sportsBetItem={sportsBetItem} data={Items}/>
                                    )):null
                                }
                            </div>
                        </div> */}
                    </div>
                )}
            </div>
        )
    }
}

class SportsBet extends React.Component {

    constructor(props){
        super(props)
        this.state={
            isopen:false,
            id:0
        }
    }
  
    IsOpen () {
        this.setState({isopen: !this.state.isopen});
    }

    render() {
        const sportsBetItem = this.props.sportsBetItem;
        return(
            <div>
                <Row
                    onClick={()=>this.IsOpen()}
                    className={
                        '' + 
                        (this.state.isopen ? 'sports-country-active':'sports-country')}
                >
                    <Col sm={10} xs={10} className='sports-country-title' style={{marginLeft:'-10px'}}>
                        <div>
                            {
                                this.state.isopen ?
                                <ChevronDown size={20}/>:
                                <ChevronRight size={20}/>
                            }
                        </div>
                        <div className='sports-country-name'>
                            {sportsBetItem.name}
                        </div>
                    </Col>
                    <Col sm={2} xs={2} className='sports-country-length'>
                        { sportsBetItem.data.length }
                    </Col>
                </Row>
                {(()=>{
                    if (this.props.data.id !== this.state.id) {
                        this.setState({
                            id:this.props.data.id,
                            isopen:false
                        })
                    }
                })()}
                {
                    this.state.isopen ?(
                        <div className='sports-events-all'>
                            <Row>
                                <Col xs={6}></Col>
                                <Col xs={6}>
                                    <Row>
                                        <Col style={{textAlign:'left'}} xs={4}> 1 X 2 </Col>
                                        <Col style={{textAlign:'left'}} xs={4}> HANDICAP </Col>
                                        <Col style={{textAlign:'left'}} xs={4}> TOTAL </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {
                                sportsBetItem.data ? sportsBetItem.data.map((sportsEvents, i)=>(
                                    <Sportsevents key={i} sportsEvents={sportsEvents}/>
                                )):null
                            }
                        </div>
                    ):null
                }
            </div>
        )
    }
}


class Sportsevents extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
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
                                                <div>{sportsEvents.HomeCompetitor.Name}</div>
                                                <div>{sportsEvents.AwayCompetitor.Name}</div>
                                            </Col>
                                            <Col sm={2} className='sports-start-time'>
                                                {sportsEvents.ScheduledTime.slice(4,19)}
                                            </Col>
                                            <Col sm={2} className='sports-score-board'>
                                                <div>{sportsEvents.Status.HomeScore === "null" ? 0 : sportsEvents.Status.HomeScore}</div>
                                                <div>{sportsEvents.Status.AwayScore === "null" ? 0 : sportsEvents.Status.AwayScore}</div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='item-center' sm={6}>
                                        <div>
                                            <div>{sportsEvents.first.one}</div>
                                            <div>{sportsEvents.first.two}</div>
                                            <div>{sportsEvents.first.three}</div>
                                        </div>
                                        <div>
                                            <div>
                                                <span className='start'>{sportsEvents.handicap.one}</span>
                                                <span className='end'>{sportsEvents.handicap.two}</span>
                                            </div>
                                            <div>
                                                <span className='start'>{ sportsEvents.handicap.one ? (sportsEvents.handicap.one * -1).toFixed(2) : sportsEvents.handicap.one}</span>
                                                <span className='end'>{sportsEvents.handicap.three}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <span className='start'>{sportsEvents.total.one}</span>
                                                <span className='end'>{sportsEvents.total.two}</span>
                                            </div>
                                            <div>
                                                <span className='start'>{sportsEvents.total.one ? (sportsEvents.total.one * -1).toFixed(2) : sportsEvents.total.one}</span>
                                                <span className='end'>{sportsEvents.total.three}</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='sports-other-markets'>{sportsEvents.properties}</div>
                        </Row>
                    }
                    </React.Fragment>
                )}
            </Media>
        )
    }
}
