import React from "react"
import SportsBet from "./SportsBet"
import Swiper from "react-id-swiper"
import Media from 'react-media';
import { Button, Row } from "reactstrap";
import { ChevronRight } from "react-feather";

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

class SportsTab extends React.Component {

    constructor(props){
        super(props)
        this.state={
            activeIndex: 1,
            activeTab: 'Featured sports',
            tab : [
                {
                    index : 1,
                    title : 'In-play'
                },
                {
                    index : 2,
                    title : 'Next 24hrs'
                },
                {
                    index : 3,
                    title : 'Future'
                },
                {
                    index : 4,
                    title : 'Lengues'
                },
                {
                    index : 5,
                    title : 'News'
                },
            ],
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
                        {
                            this.state.tab ? this.state.tab.map ((Item, i)=>(
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
                        }
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
export default SportsTab;