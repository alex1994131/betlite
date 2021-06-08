import React from "react"
import {Button,FormGroup,Row,Col,Input,Label} from "reactstrap"
import { Settings, Lock} from "react-feather"
import {jwt_ed} from "../../../redux/actions/auth/index"
import {changepassword} from "../../../redux/actions/auth/ProfileActions"
import { connect } from "react-redux"

class ChangePassword extends React.Component {

    state = {
        currentpassword : '',
        password : '',
        confirmpassword : '',
    }

    changepassword = () =>{
        var currentpassword =jwt_ed(this.state.currentpassword);
        var lastpassword = this.props.users.values.password;
        if(currentpassword !== lastpassword){
            alert("Please input correct currentpassword");
            return;
        }else{
            if(this.state.password !== this.state.confirmpassword){
                alert("Please input correct password and confirmpassword");
                return;
            }else{
                this.props.changepassword({email : this.props.users.values.email,password : this.state.password});
                this.setState({currentpassword : '',password : '', confirmpassword : ''})                
            }
        }
    }
    render(){
        return (
            <div className="pl-2 pr-2 pt-2" style={{backgroundColor:"#102226"}}>
                <Row>
                    <Col sm="12" md="12">
                    <Label >CurrentPassword</Label>
                        <FormGroup className="has-icon-left form-label-group position-relative">
                            <Input
                                type="password"
                                placeholder="CurrentPassword"
                                required
                                value={this.state.currentpassword}
                                onChange={e => this.setState({ currentpassword: e.target.value })}
                            />
                            <div className="form-control-position">
                                <Lock size={15} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="12">
                    <Label >New Password</Label>
                        <FormGroup className="has-icon-left form-label-group position-relative">
                            <Input
                                type="password"
                                placeholder="Password"
                                required
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                            <div className="form-control-position">
                                <Settings size={15} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="12">
                    <Label >confirmpassword</Label>
                        <FormGroup className="has-icon-left form-label-group position-relative">
                            <Input
                                type="password"
                                placeholder="confirmpassword"
                                required
                                value={this.state.confirmpassword}
                                onChange={e => this.setState({ confirmpassword: e.target.value })}
                            />
                            <div className="form-control-position">
                                <Settings size={15} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="12">
                        <FormGroup className="has-icon-left form-label-group position-relative">
                            <Button color="primary" type="button" className="mr-1 mb-1" style={{margin:"0px !important"}} onClick={()=>this.changepassword()} >
                                Save
                            </Button>
                            
                        </FormGroup>
                        </Col>
                </Row>
            </div>
        )
    }
}

const getusers = (state) =>{
    return {
        users: state.auth.login
    }
}
export default connect(getusers,{changepassword})(ChangePassword)