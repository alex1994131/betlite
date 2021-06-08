import React, { Component } from 'react'
import { Col, Row, Button, Input } from 'reactstrap'
import Select from "react-select"

class Deposit extends Component {
    render() {
        const { activeMethod, amount, depositBankCodes,depositBankCode,setValue, moreInfoState, paymentDeposit}=this.props;
        return (
            <Row className='p-2'>
                <Col sm='12' lg='6' className='pl-1 pr-1'>
                    {activeMethod.paymentType.split('-')[0]==='bank'?(
                    <>
                        <Row>
                            <Col xs='12'>
                                <Select
                                    className="React"
                                    classNamePrefix="select"
                                    id="depositBankCode"
                                    name="depositBankCode"
                                    options={depositBankCodes}
                                    value={depositBankCodes.find(obj => obj.value === depositBankCode)}
                                    onChange={e => setValue("depositBankCode",e.value)}
                                />
                            </Col>
                            <Col xs='12' className='mt-2'>
                                <Row>
                                    <Col 
                                        xs='12' 
                                        style={{cursor:'pointer'}} 
                                        className="payment-deposit-text font-2" 
                                        onClick={()=>setValue("moreInfoState",!moreInfoState)}
                                    >
                                        More info
                                    </Col>
                                </Row>
                                {moreInfoState?(
                                    <Row className='payment-deposit-text font-2 mt-1'>
                                        <Col xs='12'><Input style={{minHeight:'300px', borderRadius:'0px'}} type='textarea' value={activeMethod.info} onChange={()=>console.log()}/></Col>
                                    </Row>
                                ):null}
                            </Col>
                        </Row>
                    </>
                     ):null}
                </Col>
                <Col sm='12' lg='6' className='pl-1 pr-1'>
                    <Row>
                        <Col xs='6' style={{textAlign:'left'}} className='payment-deposit-text font-2 justify-content-starts'>
                            Amount
                        </Col>
                        <Col xs='6' className='payment-deposit-text font-2 justify-content-ends'>
                            {activeMethod.currency+" "+amount}
                        </Col>
                    </Row>
                    <Row  className='mt-1'>
                        <Col xs='6'style={{textAlign:'left'}} className='payment-deposit-text font-2 justify-content-starts'>
                            Amount charged (incl.fee)
                        </Col>
                        <Col xs='6' className='payment-deposit-text font-2 justify-content-ends'>
                            {activeMethod.currency+" "+amount}
                        </Col>
                    </Row>
                    <Row  className='mt-1 pt-1'>
                        <Col xs='6' className='justify-content-starts'>
                            <h4 style={{textAlign:'left'}} className='font-2'>Total balance update</h4>
                        </Col>
                        <Col xs='6' className='payment-deposit-text font-2 justify-content-ends'>
                            {activeMethod.currency+" "+amount}
                        </Col>
                    </Row>
                    <Row  className='mt-1 pt-1'>
                        <Col xs='12'>
                            <Button color="warning" onClick={paymentDeposit} style={{width:'100%',fontWeight:'bold'}}>Make deposit</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
export default Deposit