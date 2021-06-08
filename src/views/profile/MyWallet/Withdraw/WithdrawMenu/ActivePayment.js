import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'

class ActivePayment extends Component {
    render() {
        const {activeData} = this.props;
        return (
            <>
                <h4 className='pt-1'>Your Chosen Method</h4>
                <Row className='payment-deposit-active'>
                    <Col xs='12'>
                        <img className='' src={activeData.image} alt=''/>
                    </Col>
                    <Col xs='12 payment-deposit-text font-1'>
                        {activeData.type}
                    </Col>
                    <Col xs='12 payment-deposit-text font-2'>
                        {`Min:   ${activeData.currency+"  "+activeData.min}    |    Max:   ${activeData.currency+"  "+activeData.max}`}
                    </Col>
                    <Col xs='12 payment-deposit-text font-2'>
                        {activeData.date?
                            "Time: "+activeData.date
                        :''}
                    </Col>
                </Row>
            </>
        )
    }
}
export default ActivePayment