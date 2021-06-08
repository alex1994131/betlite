import React, { Component } from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import {Root} from "../../authServices/rootconfig"
import avatar from "../../assets/avatar.png"
import { Row,Col } from "reactstrap";
import Media from "react-media";

class SidebarHeader extends Component {

	state = {
		users : {},
		avatar : null,
		mbalance : '0 INR',
		bbalance : '0 INR'
    }

	componentDidUpdate(prevProps, prevState){
		if(prevProps.user !== this.props.user){
			this.setState({
				users : this.props.user.values,
				avatar : this.props.user.profile_user ? this.props.user.profile_user.avatar:null,
			});
		}
		if(prevProps.bal !== this.props.bal){
             this.setState({bbalance : this.props.bal ? parseInt(this.props.bal.bonusbalance).toString()+' INR':'0 INR',mbalance :this.props.bal ? parseInt(this.props.bal.balance).toString()+' INR':'0 INR' });
        }
	}

	render() {
		return (
			<Media 
				queries={{
					Mobile : "(max-width: 767px)",
					Tablet : "(min-width: 768px) and (max-width: 991px)",
					Desktop : "(min-width: 992px)"
				}}>
				{matches => (
					<div className="navbar-header" style={{height:'9rem', width:'100%'}}>
						<ul className="nav navbar-nav flex-row">
						{matches.Mobile && 
							<li style={{width:'100%'}} className="nav-item nav-toggle d-block">
								<div className="nav-link">
								<Row style={{margin:'0.5rem' ,marginBottom:'0' ,display:"inline-block"}}>
									<Col md="6" sm="12">
											<div style={{background:'#1b4048', cursor:'pointer', width:'100%', fontSize:'1rem', textAlign:'center', color:'#1fae73', marginRight:'2%',marginTop:"1rem",padding:"0.5rem"}}>Main Balance {this.state.mbalance}</div>
									</Col>
									<Col md="6" sm="12">
										<div style={{background:'#1b4048', cursor:'pointer', width:'100%', fontSize:'1rem', textAlign:'center', color:'#1fae73', marginLeft:'2%',marginTop:"1.5rem",padding:"0.5rem"}}>Bonus Balance {this.state.bbalance}</div>
									</Col>

								</Row>
							</div>
						</li>
						}
						{matches.Tablet || matches.Desktop &&
							<li style={{width:'100%'}} className="nav-item nav-toggle d-block">
								<div className="nav-link">
									<Link to="/myprofile/profile-info" className="d-flex">
										{this.state.avatar?(
											<img className="m-1" src={Root.imageurl +this.props.user.profile_user.avatar} style={{width:"40px", borderRadius:'50%'}} alt=''/>
										):(
											<img className="m-1" src={avatar} style={{width:"40px", borderRadius:'50%'}} alt=''/>  
										)}
										<h5 className="d-table text-center m-0 mt-1">{this.state.users ? this.state.users.email : ""}<small className="d-table-row mt-1">{this.state.users ? this.state.users.username : ""}</small></h5>
									</Link>
									<Row style={{margin:'0.5rem' ,marginBottom:'0'}}>
											<div style={{background:'#1b4048', cursor:'pointer', width:'48%', fontSize:'11px', textAlign:'center', padding:'1px', color:'#1fae73', marginRight:'2%'}}>Main Balance<br/>{this.state.mbalance}</div>
											<div style={{background:'#1b4048', cursor:'pointer', width:'48%', fontSize:'11px', textAlign:'center', padding:'1px', color:'#1fae73', marginLeft:'2%'}}>Bonus Balance<br/>{this.state.bbalance}</div>

									</Row>
								</div>
							</li>
						}
						</ul>
					</div>
				)}
			</Media>
		)
	}
}

const getusers = (state) =>{
    return {
        user : state.auth.login,
        bal : state.balance.value,
    }
  }
export default connect(getusers)(SidebarHeader)