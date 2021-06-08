import React, { Component } from 'react'
import { Col, Row, Button, Input } from 'reactstrap'
import Select from "react-select"

class Withdraw extends Component {
    render() {
        const { state, depositBankCodes, setValue, paymentWithdraw}=this.props;
        return (
            <Row className='p-2'>
                <Col sm='12' lg='6' className='pl-1 pr-1'>
                    {state.activeMethod.paymentType.split('-')[0]==='bank'?(
                        <>
                            <Row>
                                <Col xs='12'>
                                    <Input 
                                        type="text" 
                                        placeholder="Enter Account Name"
                                        onChange={(e) => setValue("accountName",e.target.value)} 
                                        value={state.accountName}  
                                    />
                                </Col>
                                <Col xs='12' className='mt-1'>
                                    <Input 
                                        type="text" 
                                        placeholder="Enter Account No"
                                        onChange={(e) => setValue("accountNo",e.target.value)} 
                                        value={state.accountNo}  
                                    />
                                </Col>
                                <Col xs='12' className='mt-1'>
                                    <Input 
                                        type="text" 
                                        placeholder="Enter IFSC Code"
                                        onChange={(e) => setValue("ifscCode",e.target.value)} 
                                        value={state.ifscCode}  
                                    />
                                </Col>
                                <Col xs='12' className='mt-1'>
                                    <Select
                                        className="React"
                                        classNamePrefix="select"
                                        id="depositBankCode"
                                        name="depositBankCode"
                                        options={depositBankCodes}
                                        value={depositBankCodes.find(obj => obj.value === state.depositBankCode)}
                                        defaultValue={depositBankCodes[0]}
                                        onChange={e => setValue("depositBankCode",e.value)}
                                    />
                                </Col>
                                
                            </Row>
                        </>
                    ):null}
                </Col>
                <Col sm='12' lg='6' className='pl-1 pr-1'>
                    <Row>
                        <Col xs='6'style={{textAlign:'left'}}  className='payment-deposit-text font-2 justify-content-starts'>
                            Amount
                        </Col>
                        <Col xs='6' className='payment-deposit-text font-2 justify-content-ends'>
                            {state.activeMethod.currency+" "+state.amount}
                        </Col>
                    </Row>
                    <Row  className='mt-1'>
                        <Col xs='6' style={{textAlign:'left'}} className='payment-deposit-text font-2 justify-content-starts'>
                            Amount charged (incl.fee)
                        </Col>
                        <Col xs='6' className='payment-deposit-text font-2 justify-content-ends'>
                            {state.activeMethod.currency+" "+state.amount}
                        </Col>
                    </Row>
                    <Row  className='mt-1 pt-1'>
                        <Col xs='6' className='justify-content-starts'>
                            <h4 style={{textAlign:'left'}} className='font-2'>Total balance update</h4>
                        </Col>
                        <Col xs='6' className='payment-deposit-text font-2 justify-content-ends'>
                            {state.activeMethod.currency+" "+state.amount}
                        </Col>
                    </Row>
                    <Row  className='mt-1 pt-1'>
                        <Col xs='12'>
                            <Button color="warning" onClick={paymentWithdraw} style={{width:'100%',fontWeight:'bold'}}>Make withdraw</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs='12'>
                    <Row>
                        <Col xs='12' sm='6' className='mt-2'>
                            <Row>
                                <Col 
                                    xs='12' 
                                    style={{cursor:'pointer'}} 
                                    className="payment-deposit-text font-2" 
                                    onClick={()=>setValue("moreInfoState",!state.moreInfoState)}
                                >
                                    More info
                                </Col>
                            </Row>
                            {state.moreInfoState?(
                                <Row className='payment-deposit-text font-2 mt-1'>
                                    <Col xs='12'><Input style={{minHeight:'300px', borderRadius:'0px'}} type='textarea' value={state.activeMethod.info} onChange={()=>console.log()}/></Col>
                                </Row>
                            ):null}
                        </Col>
                        <Col xs='12' sm='6'></Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default Withdraw