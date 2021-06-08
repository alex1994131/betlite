import React from "react"
import { Row, Col, Card, CardBody, Button, Input } from "reactstrap"
import Select from "react-select"

class Security extends React.Component {
    constructor() {
        super();
        this.state = {
            options : [
                { value: "Choose message type", label: "Choose message type" }
            ],
            iterationoptions : [
                { value: 500, label: 500 },
                { value: 400, label: 400 },
                { value: 300, label: 300 },
            ]
        }
    }
    render() {
        return (
            <div>
                <Row className="mb-1">
                    <Col>
                        <Card className="mb-0">
                            <CardBody>
                                <h6 className="d-block mb-1">BONUS FUNDS</h6>
                                <span className="pr-1 pl-1 d-block">We believe it is our responsibility to make sure your experience is that of joy, not of woe. If you have problems controlling your spending, we can help you with the following options.</span>
                                <Select
                                    className="React mt-1 w-25"
                                    classNamePrefix="select"
                                    id="messagetype"
                                    options={this.state.options}
                                    defaultValue={{value : this.state.options[0].value,label : this.state.options[0].label}}
                                />  
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col>
                        <Card className="mb-0">
                            <CardBody>
                                <h6 className="d-block mb-1">ALWAYS KEEP BROWSER BACKUP</h6>
                                <span className="pr-1 pl-1 d-block">Enable this option to force a wallet backup to be stored in your browsers local storage even when two factor authentication is enabled. If enabled an attacker with access to your browser would be able to circumvent two factor authentication, however if the wallet is accesed using any other PC or browser it is still protected by two factor authentication.</span>
                                <Button className="mt-1" color="success">ENABLE</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col>
                        <Card className="mb-0">
                            <CardBody>
                                <h6 className="d-block mb-1">SECRET PHRASE</h6>
                                <span className="pr-1 pl-1 d-block">A secret phrase can be used to help us verify your identity in case of a lost wallet identity or yobikey. it can be a single word or sentence up to 255 characters in length.</span>
                                <div className="d-table mt-1 pr-1 pl-1">
                                    <span className="d-table-cell align-middle">Secret phrase</span>
                                    <Input className="ml-3" />
                                </div>
                                <Button className="mt-1" color="success">EDIT</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-1">
                    <Col>
                        <Card className="mb-0">
                            <CardBody>
                                <h6 className="d-block mb-1">PBKDF2 ITERATIONS</h6>
                                <span className="pr-1 pl-1 d-inline-block pr-2">PBKDF2 is a function which stretches your password increasing the effort required to bruteforce it. A higher number of iterations is better however you may notice a slow down of your browser.</span>
                                <div className="d-table mt-1 pr-1 pl-1 w-40">
                                    <span className="d-table-cell align-middle">Iteration</span>
                                    <Select
                                        className="React mt-1 pl-2 d-table-cell w-75"
                                        classNamePrefix="select"
                                        id="messagetype"
                                        options={this.state.iterationoptions}
                                        defaultValue={{value : this.state.iterationoptions[0].value,label : this.state.iterationoptions[0].label}}
                                    />  
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Security