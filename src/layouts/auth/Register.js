import React from "react"
import { Button, Card, CardBody, CardHeader, Form, Row, Col, FormGroup, Input, CardFooter, CardTitle } from "reactstrap"
import { connect } from "react-redux"
import {setloginpage,registeraction} from '../../redux/actions/auth/loginActions'
import Animate from 'animate.css-react'
import {get_iplocation} from "../../redux/actions/auth/registerActions"
import {Root} from "../../authServices/rootconfig"
import captchapng from 'captchapng';
import {toast} from "react-toastify"
import {User,Mail,Lock,} from "react-feather"

class Register extends React.Component{
    
    state = {
        captchapng:null,
        captchanumber:null,
        register_card : false,
        password : "",
        email : "",
        firstname : "",
        lastname : "",
        username : "",
        mobilenumber : "",
        repassword : "",
        digit_code : "",
        users : {
            country_name : "",
            region_name : "",
            city_name : "",
            country_code : "",
            zip_code  : "",
            time_zone : "",
            area_code : "",
            isp : "",
            domain : "",
            net_speed : "",
            ip : "",
        },
        
    }

    componentWillMount(){
        this.captchaImg();
        this.props.get_iplocation();
    }

    toggle_register = () =>{
        this.props.setloginpage({register : true, login : false})
    }

    cancle = () => {
        this.props.setloginpage({login : false, register : false});
    }

    
    validateUsername = (fld) =>{
        
        var error = "";
        var illegalChars = /\W/; // allow letters, numbers, and underscores
    
        if (fld === "") {
            error = "You didn't enter a username.\n";
            toast.error(error);
            return false;
    
        } else if ((fld.length < 5) || (fld.length > 15)) {
            error = "The username is the wrong length. The username Maxlength is 15 and Minlength is 5\n";
            toast.error(error);
            return false;
    
        } else if (illegalChars.test(fld)) {
            error = "The username contains illegal characters. \n";
            toast.error(error);
            return false;
    
        } else {

        }
        return true;
    }

