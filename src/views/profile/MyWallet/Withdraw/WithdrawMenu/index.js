import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'reactstrap'
import {toast} from "react-toastify"
import { YaarPayWithdraw, PaymentMenuload, paymentMethodLoad } from "../../../../../redux/actions/paymentGateWay"
import "rc-slider/assets/index.css"
import "../../../../../assets/scss/plugins/extensions/slider.scss"
import ActivePayment from "./ActivePayment";
import AllPayment from "./AllPayment";
import AmountSetting from "./AmountSetting";
import Withdraw from "./Withdraw";

class DepositMenus extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeMethod : [],
            allMethod : [],
            activeindex : 0,
            moreInfoState : false,
            amount:0,
            depositBankCode:'',
            ifscCode:'',
            accountName:'',
            accountNo:''
        }
    }

    componentDidMount(){
        this.props.PaymentMenuload({type:2});
    }

    async componentDidUpdate(prevProps, prevState) {
        if(prevProps.PaymentMenuData !== this.props.PaymentMenuData){
            this.setState({
                activeMethod : this.props.PaymentMenuData[0],
                allMethod : this.props.PaymentMenuData,
                amount:this.props.PaymentMenuData[0].min
            })
            this.props.paymentMethodLoad({type : this.props.PaymentMenuData[0].type+'-'+this.props.PaymentMenuData[0].paymentType.split('-')[1]})
        }else if(prevProps.PaymentMethod !== this.props.PaymentMethod){
            this.setState({
                depositBankCode : this.props.PaymentMethod.paymentData.payoutBankCode,
                accountName : this.props.PaymentMethod.paymentData.accountName,
                accountNo : this.props.PaymentMethod.paymentData.accountNo,
                ifscCode : this.props.PaymentMethod.paymentData.ifscCode,
            });
        }
    }

    activeChange(e){
        this.setState({
            activeindex : e,
            activeMethod : this.state.allMethod[e],
            amount:this.state.allMethod[e].min,
            moreInfoState : false, 
        })
    }

    paymentWithdraw(){
        if(this.state.amount > this.state.activeMethod.max || this.state.amount < this.state.activeMethod.min){
            toast.error("Please input correct amount");
            return;
        }else if(!this.state.accountName){
            toast.error("Please input correct Account Name");
            return;
        }else if(!this.state.accountNo){
            toast.error("Please input correct Account No");
            return;
        }else if(!this.state.ifscCode){
            toast.error("Please input correct IFSC Code");
            return;
        }else if(!this.state.depositBankCode){
            toast.error("Please input correct Bank");
            return;
        }else {
            var row = {
                first_name : this.props.user.values.firstname,
                last_name : this.props.user.values.lastname,
                email : this.props.user.values.email,
                amount : this.state.amount,
                type : this.state.activeMethod.type,
                currency : this.state.activeMethod.currency,
                ifscCode : this.state.ifscCode,
                accountName : this.state.accountName,
                accountNo : this.state.accountNo,
                payoutBankCode : this.state.depositBankCode,
                bankType : this.state.activeMethod.paymentType.split('-')[1],
            }
            switch (this.state.activeMethod.type){
                case 'YaarPay' :
                    return this.props.YaarPayWithdraw(row);
                default:
                    return 
            }
        }
    }

    setValue = (state, value) => {
        this.setState({ [state] : value })
    }

    render() {
        const { activeMethod, amount }=this.state;
        return (
            <React.Fragment>
                {this.state.allMethod && this.state.allMethod.length? (
                    <Row className='payment-deposit' style={{minHeight:'600px'}}>
                        <Col lg='12' xl='3'>
                            <div  className='payment-deposit-menus' xl="max-width:300px" style={{height:'100%', padding: '0 10px', margin:'auto'}}>
                                <ActivePayment activeData = {activeMethod}/>
                                <AllPayment {...this.state}  active={(e)=>this.activeChange(e)}/>
                            </div>
                        </Col>
                        <Col lg='12' xl='9'>
                            <div className='p-1 pl-2 pr-2 payment-deposit-menus' style={{height:'100%'}}>
                                <AmountSetting 
                                    activeMethod={activeMethod} 
                                    amount={amount} 
                                    setValue={(r,e)=>this.setValue(r,e)}
                                />
                                <Withdraw
                                    paymentWithdraw={()=>this.paymentWithdraw()}
                                    setValue={(r,e)=>this.setValue(r,e)}
                                    depositBankCodes={activeMethod.depositBankCode}
                                    state={this.state} 
                                />
                            </div>
                        </Col>
                    </Row>
                ):null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.auth.login,
    PaymentMethod : state.paymentGateWay.PaymentMethod,
    PaymentMenuData:state.paymentGateWay.PaymentMenuData,
})

const mapDispatchToProps = {YaarPayWithdraw, PaymentMenuload, paymentMethodLoad}

export default connect(mapStateToProps, mapDispatchToProps)(DepositMenus)