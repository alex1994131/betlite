import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'reactstrap'
import {toast} from "react-toastify"
import { QpayCheckOut, YaarPayCheckOut, PaymentMenuload, netcentCheckOut } from "../../../../../redux/actions/paymentGateWay"
import "rc-slider/assets/index.css"
import "../../../../../assets/scss/plugins/extensions/slider.scss"
import $ from "jquery";
import ActivePayment from "./ActivePayment";
import AllPayment from "./AllPayment";
import PaymentRequest from "./PaymentRequest";
import AmountSetting from "./AmountSetting";
import Deposit from "./Deposit";

class DepositMenus extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeMethod : null,
            allMethod : null,
            activeindex : 0,
            amount:0,
            depositBankCode : '',
            moreInfoState : false,

            Qpay:{},
            QpayRequest_url : '',
            YaarPay:{},
            YaarPayRequest_url : '',
        }
    }

    componentDidMount(){
        this.props.PaymentMenuload({type:1});
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.QpayCheckOutData !== this.props.QpayCheckOutData) {
            await this.setState({
                Qpay:this.props.QpayCheckOutData.data,
                QpayRequest_url : this.props.QpayCheckOutData.request_url,
            })
            await $("#Qpay").submit();
          }else if (prevProps.YaarPayCheckOutData !== this.props.YaarPayCheckOutData) {
            await this.setState({
              YaarPay:this.props.YaarPayCheckOutData.data,
              YaarPayRequest_url : this.props.YaarPayCheckOutData.request_url,
            })
            await $("#YaarPay").submit();
        }else if(prevProps.PaymentMenuData !== this.props.PaymentMenuData){
            this.setState({
                activeMethod : this.props.PaymentMenuData[0],
                allMethod : this.props.PaymentMenuData,
                amount:this.props.PaymentMenuData[0].min
            })
        }
      }
    
    activeChange(e){
        this.setState({
            activeindex : e,
            activeMethod : this.state.allMethod[e],
            amount:this.state.allMethod[e].min,
            moreInfoState : false, 
            depositBankCode : this.state.allMethod[e].depositBankCode&&this.state.allMethod[e].depositBankCode.length?this.state.allMethod[e].depositBankCode[0].value:''
        })
    }

    paymentDeposit (){
        if(this.state.amount > this.state.activeMethod.max || this.state.amount < this.state.activeMethod.min){
            toast.error("Please input correct amount.");
            return;
        }else{
            var row = {
              first_name: this.props.user.values.firstname,
              last_name:this.props.user.values.lastname,
              email:this.props.user.values.email,
              amount:this.state.amount,
              type : this.state.activeMethod.type,
              bankType : this.state.activeMethod.paymentType.split('-')[1],
              depositBankCode : this.state.depositBankCode
            }
            switch (this.state.activeMethod.type){
              case 'netcents' : 
                return this.props.netcentCheckOut(row);
              case 'Qpay' :
                return this.props.QpayCheckOut(row);
              case 'YaarPay' :
                return this.props.YaarPayCheckOut(row);
              default:
                return 
            }
          }
        }

    sliderChange(e){
    }

    setValue = (state, value) => {
        this.setState({ [state] : value })
    }

    render() {
        const { activeMethod, amount, moreInfoState }=this.state;
        return (
            <React.Fragment>
                {this.state.allMethod && this.state.allMethod.length? (
                    <Row className='payment-deposit' style={{minHeight:'600px'}}>
                        <Col lg='12' xl='3'>
                            <div  className='payment-deposit-menus' xl="max-width:300px" style={{height:'100%', padding: '0 10px', margin:'auto'}}>
                                <ActivePayment activeData = {activeMethod}/>
                                <AllPayment {...this.state}  active={(e)=>this.activeChange(e)}/>
                                <PaymentRequest {...this.state}/>
                            </div>
                        </Col>
                        <Col lg='12' xl='9'>
                            <div className='p-1 pl-2 pr-2 payment-deposit-menus' style={{height:'100%'}}>
                                <AmountSetting 
                                    activeMethod={activeMethod} 
                                    amount={amount} 
                                    setValue={(r,e)=>this.setValue(r,e)}
                                />
                                <Deposit
                                    paymentDeposit={()=>this.paymentDeposit()}
                                    setValue={(r,e)=>this.setValue(r,e)}
                                    depositBankCode={this.state.depositBankCode} 
                                    depositBankCodes={activeMethod.depositBankCode} 
                                    moreInfoState={moreInfoState} 
                                    activeMethod={activeMethod} 
                                    amount={amount} 
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
    PaymentMenuData:state.paymentGateWay.PaymentMenuData,
    QpayCheckOutData : state.paymentGateWay.QpayCheckOutData,
    YaarPayCheckOutData : state.paymentGateWay.YaarPayCheckOutData,
})

const mapDispatchToProps = {netcentCheckOut, QpayCheckOut, YaarPayCheckOut, PaymentMenuload}

export default connect(mapStateToProps, mapDispatchToProps)(DepositMenus)