    handleregister = e =>{
        e.preventDefault();
        if(this.state.repassword !== this.state.password){
            toast.error("please input correct password");
            return;
        }else if(parseInt(this.state.digit_code) !== this.state.captchanumber){
            toast.error("please input correct digit code");
            return;
        }else{
            var usernamecheck= this.validateUsername(this.state.username)
            if(usernamecheck){
                var row = {
                    password : this.state.password,
                    email : this.state.email,
                    firstname : this.state.firstname,
                    lastname : this.state.lastname,
                    username : this.state.username,
                    country_name : this.state.users.country_name,
                    region_name : this.state.users.region_name,
                    city_name : this.state.users.city_name,
                    country_code : this.state.users.country_code,
                    zip_code  : this.state.users.zip_code,
                    time_zone : this.state.users.time_zone,
                    area_code : this.state.users.area_code,
                    isp : this.state.users.isp,
                    domain : this.state.users.domain,
                    ip : this.state.users.ip,
                    mobilenumber : this.state.mobilenumber,
                    permission : Root.player,
                    status : "allow",
                    isdelete : false,
                    created : Root.player
                }
                this.props.registeraction(row)
            }else{

            }
        }
    }
    captchaImg(){
        var captchanumber = parseInt(Math.random()*9000+1000);
        var p = new captchapng(150,38,captchanumber);
        p.color(115, 95, 197, 100);
        p.color(30, 104, 21, 255);
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        img = "data:image/jpeg;base64,"+new Buffer(imgbase64).toString('base64');   
        this.setState({captchapng:img});
        this.setState({captchanumber:captchanumber});
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.loginpage !== this.props.loginpage){
            if (this.props.loginpage.register === false) {
                this.setState({register_card : false})
            }else{
                this.setState({register_card : true})
            }
        }
        if(prevProps.iplocation !== this.props.iplocation){
            this.setState({users : this.props.iplocation})
        }
    }

    render(){
        return (
            <div className='imtem-center'>
                <Button.Ripple color="danger" className="btn-register round" onClick={()=>this.toggle_register()} >Register</Button.Ripple>
                {
                    this.state.register_card === true ? 
                    <Animate appear="fadeIn" durationAppear={500} leave="fadeOut" durationLeave={500}  >
                        <Form action="/" onSubmit={this.handleregister}  className="position-fixed vw-100 text-center vh-100 top-0 left-0"  style={{zIndex:'1000',display:"initial", top:"0px", left:"0px", backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU1rN4CgAClQF43CvNlgAAAABJRU5ErkJggg==)', overflowY:"scroll"}}>
                            <Card style={{background:'#292F41', borderRadius:'7px', margin: '5rem auto', maxWidth:'470px'}}>
                                <CardHeader className="d-block w-100 text-center pb-3" >
                                    <img alt="" src={!this.props.firstpagesettinglogoimg ? "" :Root.imageurl + this.props.firstpagesettinglogoimg.content} width="150" />  
                                    <CardTitle className="d-block w-100 mt-1">CREAT FREE ACCOUNT</CardTitle>
                                </CardHeader>
                                <div style={{height:'1px', background:'#6a748e'}}/>
                                <CardBody className="register-body pt-1 pb-0" >
                                    <Row className="pr-2 pl-2">
                                        <Col xs="12" sm="6" className="pt-1 pl-0" >
                                            <FormGroup className="has-icon-left position-relative">
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    placeholder="user name"
                                                    required
                                                    minLength={5}
                                                    maxLength={15}
                                                    value = {this.state.username}
                                                    onChange={e=>this.setState({username : e.target.value})}
                                                />
                                                <div className="form-control-position">
                                                    <User size={15} />
                                                </div>
                                            </FormGroup>
                                        </Col>
    
                                        <Col  xs="12" sm="6"  className="pt-1 pb-1 pl-0" >
                                            <FormGroup className="has-icon-left position-relative">
                                                <Input
                                                    type="email"
                                                    name="Email"
                                                    required
                                                    value={this.state.email}
                                                    onChange={e=>this.setState({email : e.target.value})}
                                                    id="EmailVerticalIcons"
                                                    placeholder="Email"
                                                />
                                                <div className="form-control-position">
                                                    <Mail size={15} />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12" sm="6" className="pt-1 pb-1 pl-0" >
                                            <FormGroup className="has-icon-left position-relative">
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    required
                                                    maxLength={15}
                                                    minLength={6}
                                                    value={this.state.password}
                                                    onChange={e=>this.setState({password : e.target.value})}
                                                />
                                                <div className="form-control-position">
                                                    <Lock size={15} />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12" sm="6" className="pt-1 pb-1 pl-0" >
                                        
                                            <FormGroup className="has-icon-left position-relative">
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    placeholder="RePassword"
                                                    required
                                                    maxLength={15}
                                                    minLength={6}
                                                    value={this.state.repassword}
                                                    onChange={e=>this.setState({repassword : e.target.value})}
                                                />
                                                <div className="form-control-position">
                                                    <Lock size={15} />
                                                </div>
                                            </FormGroup>
                                        </Col>


                                        <Col xs="6" sm="3" className="pt-1 pb-1 pl-0" >
                                            
                                            <FormGroup className="position-relative">
                                                <Input
                                                    className='pr-1'
                                                    type="text"
                                                    name="name"
                                                    placeholder="First Name"
                                                    required
                                                    minLength={5}
                                                    maxLength={15}
                                                    value = {this.state.firstname}
                                                    onChange={e=>this.setState({firstname : e.target.value})}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col xs="6" sm="3" className="pt-1 pb-1 pl-0" >
                                            
                                            <FormGroup className="position-relative">
                                                <Input
                                                    className='pr-1'
                                                    type="text"
                                                    name="name"
                                                    required
                                                    minLength={5}
                                                    maxLength={15}
                                                    value = {this.state.lastname}
                                                    onChange={e=>this.setState({lastname : e.target.value})}
                                                    placeholder="Last Name"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12" sm="6" className="pt-1 pb-1 pl-0" >
                                            
                                            <FormGroup className="has-icon-left position-relative">
                                                <Input
                                                    type="number"
                                                    name="mobile"
                                                    id="IconsMobile"
                                                    placeholder="Mobile"
                                                    onChange={e=>this.setState({mobilenumber : e.target.value})}
                                                    value = {this.state.mobilenumber}
                                                    maxLength={10}
                                                    required
                                                />
                                                <div className="form-control-position">
                                                    <span style={{color:'white'}}>+91</span>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col xs="12" sm="6" className="pt-1 pb-1 pl-0" >
                                            <FormGroup className="form-label-group">
                                                <Input type="number" name="digit_code" id="digit_code" placeholder="Enter 4 digit code"
                                                    required
                                                    maxLength={4}
                                                    value = {this.state.digit_code}
                                                    onChange={e=>this.setState({digit_code : e.target.value})}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col  xs="12" sm="6" className="pt-1 pb-1 pl-0" >
                                            <img alt="" src={this.state.captchapng}/>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className='pb-4 pl-3 pr-3 d-flex'>
                                    <Button className='round register-submit' type="submit">Register</Button>
                                    <Button className='round register-cancle' type="button" onClick={()=>this.cancle()}>Cancle</Button>
                                </CardFooter>
                            </Card>
                        </Form>
                    </Animate>
                    :
                        ""
                }
            </div>
        )
    }
}

const getloginpage = (state) => {
    return {
        loginpage : state.auth.login.setloginpage,
        firstpagesettinglogoimg : state.auth.login.firstpagesettinglogoimg,
        iplocation : state.auth.register.iplocation
    }
}

export default connect(getloginpage, {registeraction,setloginpage,get_iplocation})(Register)