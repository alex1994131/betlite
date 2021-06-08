import React from "react"
import { Card, CardBody ,CardHeader,CardFooter,Button,Row,Col} from "reactstrap"
import Fullscreen from "react-full-screen";
import Iframe from 'react-iframe'
import Toggle from "react-toggle"
import {X,Maximize,Minimize} from "react-feather"
import {Root} from "../../authServices/rootconfig"
import "react-toggle/style.css"
import "../../assets/scss/plugins/forms/switch/react-toggle.scss"
import { history } from "../../history"
import {connect} from "react-redux"


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
	
	componentWillMount(){
    }

    exitGame = () => {
        history.goBack();
    }

    updateHeight = () => {
        if (this.mounted) {
          this.setState(prevState => ({
            height: window.innerHeight
          }))
        }
    }
    componentDidMount() {
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

    Iframeonload = (e)=>{
        if(!this.state.bool){
            history.push("/");
        }
        this.setState({bool: false})
    }


    render() {
        if(this.props.history.location.state){

            let gamedata = this.props.history.location.state.game;
            let bool = this.props.history.location.state.bool;
            return (

                    <Fullscreen
                        enabled={this.state.isFull}
                        onChange={isFull => this.setState({isFull})} >
                        <div className="pw-overlay w-100" style={{height : "100%",padding : "3%",backgroundImage : `url(${Root.imageurl+gamedata.backImage})`}}>                          
                            <Card className="iframe-container" style={{width : `${this.state.height*1.32}px`,
                             backgroundColor: "rgba(0,0,0,.5)",
                             paddingLeft: '8px',
                             paddingRight: '8px',
                             boxShadow: '0 0 20px 5px rgba(0,0,0,.5)' 
                        }}>
                                <CardHeader style={{width:"100%"}} className="m-0 p-0" >
                                    <Row style={{width:"100%", margin: '10px'}}>
                                        <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'left', justifyContent: 'flex-start'}} className="" md="3" sm="3" xs="3">
                                            <span style={{color:'white'}}>
                                                {gamedata.NAME}
                                            </span>
                                        </Col>
                                       {
                                           bool ? (
                                               <Col  className="" md="6" sm="6" xs="6" />
                                           ):(
    
                                                <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'center', justifyContent: 'center'}} className="" md="6" sm="6" xs="6">
                                                    <label className="react-toggle-wrapper">
                                                        <Button.Ripple
                                                            className="RIPPLE"
                                                            style={{height:"20px", padding:'5px'}}
                                                            color="success"
                                                            onClick={()=>this.handleSwitchChange(true)}
                                                            size="sm"
                                                        >
                                                            Practice
                                                        </Button.Ripple>
                                                        <Toggle
                                                            checked={this.state.isChecked}
                                                            onChange={()=>this.handleSwitchChange(!this.state.isChecked)}
                                                            name="controlledSwitch"
                                                            value="yes"
                                                            className="mr-1 ml-1"
                                                            style={{height:'10px !important'}}
                                                        />
                                                        <Button.Ripple
                                                            className="RIPPLE"
                                                            style={{height:"20px", padding:'5px'}}
                                                            color="danger"
                                                            onClick={()=>this.handleSwitchChange(false)}
                                                            size="sm"
                                                        >
                                                        Play for real
                                                        </Button.Ripple>
                                                    </label>
                                                </Col>
                                           )
                                       }
                                        
                                        <Col style={{display: 'flex', alignItems: 'center', flex:1, textAlign: 'right', justifyContent: 'flex-end'}} className="" md="3" sm="3" xs="3">
                                            {/* <Copy  size="21" onClick={()=>this.exitGame()} style={{cursor:"pointer",marginLeft:"5px"}} /> */}
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
                                    <Iframe name="_self" url={this.props.history.location.state.gameurl}
                                        width="100%"
                                        height="100%"
                                        id="myIdiframe"
                                        className="myClassname"
                                        display="initial"
                                        position="relative"
                                        frameBorder="0"
                                        loading="auto"
                                        onLoad={this.Iframeonload}
                                        onMouseOver={this.onMounseover}
                                        onMouseOut={this.onMounseout}
                                        sandbox="allow-same-origin allow-scripts"
                                        />
                                </CardBody>
                                <CardFooter  style={{height:"10px", border : 'none'}}>
    
                                </CardFooter>
                            </Card>
                        </div>
                    </Fullscreen>
            )
        }else{
            return(
                <div/>
            )
        }
    }
}

const mapstop = ()=>{
    return {}
}

export default connect(mapstop)(GamePlay);
