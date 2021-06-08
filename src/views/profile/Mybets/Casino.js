import React from "react"
import {Row, Col} from "reactstrap"
import CasinoChild from "./CasinoChild"
import queryString from "query-string"

class Casino extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                       <CasinoChild parsedFilter={queryString.parse(this.props.location.search)}/>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Casino