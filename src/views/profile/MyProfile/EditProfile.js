import React from "react"
import {Button,FormGroup,Row,Col,Input,Label,CardBody,CardHeader,CardFooter,CardTitle} from "reactstrap"
import { connect } from "react-redux"
import { Againregister,get_userinfor } from "../../../redux/actions/auth/ProfileActions"
import Fileupload from "../../lib/crop"
import {toast} from "react-toastify"
import avatar from "../../../assets/avatar.png"
import { get_users } from "../../../redux/actions/profile/index"
import { Root } from "../../../authServices/rootconfig"
import "flatpickr/dist/themes/light.css"
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"

class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',
            user : {},
            firstname : "",
            lastname : "",
            modal : false,
            mobilenumber : "",
            avatar : ""
        }
    }
    componentDidMount(){
        var user =  get_users();
        if(user){
            this.props.get_userinfor(user.email);
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.users){
            if(this.props.users.profile_user){
                if(this.props.users.profile_user !== prevProps.users.profile_user){
                    var user = this.props.users;
                    this.setState({email : user.profile_user.email,avatar : user.profile_user.avatar, username : user.profile_user.username,firstname :user.profile_user.firstname,lastname :user.profile_user.lastname,mobilenumber : user.profile_user.mobilenumber})
                }
            }
        }
    }

    SaveRegister(){
        this.props.Againregister(this.state)
    }

    modalflag = (bool)=>{
        this.setState({modal : bool});
    }
    filechange(fpImg){
        var me = this
        if (fpImg === null) {
            toast.warning("Select the file.");
            return;
        }
        var xml = new XMLHttpRequest();
        const fpdata = new FormData();
        fpdata.append('fpImgFile', fpImg);
        fpdata.append('mobilenumber',me.state.mobilenumber)
        fpdata.append('email',me.state.email)
        fpdata.append('firstname',me.state.firstname)
        fpdata.append('lastname',me.state.lastname)
        xml.open('post', Root.adminurl + "profile/profilesave");
        xml.send(fpdata);
        xml.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var rdata = JSON.parse(xml.responseText);
                if (rdata.status === true) {
                    toast.success("Uploaded successfully!");
                    me.Logoload(me.state.email)
                }else {
                    toast.error("Upload Faild.")
                }
            }
        };
    }

    render(){
        return (
            <div className='p-1' style={{background:'#102226', margin:'auto'}}>
                <CardHeader className="d-block w-100 text-center" >
                    <CardTitle className="d-block w-100" style={{color:'#fff'}}>ACCOUNT INFORMATION</CardTitle>
                </CardHeader>
                <CardBody className="register-body" >                        
                    <Row className="pr-2 pl-2">
                        <Col lg='4' sm='12' xs='12'>
                            <Row>
                                <Col xs="12" sm="12" className="p-1" style={{display:'flex'}}>
                                    {
                                        this.state.avatar === "" ?
                                        <img src={avatar} alt="" style={{ margin:'auto',width:"200px", borderRadius:'50%'}} />
                                        :
                                        <img alt="" src={Root.imageurl + this.state.avatar} style={{ margin:'auto',width:"200px", borderRadius:'50%'}} />
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" sm="12" className="p-1" style={{display:'flex'}}>
                                    <Button style={{margin:'auto'}} outline onClick={()=>this.modalflag(true)} >Avatar File</Button>
                                    <Fileupload modal={this.state.modal} Logoload = {this.props.get_userinfor} state={this.state} modalflg={this.modalflag} style={{width :"280px",height:"280px",borderRadius : "50%",border:"1px solid"}} aspect={1} filedupload ={this.filechange}   />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg='8' sm='12' xs='12' className='p-3'>
                            <Row>
                                <Col xs="12" sm="12" className="p-1" >
                                    <FormGroup className="form-label-group">
                                        <Input type="text" name="user_name" id="username" placeholder="User Name"
                                            required
                                            disabled={true}
                                            value = {this.state.username}
                                            onChange={e=>this.setState({username : e.target.value})}
                                        />
                                        <Label>username</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs="6" sm="6" className="p-1" >
                                    <FormGroup className="form-label-group">
                                        <Input type="text" name="firstname" id="firstname" placeholder="First Name"
                                            required
                                            value = {this.state.firstname}
                                            onChange={e=>this.setState({firstname : e.target.value})}
                                        />
                                        <Label>first name</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs="6" sm="6" className="p-1" >
                                    <FormGroup className="form-label-group">
                                        <Input type="text" name="lastname" id="lastname" placeholder="Last Name"
                                            required
                                            value = {this.state.lastname}
                                            onChange={e=>this.setState({lastname : e.target.value})}
                                        />
                                        <Label>last name</Label>
                                    </FormGroup>
                                </Col>
                                <Col xs="12" sm="12" className="p-1" >
                                    <FormGroup className="position-relative form-label-group has-icon-left input-divider-left">
                                        <Input 
                                            type="text" 
                                            placeholder="Mobile Number" 
                                            className="form-control"
                                            name="mobilenumber" 
                                            id="mobilenumber" 
                                            onChange={e=>this.setState({mobilenumber : e.target.value})}
                                            value = {this.state.mobilenumber}
                                            maxLength={10}
                                            required
                                        />
                                        <Label>mobile number</Label>
                                        <div className="form-control-position">
                                            <span style={{color:'white'}}>+91</span>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter style={{textAlign:'right'}} className='pt-1'>
                    <Button  color="primary" type="submit" onClick={()=>this.SaveRegister()}>Save</Button>
                </CardFooter>
            </div>
        )
    }
}
const getuser = state =>{
    return { users : state.auth.login }
}
export default connect(getuser,{Againregister,get_userinfor})(EditProfile)
