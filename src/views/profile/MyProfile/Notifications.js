import React from "react"
import { Col,Row,Button} from "reactstrap"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import "../../../assets/scss/plugins/forms/switch/react-toggle.scss"
import { set_notification,get_notification,get_users} from "../../../redux/actions/profile"
import {connect} from "react-redux"
import { history } from "../../../history"


class Notifications extends React.Component {

    state = {
        internalmessage: false,
        pushnotification : false,
        emailnotification : false,
        sms : false,
        phonecall : false,
        notify : false,
        users : {}
    }

    async componentDidMount(){

        var user = get_users();
        if(user){
            await this.setState({users: user});
            this.props.get_notification(this.state.users.email);
        }else{
            history.push("/")
        }
    }

    notificationsave =() =>{
        var data = {};
        data = this.state;
        data['email'] = this.state.users.email;
        this.props.set_notification(data);
    }

    internalmessage = () => {
        this.setState({
            internalmessage: !this.state.internalmessage
        })
    }

    pushnotification = () => {
        this.setState({
            pushnotification: !this.state.pushnotification
        })
    }
    sms = () => {
        this.setState({
            sms: !this.state.sms
        })
    }
    emailnotification = () => {
        this.setState({
            emailnotification: !this.state.emailnotification
        })
    }
    phonecall = () => {
        this.setState({
            phonecall: !this.state.phonecall
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.notify !== this.props.notify){
            this.setState({internalmessage : this.props.notify.internalmessage,
            pushnotification :this.props.notify.pushnotification ,sms : this.props.notify.sms,
            emailnotification :this.props.notify.emailnotification,phonecall : this.props.notify.phonecall})
        }
    }
      
    render(){
            return (
                <div style={{padding:"2% 5%"}}>
                    <Row>
                        <Col md="12" sm='6' >
                            <h4 style={{textAlign:'center',padding:"2% 0px"}}>
                                Notify me about news and offer by
                            </h4>
                        </Col>
                        <Col md="12" sm="6">
                            <Row>
                                <Col md="9">
                                    <p>Internal Message</p>
                                </Col>
                                <Col md="3">
                                    <label className="react-toggle-wrapper">
                                        <Toggle
                                            checked={this.state.internalmessage}
                                            onChange={this.internalmessage}
                                            name="controlledSwitch"
                                            value="yes"
                                        />
                                        <Button.Ripple
                                        color="primary"
                                        onClick={this.internalmessage}
                                        size="sm"
                                        >
                                        {this.state.internalmessage ? "Yes" : "No"}
                                        </Button.Ripple>
                                    </label>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="12" sm="6">
                            <Row>
                                <Col md="9">
                                    <p>Push Notification</p>
                                </Col>
                                <Col md="3">
                                    <label className="react-toggle-wrapper">
                                        <Toggle
                                            checked={this.state.pushnotification}
                                            onChange={this.pushnotification}
                                            name="controlledSwitch"
                                            value="yes"
                                        />
                                        <Button.Ripple
                                        color="primary"
                                        onClick={this.pushnotification}
                                        size="sm"
                                        >
                                        {this.state.pushnotification ? "Yes" : "No"}
                                        </Button.Ripple>
                                    </label>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="12" sm="6">
                            <Row>
                                <Col md="9">
                                    <p>email</p>
                                </Col>
                                <Col md="3">
                                    <label className="react-toggle-wrapper">
                                        <Toggle
                                            checked={this.state.emailnotification}
                                            onChange={this.emailnotification}
                                            name="controlledSwitch"
                                            value="yes"
                                        />
                                        <Button.Ripple
                                        color="primary"
                                        onClick={this.emailnotification}
                                        size="sm"
                                        >
                                        {this.state.emailnotification ? "Yes" : "No"}
                                        </Button.Ripple>
                                    </label>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="12" sm="6">
                            <Row>
                                <Col md="9">
                                    <p>sms</p>
                                </Col>
                                <Col md="3">
                                    <label className="react-toggle-wrapper">
                                        <Toggle
                                            checked={this.state.sms}
                                            onChange={this.sms}
                                            name="controlledSwitch"
                                            value="yes"
                                        />
                                        <Button.Ripple
                                        color="primary"
                                        onClick={this.sms}
                                        size="sm"
                                        >
                                        {this.state.sms ? "Yes" : "No"}
                                        </Button.Ripple>
                                    </label>
                                </Col>
                            </Row>
                        </Col>
    
                        <Col md="12" sm="6">
                            <Row>
                                <Col md="9">
                                    <p>phonecall</p>
                                </Col>
                                <Col md="3">
                                    <label className="react-toggle-wrapper">
                                        <Toggle
                                            checked={this.state.phonecall}
                                            onChange={this.phonecall}
                                            name="controlledSwitch"
                                            value="yes"
                                        />
                                        <Button.Ripple
                                        color="primary"
                                        onClick={this.phonecall}
                                        size="sm"
                                        >
                                        {this.state.phonecall ? "Yes" : "No"}
                                        </Button.Ripple>
                                    </label>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="12" sm="6">
                                <Row>
                                    <Col me="3" sm="6">
                                        <Button color="primary" onClick={()=>this.notificationsave()}>
                                            Confirm
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                    </Row>
                </div>
            )        
    }
}

const get_data = (state) =>{
    return {
        user : state.auth.login,
        notify : state.profile.notification.notify
    }
}

export default connect(get_data,{set_notification,get_notification})(Notifications)
