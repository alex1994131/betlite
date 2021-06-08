import React from "react"
import { Card, CardBody ,CardHeader,Row,Col} from "reactstrap"
import Fullscreen from "react-full-screen";
import Iframe from 'react-iframe'
import {X,Maximize,Minimize} from "react-feather"
import {Root} from "../../authServices/rootconfig"
import "react-toggle/style.css"
import "../../assets/scss/plugins/forms/switch/react-toggle.scss"
import { connect } from "react-redux"
import $ from 'jquery';
import { GameExit } from '../../redux/actions/Player'
import {history} from "../../history"
import Media from "react-media";

class GamePlay extends React.Component {
    constructor(props) {
		
		super(props)
		this.state = {
            time: new Date(),
            isFull: false,
            height: window.innerHeight,
            isChecked : false,
            bool : true

		}
    }
    mounted = false
    
    goFull = () => {
        this.setState({ isFull:  true });
    }
    
    goMin = () => {
        this.setState({ isFull: false });
    }

    exitGame = () => {
        $('body').css('overflow','auto');
        this.props.GameExit();
    }

    updateHeight = () => {
        if (this.mounted) {
          this.setState(prevState => ({
            height: window.innerHeight
          }))
        }
    }
    componentDidMount() {
        $('body').css('overflow','hidden');
        this.mounted = true
        if (this.mounted) {
            if (window !== "undefined") {
              window.addEventListener("resize", this.updateHeight, false);
            }
        }
    }
    
    handleSwitchChange = (isChecked) => {
        this.setState({
          isChecked: isChecked
        })
    }

    updatescreen=()=>{
    }

    componentWillUnmount(){
        if(this.props.mode){
            Root.socket.emit("gamedelete",{data : this.props.token});
        }
    }

    Iframeonload = (e)=>{
        if(!this.state.bool){
            history.push("/")
        }
        this.setState({bool:false})
    }

