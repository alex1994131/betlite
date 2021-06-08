import React from "react"
import SportsBet from "./SportsBet"
import { ChevronRight } from "react-feather";

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
        return(
            <div style={{height:'calc(100% - 105px)', marginBottom:'15px'}}>
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
                        this.props.data&&this.props.defalt !== true ? this.props.data.map((sportsBetItem, i)=>(
                            <SportsBet key={i} sportsBetItem={sportsBetItem} data={Items}/>
                        )):null
                    }
                </div>
            </div>
        )
    }
}
export default SportsTab;