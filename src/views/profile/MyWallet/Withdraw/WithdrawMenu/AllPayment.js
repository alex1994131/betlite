import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'

class AllPayment extends Component {
    render() {
        return (
            <Row className='payment-deposit-all mt-1 pl-2 pr-2 pb-1'>
                <h4>Available payment methods</h4>
                {
                    this.props.allMethod&&this.props.allMethod.length ?(
                        this.props.allMethod.map((item, key)=>(
                            <Col    
                                style={{ maxWidth:'300px', margin:'5px auto', padding: '0px', border: '3px solid'}}
                                className={"item "+(this.props.activeindex===key?'payment-deposit-item-active':'')}
                                xs='12' key={key} onClick={()=>this.props.active(key)}>
                                <div style={{display:'flex'}}>
                                    <div style={{width:'50%'}} className='justify-content-centers'>
                                        <img className='payment-deposit-item-img' src={item.image} alt=''/>
                                    </div>
                                    <div style={{width:'50%', wordBreak:'break-all'}} className='payment-deposit-text font-2 justify-content-centers'>
                                        {item.name}
                                    </div>
                                </div>
                            </Col>
                        ))
                    ):null 
                }
            </Row>
        )
    }
}
export default  AllPayment