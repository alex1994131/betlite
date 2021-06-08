import React from "react"
import {Row, Col} from "reactstrap"
import DepositStatusChild from "./DepositStatusChild"
import queryString from "query-string"

class DepositStatus extends React.Component {
    
    render(){
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                       <DepositStatusChild parsedFilter={queryString.parse(this.props.location.search)}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default DepositStatus