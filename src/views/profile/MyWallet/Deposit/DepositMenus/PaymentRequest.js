import React, { Component } from 'react';
import { Form, Input } from 'reactstrap'

class PaymentRequest extends Component {
    render() {
        return (
            <>
                <Form style={{display:'none'}} id='Qpay' action={`${this.props.QpayRequest_url}`} method='POST'>
                    <Input type='hiddin' name='me_id' onChange={(e)=>console.log(e.target.value)} value={this.props.Qpay.me_id}/>
                    <Input type='hiddin' name='txn_details'onChange={(e)=>console.log(e.target.value)}  value={this.props.Qpay.txn_details}/>
                    <Input type='hiddin' name='pg_details' onChange={(e)=>console.log(e.target.value)}  value={this.props.Qpay.pg_details}/>
                    <Input type='hiddin' name='card_details' onChange={(e)=>console.log(e.target.value)}  value={this.props.Qpay.card_details}/>
                    <Input type='hiddin' name='cust_details' onChange={(e)=>console.log(e.target.value)}  value={this.props.Qpay.cust_details}/>
                    <Input type='hiddin' name='bill_details' onChange={(e)=>console.log(e.target.value)} value={this.props.Qpay.bill_details}/>
                    <Input type='hiddin' name='ship_details' onChange={(e)=>console.log(e.target.value)} value={this.props.Qpay.ship_details}/>
                    <Input type='hiddin' name='item_details' onChange={(e)=>console.log(e.target.value)} value={this.props.Qpay.item_details}/>
                    <Input type='hiddin' name='other_details'onChange={(e)=>console.log(e.target.value)}  value={this.props.Qpay.other_details}/>
                </Form>

                <Form style={{display:'none'}} id='YaarPay' action={`${this.props.YaarPayRequest_url}`} method='POST' acceptCharset="UTF-8">
                    <Input type='hiddin' name='mchId' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.mchId}/>
                    {this.props.YaarPay.depositName ? (
                        <Input type='hiddin' name='depositName' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.depositName}/>
                    ):null}
                    <Input type='hiddin' name='depositBankCode' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.depositBankCode} />
                    <Input type='hiddin' name='mchOrderNo' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.mchOrderNo}/>
                    <Input type='hiddin' name='appId' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.appId}/>
                    <Input type='hiddin' name='amount' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.amount}/>
                    <Input type='hiddin' name='channelId' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.channelId}/>
                    <Input type='hiddin' name='currency' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.currency}/>
                    <Input type='hiddin' name='notifyUrl' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.notifyUrl}/>
                    <Input type='hiddin' name='returnUrl' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.returnUrl}/>
                    <Input type='hiddin' name='version' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.version}/>
                    <Input type='hiddin' name='sign' onChange={(e)=>console.log(e.target.value)} value={this.props.YaarPay.sign}/>
                </Form>
            </>
        )
    }
}
export default  PaymentRequest
                