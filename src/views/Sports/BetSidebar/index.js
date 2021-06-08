import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Input, Row } from "reactstrap"
import { TrendingUp } from "react-feather"
import { removeItem, removeAllItem , placeBet} from "../../../redux/actions/sports"
import {toast} from "react-toastify";
import { send } from 'react-ga'
import {history} from "../../../history"
 class BetSidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active : 'single',
            isopen : true,
            data : {},
            bet : [],
            multiAmount : 0
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.sportsSidebarData !== prevProps.sportsSidebarData){
            this.setState({data:this.props.sportsSidebarData.data})
            if(this.state.data.length===2){
                this.setState({active:'multi'})
            }else if(this.state.data.length<2){
                this.setState({active:'single'})
            }
        }
    }

    bet(){
        if(!this.props.user){
            history.push("/")
        }
        var sendData = {
            user : this.props.user._id
        };
        if(this.state.active === "single"){
            var data = this.state.bet;
            var allAmount = 0;
            for(var i = 0 ; i <data.length ;i ++){
                allAmount += parseFloat(data[i].amount);
                if(data[i].amount < 5){
                    toast.error("The minimum bet is 5 Inr.");
                    return;
                }
            }
            sendData.flag = "single";
            sendData.bet = this.state.bet;
            sendData.allAmount = allAmount;
        }
        else{
            if(this.state.multiAmount < 5){
                toast.error("The minimum bet is 5 Inr.");
                return;
            }
            sendData.flag = "multi";
            var bet = [];
            for(var j = 0 ; j < this.state.data.length ; j ++){
                var temp = {
                    event_id : this.state.data[j].event_id,
                    OutcomeId : this.state.data[j].OutcomeId,
                    OutcomeName : this.state.data[j].OutcomeName,
                    OutcomeOdds : this.state.data[j].OutcomeOdds,
                    MarketName : this.state.data[j].MarketName,
                    amount : this.state.multiAmount,
                }
                bet.push(temp);
            }
            sendData.bet = bet;
            sendData.allAmount = this.state.multiAmount;
        }
        console.log(sendData.allAmount , this.props.balance)
        if(sendData.allAmount > this.props.balance){
            toast.error("Please deposit enough money!");
            return;
        }
        this.props.placeBet(sendData);
    }
    changeAmount(item , value){
        var flag = false;
        var data = this.state.bet;
        for(var i = 0 ; i < data.length ; i ++){
            if(data[i].OutcomeId === item.OutcomeId){
                data[i].amount = value; 
                flag = true;
                break;
            }
        }
        if(!flag){
            var temp = {
                event_id : item.event_id,
                OutcomeId : item.OutcomeId,
                OutcomeName : item.OutcomeName,
                OutcomeOdds : item.OutcomeOdds,
                MarketName : item.MarketName,
                amount : value
            }
            data.push(temp);
        }
        this.setState({bet : data});
    }

    render() {
        return (
            this.state.data && this.state.data.length ? (
                <div className='sports-bet-sidebar'>
                    <div className='betslip'>
                        <div className='wrapper active u-bordercolor-piccolo'>
                            <ul className='betslip-tabs'>
                                <li className='tab' onClick={()=>this.setState({active:'single', isopen:true})}>
                                    <div className={this.state.active==='single' ? 'active' :''}>Single
                                        <span className="amount">{this.state.data ? this.state.data.length : 0}</span>
                                    </div>
                                </li>
                                <li className='tab' onClick={()=>this.setState({active:'multi', isopen:true})}>
                                    <div className={this.state.active==='multi' ? 'active' :''}>Multi</div>
                                </li>
                                <li className='button'>
                                    <div onClick={()=>this.setState({isopen:!this.state.isopen})}>
                                        <svg fill="#fff" height="32" width="32" viewBox="0 0 512 512">
                                            {
                                                this.state.isopen?(
                                                    <path d="M507 205.8H5v100.4h502z"></path>
                                                ):(
                                                    <path d="M506.997 205.799H306.201V5H205.799v200.799H5.003v100.399h200.796V507h100.402V306.198h200.796z"></path>
                                                )
                                            }
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                            {this.state.isopen?(
                                <div className='scrolllock'>
                                    <Row className='p-1'>
                                        <Col md={12} className='pl-1 pr-1 btn-block w-100'>
                                            <Button.Ripple className="square" style={{width:'100%'}} outline color="info">
                                                <TrendingUp size={15}/><span>&nbsp;&nbsp;Price Boost</span>
                                            </Button.Ripple>
                                        </Col>
                                    </Row>
                                    {
                                        this.state.active === 'single' ? (this.state.data ? this.state.data.map((item, i)=>(
                                            <div key={i} className='bets'>
                                                <div>
                                                    <div className='event'>
                                                        <div className='title'>
                                                            {item.AwayCompetitor.Name+' - '+item.HomeCompetitor.Name}
                                                        </div>
                                                        <div className='type'>
                                                            {item.MarketName}
                                                        </div>
                                                        <div className='target'>
                                                            <div className="team">{item.OutcomeName}</div>
                                                            <span className="animate">
                                                                <span className="u-color-piccolo">{item.OutcomeOdds}</span>
                                                            </span>
                                                        </div>
                                                        <div className='BetInput jZDdQz'>
                                                            <Input onChange = {(e) => this.changeAmount(item , e.target.value)} className='round mt-1' id='input-statk' placeholder='Enter your stake' type='number' style={{textAlign:'right'}}/>
                                                        </div>
                                                        <div className='event-footer mt-1' style={{display:'flex'}}>
                                                            <div className='remove u-color-piccolo' onClick={()=>this.props.removeItem(item)}>
                                                                Remove&nbsp;&nbsp;<b>×</b>
                                                            </div>
                                                            <div className='potentialwin'>
                                                                Potential win:
                                                                <span className="sum"> ETH
                                                                    <span className="numbers">0.00</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )):null):(this.state.data ? this.state.data.map((item, i)=>(
                                            <>
                                                <div key={i} className='bets'>
                                                    <div>
                                                        <div className='event'>
                                                            <div className='title'>
                                                                {item.AwayCompetitor.Name+' - '+item.HomeCompetitor.Name}
                                                            </div>
                                                            <div className='type'>
                                                                {item.MarketName}
                                                            </div>
                                                            <div className='target'>
                                                                <div className="team">{item.OutcomeName}</div>
                                                                <span className="animate">
                                                                    <span className="u-color-piccolo">{item.OutcomeOdds}</span>
                                                                </span>
                                                            </div>
                                                            <div className='event-footer mt-1' style={{display:'flex'}}>
                                                                <div className='remove u-color-piccolo'  onClick={()=>this.props.removeItem(item)}>
                                                                    Remove&nbsp;&nbsp;<b>×</b>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )):null)
                                    }
                                    {
                                        
                                        this.state.active !== 'single' ? (
                                            <div className='p-1' style={{borderTop: '1px solid #31373f'}}>
                                                <div className='lower'>
                                                    <Input onChange = {(e) => this.setState({multiAmount : e.target.value})} className='round' id='input-statk' placeholder='Enter your stake' type='number' style={{textAlign:'right'}}/>
                                                </div>
                                                <div className='event-footer pt-1' style={{display:'flex',}}>
                                                    <div style={{display:'flex', justifyContent:'flex-start',width: '80px'}}>
                                                        Total stake:
                                                    </div>
                                                    <div className='potentialwin' style={{display:'flex', justifyContent:'flex-end',width: 'calc(100% - 80px)'}}>
                                                        <span className="sum"> ETH
                                                            <span className="numbers">0.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <Row>
                                                    <Col md={12} className='pt-1 pl-1 pr-1'>
                                                        <Button onClick = {()=>this.bet()} className="round btn-block" color="success">{this.props.balance ? "Place Bet" : "Deposit"}</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12} className='pt-1 pl-1 pr-1'>
                                                        <div onClick={()=>this.props.removeAllItem()} className='remove u-color-piccolo' style={{textAlign:'center', cursor:'pointer'}}>
                                                            Remove all bets&nbsp;&nbsp;×
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ):(
                                            <div className='p-1' style={{borderTop: '1px solid #31373f'}}>
                                                <div className='event-footer' style={{display:'flex',}}>
                                                    <div style={{display:'flex', justifyContent:'flex-start',width: '80px'}}>
                                                        Total stake:
                                                    </div>
                                                    <div className='potentialwin' style={{display:'flex', justifyContent:'flex-end',width: 'calc(100% - 80px)'}}>
                                                        <span className="sum"> ETH
                                                            <span className="numbers">0.00</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <Row>
                                                    <Col md={12} className='pt-1 pl-1 pr-1'>
                                                        <Button onClick = {()=>this.bet()} className="round btn-block" color="success">{this.props.balance ? "Place Bet" : "Deposit"}</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12} className='pt-1 pl-1 pr-1'>
                                                        <div onClick={()=>this.props.removeAllItem()} className='remove u-color-piccolo' style={{textAlign:'center', cursor:'pointer'}}>
                                                            Remove all bets&nbsp;&nbsp;×
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        )
                                    }
                                </div>
                            ):null}
                        </div>
                    </div>
                </div>
            ):<div/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sportsSidebarData : state.sports.sportsSidebarData,
        balance : state.balance.value.balance,
        user : state.auth.login.values
    }    
}

const mapDispatchToProps = {
    removeItem,removeAllItem,placeBet
}

export default connect(mapStateToProps, mapDispatchToProps)(BetSidebar)
