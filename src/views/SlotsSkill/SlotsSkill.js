import React from "react"
import { Row, Col, Button } from "reactstrap"
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import '../../assets/slider/style.css'
import '../../assets/slider/slider-animates.css'
// import * as Icon from 'react-feather';
// import Select from "react-select"
// import LiveCasinoItems from "./LiveCasinoItems"

const content = [
    // {
    //   title: "",
    //   description:"",
    //   button: "Play Now",
    //   image: "https://static.betconstruct.me/fs/userFiles/vbetcom-updated/images/75843-eng-1-15867799161138.jpg",
    //   user: "Luan Gjokaj",
    //   userProfile: "https://i.imgur.com/JSW6mEk.png"
    // },
    // {
    //   title: "SPIN&GO",
    //   description:"Play for up to 1000x your buy-in",
    //   button: "Play Now",
    //   image: "https://static.betconstruct.me/fs/userFiles/vbetcom-updated/images/75843-artboard-2-15791592533948.png",
    //   user: "Erich Behrens",
    //   userProfile: "https://i.imgur.com/0Clfnu7.png"
    // },
    // {
    //   title: "100% Rakeback",
    //   description:"",
    //   button: "Play Now",
    //   image: "https://static.betconstruct.me/fs/userFiles/vbetcom-updated/images/75843-artboard-3.png",
    //   user: "Bruno Vizovskyy",
    //   userProfile: "https://i.imgur.com/4KeKvtH.png"
    // },
    // {
    //   title: "Up to 50% Rake Back",
    //   description:"Each Monday Vbet Poker will give up to 50% Rakeback",
    //   button: "Play Now",
    //   image: "https://static.betconstruct.me/fs/userFiles/vbetcom-updated/images/75843-2-15795095212601.jpg",
    //   user: "Bruno Vizovskyy",
    //   userProfile: "https://i.imgur.com/4KeKvtH.png"
    // },
    // {
    //   title: "Play Online Poker!",
    //   description:"Here at VBET you can enjoy world famous Hold'em, Omaha and brand-new 6+ Hold'em games.",
    //   button: "Play Now",
    //   image: "https://static.betconstruct.me/fs/userFiles/vbetcom-updated/images/75843-artboard-1-copy-3-15795106844597.jpg",
    //   user: "Bruno Vizovskyy",
    //   userProfile: "https://i.imgur.com/4KeKvtH.png"
    // },
];

class Poker extends React.Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return(
            <React.Fragment>
                <Row className="match-height">
                    <Col xs="12" lg="12" md="12">
                        <Slider className="slider-wrapper">
                            {content.map((item, index) => (
                                <div key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat center center`,borderRadius:"10px",backgroundSize:"cover",height:"100%"}} >
                                <div className="inner">
                                    <p>{item.description}</p>
                                    <h2 style={{fontSize:"2.44rem"}}><strong>{item.title}</strong></h2>
                                </div>
                                <Button color="warning">{item.button}</Button>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
                <Row className="match-height">
                    <Col xs="12" lg="12" md="12">
                        <Row className="match-height"></Row>
                        <Row className="match-height"></Row>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Poker