import React from "react"
import { Link } from "react-router-dom";
import * as Icon from "react-feather"
import { Row, Col } from "reactstrap"
import GameProvider from "./GameProvider"
import { connect } from "react-redux"
import {Root} from "../../../authServices/rootconfig"
import {footer_dataLoad} from "../../../redux/actions/auth/loginActions"


class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
          messageList: [
            {type: 'text', author: 'them', data: { text: "How are you?"} },
           
          ],
          newMessagesCount: 1,
          isOpen: false
        };
      }

      _onMessageWasSent(message) {
        this.setState({
          messageList: [...this.state.messageList, message]
        });
      }
    
      _onFilesSelected(fileList) {
        const objectURL = window.URL.createObjectURL(fileList[0]);
        this.setState({
          messageList: [...this.state.messageList, {
            type: 'file', author: 'me',
            data: {
              url: objectURL,
              fileName: fileList[0].name
            }
          }]
        });
      }
    
      _sendMessage(text) {
        if (text.length > 0) {
          const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
          this.setState({
            newMessagesCount: newMessagesCount,
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text }
            }]
          });
        }
      }
    
      _handleClick() {
        this.setState({
          isOpen: !this.state.isOpen,
          newMessagesCount: 0
        });
      }

      componentWillMount(){
        this.props.footer_dataLoad();
      }

    render() {

    return (
        <footer>
            <Row>
                <Col xs="12" md="12" sm="12" lg="12" className="footer-gameprovider-slider mb-1 w-100 ">
                    <GameProvider />
                </Col>
                <Col xs="12" md="12" sm="12" lg="12" className="footer-paymentmethod mb-1 w-100 ">
                    <h4>Payment Methods</h4>
                    <div className="paymentmethods-imgs">
                      {
                        !this.props.FirstpagePaymentMethodImg ? "" : this.props.FirstpagePaymentMethodImg.map((item,i) => (
                          <img src={Root.imageurl + item.image} alt={item.image} key={i} />
                        ))
                      }
                    
                    </div>
                </Col>
                <Col xs="12" sm="12" md="3" lg="3" className="mb-1">
                    <div className="footer-logo mb-1">
                        <img src={!this.props.firstpagesettinglogoimg ? "" :Root.imageurl + this.props.firstpagesettinglogoimg.content} alt="logo" />
                    </div>
                    <div className="footer-logo-text">
                      {
                        !this.props.title ? '' : this.props.title.content 
                      }
                        {/* <h5>Best Online Casino Slot & Live Games</h5>
                        <span><strong>18+</strong> Be Responsible</span> */}
                    </div>
                </Col>
                <Col xs="12" sm="12" md="3" lg="3" className="footer-menu mb-1">
                    <ul className="ul-list">
                      <li className="ul-list-item"><h4>MENU</h4></li>
                    {
                        !this.props.navigationConfig ? "" :this.props.navigationConfig.map((item,i) => (
                        <li className="ul-list-item" key={i}><Link to={item.navLink}>{item.title}</Link></li>
                        ))
                    }
                    </ul>
                </Col>
                <Col xs="12" sm="6" md="3" lg="3" className="footer-menu mb-1">
                    <ul className="ul-list">
                        <li className="ul-list-item"><h4>QUICK LINKS</h4></li>
                        {
                          !this.props.quickdata ? "" :this.props.quickdata.map((item,i) => (
                          <li className="ul-list-item" key={i}>
                            <a className="Social-icon" key={i} href={item.navLink}  target="_blank" rel="noopener noreferrer" >
                              {item.title}
                              </a>
                          </li>                            
                          ))
                        }
                        {/* <li className="ul-list-item"><Link to="#">FAQ</Link></li>
                        <li className="ul-list-item"><Link to="#">Contact Us</Link></li>
                        <li className="ul-list-item"><Link to="#">About Us</Link></li> */}
                    </ul>
                </Col>
                <Col xs="12" sm="6" md="3" lg="3" className="mb-1">
                    <div className="footer-socials-feed">
                        <h4>GET IN TOUCH</h4>
                        {
                          !this.props.socialdata ? "" :this.props.socialdata.map((item,i) => (
                            <a className="Social-icon" key={i} href={item.navLink}  target="_blank" rel="noopener noreferrer" >
                              {
                                <SocialIcon data = {item}/>
                              }
                            </a>
                          ))
                        }

                    </div>
                </Col>
                <Col xs="12" md="12" sm="12" lg="12">
                    {
                        !this.props.footertext ? '' : this.props.footertext.content 

                    }
                    {/* <span style={{color : "grey !important"}}>Kasagames is operated by Igamez Limited, Cypress company registration number 162038, having its registered address at 9 Barrack Road, Cypress City, Cypress. Igamez is licensed and regulated by the Curacao Gaming Commission under license GLH-OCCHKTW686867072017 (Sub-license number 395/JAZ)</span> */}

                </Col>
                </Row>
                {/* <Chat /> */}
                {/* <Launcher
                    agentProfile={{
                    teamName: 'Welcome to KASINO!'                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    onFilesSelected={this._onFilesSelected.bind(this)}
                    messageList={this.state.messageList}
                    newMessagesCount={this.state.newMessagesCount}
                    handleClick={this._handleClick.bind(this)}
                    isOpen={this.state.isOpen}
                    showEmoji
                /> */}
                <div id='footer-hidden'/>
        </footer>
    )
}
}

const SocialIcon = ({data}) => {
  switch(data.icon){
    case "facebook" :
      return <Icon.Facebook color={'gray'} size={20}/>
    case "instagram" :
      return <Icon.Instagram color={'gray'} size={20}/>
    case "twitter" :
      return <Icon.Twitter color={'gray'} size={20}/>
    default :
      return <div/>
  }
}

const mapstops = (state)=>{
    return {
      navigationConfig : state.auth.login.menuload,
      firstpagesettinglogoimg : state.auth.login.firstpagesettinglogoimg,
      FirstpagePaymentMethodImg : state.auth.login.FirstpagePaymentMethodImg,
      title : state.auth.login.title,
      footertext : state.auth.login.footertext,
      socialdata : state.auth.login.socialdata,
      quickdata : state.auth.login.quickdata,
      favicon : state.auth.login.favicon,
      newstext : state.auth.login.newstext,

    }
}

export default connect(mapstops,{footer_dataLoad})(Footer)