    render() {
        const {gameurl, Ratio, gamedata, state } = this.props;
        return (
            state ? (
                <Media 
                    queries={{
                        Mobile : "(max-width: 767px)",
                        Tablet : "(min-width: 768px) and (max-width: 991px)",
                        Desktop : "(min-width: 992px)"
                    }}>
                    {matches => (
                            <Fullscreen
                                enabled={this.state.isFull}
                                onChange={isFull => this.setState({isFull})}
                            >
                            {matches.Mobile && 
                                <div className="pw-overlay" style={{  backgroundRepeat:'no-repeat',backgroundSize:'cover',top:0, left:0, width:'100vw', height:'100vh', zIndex:10000, position:"fixed",background:'#1a1a1a', backgroundImage : `url('${Root.imageurl+gamedata.backImage}')`}}>
                                    <Card className="iframe-container" style={{width : '100vw',backgroundColor: "rgba(0,0,0,.5)",boxShadow: '0 0 20px 5px rgba(0,0,0,.5)' }}>
                                        <CardHeader style={{width:"100%"}} className="m-0 p-0" >
                                            <Row style={{width:"100%", margin: '10px'}}>
                                                <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'left', justifyContent: 'flex-start'}} className="" md="3" sm="3" xs="3">
                                                    {/* <span style={{color:'white'}}>
                                                        {gamedata.NAME}
                                                    </span> */}
                                                </Col>
                                                <Col  className="" md="6" sm="6" xs="6" />
                                                    <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'right', justifyContent: 'flex-end'}} className="" md="3" sm="3" xs="3">
                                                        
                                                    <X size="21" onClick={()=>this.exitGame()} style={{cursor:"pointer"}} />
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <CardBody className="iframe-body p-0"  style={{height:"calc(100% - 80px)"}}>
                                            <Iframe name="_self" url={gameurl}
                                                width="100%"
                                                height="100%"
                                                id="myIdiframe"
                                                className="myClassname"
                                                display="initial"
                                                position="relative"
                                                scrolling="no" 
                                                frameBorder="0"
                                                allowfullscreen={true}
                                                allow="fullscreen"
                                                onLoad={this.Iframeonload}
                                                onMouseOver={this.onMounseover}
                                                onMouseOut={this.onMounseout}
                                                sandbox={"allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation"}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            }
                            {matches.Tablet && 
                                <div className="pw-overlay" style={{  backgroundRepeat:'no-repeat',backgroundSize:'cover',top:0, left:0, width:'100vw', height:'100vh', zIndex:10000, position:"fixed",padding : "3%",background:'#1a1a1a', backgroundImage : `url('${Root.imageurl+gamedata.backImage}')`}}>
                                    <Card className="iframe-container" style={{width : '94%',backgroundColor: "rgba(0,0,0,.5)",boxShadow: '0 0 20px 5px rgba(0,0,0,.5)' }}>
                                        <CardHeader style={{width:"100%"}} className="m-0 p-0" >
                                            <Row style={{width:"100%", margin: '10px'}}>
                                                <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'left', justifyContent: 'flex-start'}} className="" md="3" sm="3" xs="3">
                                                    {/* <span style={{color:'white'}}>
                                                        {gamedata.NAME}
                                                    </span> */}
                                                </Col>
                                                <Col  className="" md="6" sm="6" xs="6" />
                                                    <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'right', justifyContent: 'flex-end'}} className="" md="3" sm="3" xs="3">
                                                       
                                                    <X size="21" onClick={()=>this.exitGame()} style={{cursor:"pointer"}} />
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <CardBody className="iframe-body p-0"  style={{height:"calc(100% - 80px)"}}>
                                            <Iframe name="_self" url={gameurl}
                                                width="100%"
                                                height="100%"
                                                id="myIdiframe"
                                                className="myClassname"
                                                display="initial"
                                                position="relative"
                                                frameBorder="0"
                                                scrolling={"no"}
                                                onLoad={this.Iframeonload}
                                                onMouseOver={this.onMounseover}
                                                allowfullscreen={true}
                                                allow="fullscreen"                                                onMouseOut={this.onMounseout}
                                                sandbox={"allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation"}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            }
                            {matches.Desktop &&
                                <div className="pw-overlay" style={{  backgroundRepeat:'no-repeat',backgroundSize:'cover',top:0, left:0, width:'100vw', height:'100vh', zIndex:10000, position:"fixed",padding : "3%",background:'#1a1a1a', backgroundImage : `url('${Root.imageurl+gamedata.backImage}')`}}>
                                    <Card className="iframe-container" 
                                        style={{
                                            width : `${this.state.height*Ratio > window.innerWidth ? 'calc('+window.innerWidth+' - 6%)' : this.state.height*Ratio+'px'}`,
                                            backgroundColor: "rgba(0,0,0,.5)",
                                            paddingLeft: '8px',
                                            paddingRight: '8px',
                                            boxShadow: '0 0 20px 5px rgba(0,0,0,.5)' 
                                        }}
                                    >
                                    <CardHeader style={{width:"100%"}} className="m-0 p-0" >
                                        <Row style={{width:"100%", margin: '10px'}}>
                                            <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'left', justifyContent: 'flex-start'}} className="" md="3" sm="3" xs="3">
                                                {/* <span style={{color:'white'}}>
                                                    {gamedata.NAME}
                                                </span> */}
                                            </Col>
                                            <Col  className="" md="6" sm="6" xs="6" />
                                                <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'right', justifyContent: 'flex-end'}} className="" md="3" sm="3" xs="3">
                                                    {
                                                        this.state.isFull === false ?
                                                        <Maximize size="21" onClick={()=>this.goFull()} style={{cursor:"pointer",marginLeft:"5px"}} />
                                                        :
                                                        <Minimize size="21" onClick={()=>this.goMin()} style={{cursor:"pointer",marginLeft:"5px"}} />
                                                    }
                                                    <X size="21" onClick={()=>this.exitGame()} style={{cursor:"pointer"}} />
                                                </Col>
                                            </Row>
                                        </CardHeader>
                                        <CardBody className="iframe-body p-0"  style={{height:"calc(100% - 80px)"}}>
                                            <Iframe name="_self" url={gameurl}
                                                width="100%"
                                                height="100%"
                                                id="myIdiframe"
                                                className="myClassname"
                                                display="initial"
                                                position="relative"
                                                allowfullscreen={true}
                                                allow="fullscreen"
                                                frameBorder="0"
                                                scrolling={"no"}
                                                onLoad={this.Iframeonload}
                                                onMouseOver={this.onMounseover}
                                                onMouseOut={this.onMounseout}
                                                sandbox={"allow-forms" | "allow-modals" | "allow-orientation-lock" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-presentation" | "allow-same-origin" | "allow-scripts" | "allow-storage-access-by-user-activation" | "allow-top-navigation" | "allow-top-navigation-by-user-activation"}
                                            />
                                        </CardBody>
                                    </Card>
                                </div>
                            }
                        </Fullscreen>
                    )}
                </Media>
                
            ):(
                null
            )
        )
    }
}

export default connect(null,{GameExit})(GamePlay)