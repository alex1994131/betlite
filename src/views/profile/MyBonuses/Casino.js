import React from "react"
import {Row, Col, Button} from "reactstrap"
import {ChevronUp, ChevronDown} from 'react-feather'
import {connect} from "react-redux"
import {Bonusmenuload, LoadWagered,Claim_request} from "../../../redux/actions/promotions/bonus"
import confirm from "reactstrap-confirm";
import {get_users} from "../../../redux/actions/profile/index"
import {history} from "../../../history"

class Balencehistory extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            active : 0,
            Wagered : 0,
            allData : null,
            Remaining : null,
            user : {}
        }
    }

    async componentWillMount(){
        var user = get_users();
        if(user){
        //   await this.setState({user : user})
          this.props.Bonusmenuload(2,user.email)
        }else{
          history.push("/")
        }
      }
    

    componentDidUpdate(prevProps, prevState){
        if(prevProps.BonusData !== this.props.BonusData){
            this.setState({allData: this.props.BonusData})
            if(this.props.BonusData.length){
                this.props.LoadWagered({
                    start:this.props.BonusData[0].startdate,
                    end: this.props.BonusData[0].enddate
                });
            }
        }
        if(this.props.Wagered !== prevState.Wagered && this.state.allData && this.state.allData.length){
            const { allData } = this.state;
            var Remaining = allData[0].mindeposit*allData[0].Wageringreq-this.props.Wagered;
            this.setState({
                Wagered:this.props.Wagered,
                Remaining : Remaining < 0 ? 0 : Remaining
            });
            
        }
    }

    DateFormat(e){
        var date = new Date(e);
        var day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
        var month = (date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
        var year = date.getFullYear();
        var hour = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
        var min = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        return day+'/'+month+'/'+year+' '+hour+':'+min;
    }

    getDay(s, e){
        var start = new Date(s);
        var end = new Date(e);
        var m = new Date(end-start);
        return parseInt(m/86400000);
    }

    activeHander(key){
        if(key===this.state.active){
            this.setState({active:null})
        }else{
            var Remaining = this.state.allData[key].mindeposit*this.state.allData[key].Wageringreq-this.props.Wagered;
            this.setState({
                active:key,
                Remaining : Remaining < 0 ? 0 : Remaining
            })
            this.props.LoadWagered({
                start:this.props.BonusData[key].startdate, 
                end: this.props.BonusData[key].enddate
            });
        }
    }

    async Claim_Bonus_event(){
        console.log(this.state.Wagered)
        console.log(this.state.Remaining)
        var result =  await confirm();
        if(result){
            var Bonusitem = this.state.allData[this.state.active];
            var user = this.props.user.values;
            console.log(user)
            var row = {
                bonusid : Bonusitem._id,
                email : user.email,
            }
            this.props.Claim_request(row);
        }else{

        }
    }
    
    render() {
        return (
            <div className='casino-bonus-page'>
                {/* <div className='pl-1 pr-1 d-flex pt-1 pb-1'>
                    <span style={{width:'calc(100% / 2)'}} className='d-flex justify-content-start'>BONOUS NAME</span>
                    <span style={{width:'calc(100% / 2)'}} className='d-flex justify-content-end'>STATUS</span>
                </div> */}
                <div className='pl-1 pr-1 d-flex' style={{background:"#1b8f62",padding:'5px', borderRadius:'5px'}}>
                    <span style={{width:'calc((100% - 30px)/3)'}} className='d-flex justify-content-center'>BONOUS NAME</span>
                    <span style={{width:'calc((100% - 30px)/3)'}} className='d-flex justify-content-center'>AMOUNT</span>
                    <span style={{width:'calc((100% - 30px)/3)'}} className='d-flex justify-content-center'>STATUS</span>
                </div>
                {
                    this.state.allData&&this.state.allData.length ?this.state.allData.map((item, key)=>(
                        <div key={key}>
                            <div onClick={()=>this.activeHander(key)} className='pl-1 pr-1 d-flex' style={{background:"#102226",margin:"10px 0",padding:"10px", border:'1px soild #1b8f62', borderRadius:'5px'}}>
                                <span style={{width:'calc((100% - 30px)/3)'}} className='d-flex justify-content-center align-items-center'>{item.bonusname}</span>
                                <span style={{width:'calc((100% - 30px)/3)'}} className='d-flex justify-content-center align-items-center'>---</span>
                                <span style={{width:'calc((100% - 30px)/3)'}} className='d-flex justify-content-center align-items-center'>
                                    Available Bonous
                                </span>
                                <span style={{width:'30px'}} className='d-flex justify-content-center align-items-center'>
                                    {
                                        this.state.active === key ? 
                                            <ChevronUp size={20}/>:
                                            <ChevronDown size={20}/>
                                    }
                                </span>
                            </div>
                            {
                                this.state.active === key ? (
                                    <Row className='p-1' style={{border:'1px solid #1b8f62', margin:'5px', borderRadius:'5px'}}>
                                        <Col lg='3' sm='12' className='p-1'>
                                            <div style={{height:'50%'}} className='p-1 d-flex align-items-end justify-content-center'>
                                                <span>Starting Date&nbsp;&nbsp;:&nbsp;&nbsp;</span>
                                                <span>{this.DateFormat(item.startdate)}</span>
                                            </div>
                                            <div style={{height:'50%'}} className='p-1 d-flex align-items-start justify-content-center'>
                                                <span>Ending Date&nbsp;&nbsp;:&nbsp;&nbsp;</span>
                                                <span>{this.DateFormat(item.enddate)}</span>
                                            </div>
                                        </Col>
                                        <Col className='d-flex' lg='9' sm='12'>
                                            <div className='justify-content-start' style={{width:'100%'}}>
                                                <Row className='w-100 pt-1 m-0'>
                                                    <Col style={{ padding:'5px', fontSize:'16px', color:'#fff', borderBottom:'3px solid #1d9766'}} className='d-flex align-items-center justify-content-start'>
                                                        Wagered : {this.state.Wagered} INR     
                                                    </Col>    
                                                    <Col style={{ padding:'5px', fontSize:'16px', color:'#fff', borderBottom:'3px solid #1d9766'}} className='d-flex align-items-center justify-content-end'>
                                                        Remaining : {this.state.Remaining} INR
                                                    </Col>    
                                                </Row>                            
                                                <Row className='w-100 pt-1 m-0'>
                                                    <Col className='d-flex align-items-center justify-content-start' style={{ padding:'5px', color:'#fff', borderBottom:'1px solid #1d9766'}}>
                                                        Time to Wager    
                                                    </Col>    
                                                    <Col className='d-flex align-items-center justify-content-center' style={{ padding:'5px', color:'#fff', borderBottom:'1px solid #1d9766'}}>
                                                        Wagering Req
                                                    </Col>    
                                                    <Col className='d-flex align-items-center justify-content-end' style={{ padding:'5px', color:'#fff', borderBottom:'1px solid #1d9766'}}>
                                                        Min&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;Max deposit
                                                    </Col>    
                                                </Row>                            
                                                <Row className='w-100 pt-1 m-0'>
                                                    <Col className='d-flex align-items-center justify-content-start' style={{ padding:'5px', color:'#fff', borderBottom:'1px solid #1d9766'}}>
                                                       {this.getDay(item.startdate, item.enddate)}
                                                    </Col>    
                                                    <Col className='d-flex align-items-center justify-content-center' style={{ padding:'5px', color:'#fff', borderBottom:'1px solid #1d9766'}}>
                                                        {item.Wageringreq}X
                                                    </Col>    
                                                    <Col className='d-flex align-items-center justify-content-end' style={{ padding:'5px', color:'#fff', borderBottom:'1px solid #1d9766'}}>
                                                        {item.mindeposit} INR&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;{item.maxdeposit} INR
                                                    </Col>    
                                                </Row>    
                                                <Row className='w-100 pt-1 m-0' style={{color:'#fff'}}>
                                                    <Col xs='12' sm='10' className='d-flex justify-content-center align-content-center'>
                                                        {item.description}
                                                    </Col>
                                                    <Col xs='12' sm='2' className='d-flex justify-content-center align-content-center'>
                                                        
                                                        {
                                                            this.state.Remaining === 0 ? (
                                                                <Button.Ripple onClick={()=>this.Claim_Bonus_event()} outline style={{padding:'10px'}} color="info" size="sm" className="square">Claim Bonus</Button.Ripple>
                                                            ) : 
                                                            <Button disabled={true} outline style={{padding:'10px'}} color="info" size="sm" className="square">Claim Bonus</Button>
                                                        }
                                                    </Col>
                                                </Row>    
                                            </div>
                                        </Col>
                                    </Row>
                                ):null
                            }
                        </div>
                    ))
                    :null 
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    BonusData : state.promotions.BonusData,
    Wagered : state.promotions.Wagered,
    user : state.auth.login
})

const mapDispatchToProps = {
    Bonusmenuload, LoadWagered,Claim_request
}

export default connect(mapStateToProps, mapDispatchToProps)(Balencehistory)
