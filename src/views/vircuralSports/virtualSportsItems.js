import React from "react"
import {Col } from "reactstrap"
import * as Icon from "react-feather"
import { Root } from "../../authServices/rootconfig";
import {Button} from "reactstrap"
import { GiRetroController } from "react-icons/gi"

class virtualSportsItems extends React.Component{

    constructor(){
        super()
        this.state = {
            colstyle : {},
            loading : false,
        }
    }

    componentWillMount() {
        this.props.index > 4 ? this.state.colstyle = {marginTop:"1.7% 14px",padding:"10px"} : this.state.colstyle = {marginTop : "0px 14px",padding:"10px"}
    }

    gettoken(){
        if(!this.props.me.user.values){
            this.props.me.setloginpage({login : true, register : false});
        }else{
            this.props.me.playsaccount(this.props.me.user.values,this.props.data);
        }
    }

    render(){
        let imageuri = "";
        if(this.props.data){
            var params = this.props.data;
            imageuri =  params.image ? params.image.length > 0 ? params.image.slice(0,5) == "https" ? params.image : Root.imageurl + params.image : "" : ""
        }

        return (
            <Col className="col-2-4" xs="12" sm="6" md="4"  lg="2"  style={this.state.colstyle}>
                <div style={{backgroundImage:`url(${imageuri})`, backgroundSize:"100% 100%", padding:"35% 0px",borderRadius:"10px"}}>
                </div>
                <div className="casino-innor" style={{width: 'calc(100% - 20px)',left:"0px",margin:"10px",height:'calc(100% - 20px)'}}>
                    <div className="casino-innor-heart" style={{padding:"15px 15px"}}>
                    </div>
                    <div className="casino-innor-buttons position-absolute w-100 h-100" style={{top:"0px"}}>
                        <Button  className="btn-game-realplay" color="success" onClick={()=>this.gettoken()}>PLAY FOR REAL</Button>
                        {/* <Button  className="btn-game-play" color="success">PRACTICE</Button> */}
                        {/* <Icon.PlayCircle size="50" className="position-absolute" style={{transform:"translate(-50%, -50%)", top:"50%"}} onClick={()=>this.gettoken()} color="white" /> */}
                    </div>
                    <div className="casino-innor-title-container">
                        <span className="casino-innor-title-container-left" >{this.props.data.NAME}</span>
                        <span className="casino-innor-title-container-right">{this.props.data.star}<Icon.Star size={12} color={'yellow'} /></span>
                    </div>
                </div>  
                <GiRetroController style={{
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    position:'absolute',
                    zIndex:'-1'
                }} size={50} color={'#1fae73'}/>          
            </Col>
        )
    }
}


export default (virtualSportsItems)