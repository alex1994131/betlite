import React from "react"
import { Row, Col } from "reactstrap"
import QuestionsSearch from "./QuestionsSearch"

import "../../assets/scss/pages/faq.scss"

class Faq extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className='m-1 pt-2'>
          <Col sm="12">
            <QuestionsSearch />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Faq
