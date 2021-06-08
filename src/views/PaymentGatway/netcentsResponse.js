import React from 'react'
import { Card, CardBody, CardHeader, Row, Col, Label, CardTitle } from "reactstrap"
import { netcentsResults } from "../../redux/actions/paymentGateWay"
import { connect } from "react-redux"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import "react-toggle/style.css"
import "../../assets/scss/plugins/forms/switch/react-toggle.scss"

class netcentsResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        var order_no = window.location.href.split('=')[1];
        this.props.netcentsResults(order_no);
    }
    render (){
        return (
            this.props.PayResultsData? (
                <React.Fragment>
                    <Breadcrumbs breadCrumbTitle="PaymentGatway" breadCrumbParent="netcents"/>
                    <Row>
                        <Card className="vw-100 top-0 left-0">
                            <CardHeader >
                                <CardTitle className="text-center" style={{margin:"auto"}}>
                                    <h1 >netcents</h1>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <CardTitle className="text-center" style={{margin:"auto"}}>
                                        <h5>Your payment is {this.props.PayResultsData.resultData.transaction_status} Here is the details for it</h5>
                                    </CardTitle>
                                </Row>
                                <Row>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="external_id">{this.props.PayResultsData.resultData.external_id}</Label>
                                    </Col>
                                    <Col md="6"  sm="12" className="p-1" >
                                        <Label for="amount_received">{this.props.PayResultsData.resultData.transaction_currency+"  "+this.props.PayResultsData.resultData.amount_received}</Label>
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
export default connect(paymentGateWayData,{netcentsResults})(netcentsResponse)