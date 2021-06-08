import React from "react"
import {Col } from "reactstrap"
import { Root } from "../../authServices/rootconfig";
import {Button} from "reactstrap"
import { GiRetroController } from "react-icons/gi"

class LiveCasinoItems extends React.Component{

    constructor(){
        super()
        this.state = {
            colstyle : {},
            loading : false,
        }
    }

    componentWillMount() {
        this.props.index > 4 ?this.setState({colstyle:{marginTop:"1.7% 14px"}}):this.setState({colstyle:{marginTop : "0px 14px"}})
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
            imageuri =  params.image ? params.image.length > 0 ? params.image.slice(0,5) === "https" ? params.image : Root.imageurl + params.image : "" : ""
        }

        return (
            <Col className="casino-innor-p" xs="12" sm="6" md="4"  lg="2"  style={this.state.colstyle}>
                <div className='background' style={{backgroundImage:`url(${imageuri})`, backgroundSize:"100% 100%", padding:"35% 0px",borderRadius:"10px"}}></div>
                <div className="casino-innor" style={{width: 'calc(100% - 20px)',left:"0px",margin:"10px",height:'calc(100% - 20px)'}}>
                    <div className="casino-innor-buttons position-absolute w-100 h-100 d-flex justify-content-center align-items-center" style={{top:"0px", flexDirection:'column'}}>
                        <div style={{color: '#fff', fontWeight: '400'}}>{this.props.data.NAME}</div>
                        <div className='d-flex w-100 p-1'>
                            <Button  className="btn-game-realplay round" onClick={()=>this.gettokenreal()} >PLAY</Button>
                            <Button  className="btn-game-play round"  onClick={()=>this.gettoken()}>Demo</Button>                        
                        </div>
                    </div>
                </div>
                <GiRetroController style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%', position:'absolute', zIndex:'-1'}} size={50} color={'#6a748e'}/>          
            </Col>
        )
    }
}


export default (LiveCasinoItems)