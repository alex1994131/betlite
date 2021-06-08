import React from "react"
import {Row, Col} from "reactstrap"
import WithdrawStatusChild from "./WithdrawStatusChild"
import queryString from "query-string"

class DepositStatus extends React.Component {
    
    render(){
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                       <WithdrawStatusChild parsedFilter={queryString.parse(this.props.location.search)}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default DepositStatus