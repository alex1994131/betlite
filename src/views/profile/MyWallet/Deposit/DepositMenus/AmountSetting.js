import React, { Component } from 'react';
import { Col, Row, Input, FormGroup } from 'reactstrap'
import Slider from "rc-slider"

class AmountSetting extends Component {
    render() {
        const { activeMethod,setValue, amount }=this.props;
        return (
            <>
                <Row><Col xs='12'><h4>Select amount and payment details</h4></Col></Row>
                <Row className="p-1">
                    <Col xs='12' md='8'>
                        <Row>
                            <Col xs="12">
                                <Slider
                                    min={activeMethod.min}
                                    max={activeMethod.max}
                                    value={amount}
                                    onChange={e => setValue("amount",e)}
                                    reverse={this.props.rtl === "rtl"}
                                />   
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='6' className="payment-deposit-text font-2 justify-content-starts">{activeMethod.currency+" "+activeMethod.min}</Col>
                            <Col xs='6' className="payment-deposit-text font-2 justify-content-ends">{activeMethod.currency+" "+activeMethod.max}</Col>
                        </Row>
                    </Col>
                    <Col xs='12' md='4'>
                        <FormGroup className="position-relative has-icon-left">
                            <Input 
                                min={activeMethod.min}
                                max={activeMethod.max}
                                type="number" 
                                onChange={(e) => e.target.value<=activeMethod.max ? setValue("amount",parseInt(e.target.value)):setValue("amount",activeMethod.max)} 
                                value={amount}  
                            />
                            <div className="form-control-position payment-deposit-text font-2">
                                {activeMethod.currency}
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className='pl-2 pr-2'><Col style={{width:'100%', height:'2px',backgroundColor:'#113536'}}></Col></Row>
            </>
        )
    }
}
export default  AmountSetting