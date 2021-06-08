// import React from 'react'
// import { Card, CardBody, CardHeader, Row, CardTitle } from "reactstrap"
// import { history } from "../../../history";
// import { connect } from "react-redux"
// import {emailverify_receive} from "../../../redux/actions/auth/loginActions"


// class Emailverify extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             user  :null
//         }
//     }

//     componentDidMount(){
//         var data = history.location.pathname.split(':')[1];
//         console.log(data);
//         this.props.emailverify_receive(data)
//     }

//     componentDidUpdate(prevProps){
//         if(this.props.userdata){
//             if(prevProps.userdata.profile_user !== this.props.userdata.profile_user){
//                 console.log(this.props.profile_user);
//                 this.setState({user : this.props.userdata.profile_user})
//             }
//         }
//     }

//     render (){
//         return (
//             this.state.user? (
                   
//                     <Row>
//                         <Card className="vw-100 top-0 left-0">
//                             <CardHeader >
//                                 <CardTitle className="text-center" style={{margin:"auto"}}>
//                                 {this.state.user.email}

//                                 </CardTitle>
//                             </CardHeader>
//                             <CardBody>
//                                 <Row>
//                                     <CardTitle className="text-center" style={{margin:"auto"}}>
//                                         {this.state.user.emailverify + ""}
//                                     </CardTitle>
//                                 </Row>
//                                 <Row>
                                   
//                                 </Row>
//                             </CardBody>
//                         </Card>  
//                     </Row>
//             ) :(
//                 <div/>
//             )
//         )
//     }
// }


// const mapStateToProps = (state) =>{
//     console.log(state)
//     return {
//         userdata : state.auth.login,
//     }
// }
// export default connect(mapStateToProps,{emailverify_receive})(Emailverify)

import React from 'react'
import { Card, CardBody,CardImg,CardImgOverlay } from "reactstrap"
import { history } from "../../../history";
import { connect } from "react-redux"
import {emailverify_receive} from "../../../redux/actions/auth/loginActions"
import {Root} from "../../../authServices/rootconfig"

class Emailverify extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user  :null
        }
    }

    componentDidMount(){
        var data = history.location.pathname.split(':')[1];
        this.props.emailverify_receive(data)
    }

    componentDidUpdate(prevProps){
        if(this.props.userdata){
            if(prevProps.userdata.profile_user !== this.props.userdata.profile_user){
                this.setState({user : this.props.userdata.profile_user})
            }
        }
    }

    render (){
        return (
            this.state.user? (
                   
            <div className='d-flex justify-content-center'>
                <Card className="text-white m-0" style={{width:'100%'}}>
                    <CardImg className="img-fluid" src={Root.imageurl + "hello summer 1024x300.jpg"} alt="card image cap" />
                    <CardImgOverlay className="p-0 d-flex flex-column justify-content-between">
                        <CardBody className='p-0' 
                            style={{ 
                               width:'100%',
                               borderRadius:'5px',
                               position: 'absolute',
                               top: '41%',
                               left: '50%',
                               transform: 'translate(-50%, -50%)',
                            }}>
                            <div sm='12' className="welcome-kasino9-1 font-medium-6 d-flex justify-content-center align-items-center w-100" style={{
                                color : "#102226",fontSize: "2rem"
                            }}>
                                Your account has been verified
                            </div>
                            <div sm='12' style={{lineHeight:'55px', fontWeight: 700, color:'#ff9f43',    fontSize: "5rem"}} className="welcome-kasino9-2 d-flex justify-content-center align-items-center w-100 mt-2">
                                Welcome to Kasino9
                            </div>
                            <div sm='12' className="welcome-kasino9-3 font-medium-5 text-white d-flex justify-content-center align-items-center w-100 mt-2">
                                The best betting experience is just around the corner!
                            </div>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
            </div>
              ) :(
                <div/>
            )
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        userdata : state.auth.login,
    }
}
export default connect(mapStateToProps,{emailverify_receive})(Emailverify)