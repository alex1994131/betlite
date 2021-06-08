import React from 'react'
import { Card, CardBody, CardHeader, Row, Col, Label, CardTitle } from "reactstrap"
import { QpayResults } from "../../redux/actions/paymentGateWay"
import { history } from "../../history";
import { connect } from "react-redux"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import "react-toggle/style.css"
import "../../assets/scss/plugins/forms/switch/react-toggle.scss"

class QpayResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        var order_no = history.location.pathname.split(':')[1];
        this.props.QpayResults(order_no);
    }

    render (){
        return (
            this.props.PayResultsData? (
                <React.Fragment>
                    <Breadcrumbs breadCrumbTitle="PaymentGatway" breadCrumbParent="Qpay"/>
                    <Row>
                        <Card className="vw-100 top-0 left-0">
                            <CardHeader >
                                <CardTitle className="text-center" style={{margin:"auto"}}>
                                    <h1 >Qpay</h1>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <CardTitle className="text-center" style={{margin:"auto"}}>
                                        <h5>Your payment is {this.props.PayResultsData.resultData.txn_response.status} Here is the details for it</h5>
                                    </CardTitle>
                                </Row>
                                <Row>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="Order Number">{this.props.PayResultsData.resultData.txn_response.order_no}</Label>
                                    </Col>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="Amount">{this.props.PayResultsData.resultData.txn_response.amount}</Label>
                                    </Col>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="ag_ref">{this.props.PayResultsData.resultData.txn_response.ag_ref}</Label>
                                    </Col>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="pg_ref">{this.props.PayResultsData.resultData.txn_response.pg_ref}</Label>
                                    </Col>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="res_message">{this.props.PayResultsData.resultData.txn_response.res_message}</Label>
                                    </Col>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="status">{this.props.PayResultsData.resultData.txn_response.status}</Label>
                                    </Col>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="Aggregator ID">{'<'+this.props.PayResultsData.resultData.txn_response.txn_date+'>'+this.props.PayResultsData.resultData.txn_response.txn_time}</Label>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>  
                    </Row>
                </React.Fragment>
            ) :(
                <div/>
            )
        )
    }
}

const paymentGateWayData = (state) =>{
    return {
        PayResultsData : state.paymentGateWay.PayResultsData,
    }
}
export default connect(paymentGateWayData,{QpayResults})(QpayResponse)