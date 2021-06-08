import React from "react"
import { Row, Col } from "reactstrap"
import Casino from "./Casino";
import LiveCasino from "./LiveCasino";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as FpMngAction from "../../redux/actions/auth/loginActions"
import { Root } from "../../authServices/rootconfig";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

class FirstPage extends React.Component {
	
	play = (item) =>{
      if(!this.props.user.values){
        this.props.setloginpage({login : true, register : false});
      }else{
        this.props.playsaccount(this.props.user.values,item.gamedata,true);
      }
	}

	render() {
		return (
			<React.Fragment>
				<Row className="fp-header mb-1">
					<Col lg="12" md="12" xs="12">
						<div className="fp-header-image">
							{
								this.props.fp_images ?
								(
									<AutoplaySlider
										play={true}
										cancelOnInteraction={false}
										interval={6000}
										fillParent={false}
										organicArrows={false}
										animation="scaleOutAnimation"
										bullets={true}
									>
										{
											this.props.fp_images.map((item, i) => (
												<div  className='firstpage-sliber-text' key={i} data-src={Root.imageurl+item.image}>
													{/* <div style={{zIndex:50}} className="fp-header-def">
														<div className='fp-header-def-h'>
															<h1><strong>{item.data.text1}</strong></h1>
														</div>
														<div className="fp-header-def-c">
															<h5>{item.data.text2}</h5>
														</div>
														<div className="fp-header-def-c" style={{top:'65%', right: '3vw'}}>
															<Button color="success"  onClick={()=>this.play(item.data)}>&nbsp;Play&nbsp;</Button>
														</div>
													</div> */}
												</div>
											))
										}
									</AutoplaySlider>
								):(
									<div/>								
								)
							}
						</div>
					</Col>
				</Row>
					<Row className="mb-1 marqueetext">
						{
							this.props.newstext ? 
							(
								<marquee>
									{
										this.props.newstext ? 
											this.props.newstext.map((item, i) => (
												<span key={i}><strong>{item.title}</strong>{item.text}</span>
											)) : <div></div>
									}
								</marquee>
							) : (
								<div></div>
							)
						}
				</Row>
				{/* <Row className="fp-content-text">
					<Col xs="12" md="12" lg="12" className="mb-1" style={{padding:"0px"}}>
						<div className="fp-center-letter">
							<h3>THE ULTIMATE PLAYER EXPERIENCE</h3>
						</div>
					</Col>
				</Row> */}
				<Row>
					<Col xs="6" md="6" lg="6">
						<h4 style={{margin:"0px",paddingLeft:"10px"}}>Casino</h4>
					</Col>
					<Col xs="6" md="6" lg="6">
						<h4 style={{margin:"0px",paddingRight:"10px",float:"right"}}><Link to="/casino">More</Link></h4>
					</Col>
				</Row>
				{
					this.props.casinoitems ? 
					<Casino data={this.props.casinoitems} me={this.props} />
					: ""
				}
				<Row>
					<Col xs="6" md="6" lg="6">
						<h4 style={{margin:"0px",paddingLeft:"10px"}}>Live Casino</h4>
					</Col>
					<Col xs="6" md="6" lg="6">
						<h4 style={{margin:"0px",paddingRight:"10px",float:"right"}}><Link to="/live-casino">More</Link></h4>
					</Col>
			</Row>
			{
				this.props.livecasinoitems ? 
				<LiveCasino data={this.props.livecasinoitems} me={this.props}  />
				: ""
			}
      </React.Fragment>
    )
  }
}

const load_fp_data = (state) => {
	return {
		fp_images : state.auth.login.fpImage,
		fp_text : state.auth.login.fpText,
		casinoitems : state.auth.login.casinoitems,
		livecasinoitems : state.auth.login.livecasinoitems,
		user : state.auth.login,
		newstext : state.auth.login.newstext,
	}
}

export default connect(load_fp_data, FpMngAction)(FirstPage)