import React from "react"
import { Row, Col, Input} from "reactstrap"
import { connect } from "react-redux";
import {providerchange,gametypechange,filterData,data_load} from "../../redux/actions/livecasino/livecasino" 
import {setloginpage,virtualgames_images,playsaccount,playsaccountguest} from "../../redux/actions/auth/loginActions"
import VirtualSportsItems from "../Casino/CasinoItems"
import {Search} from "react-feather"
import {Root} from "../../authServices/rootconfig"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import SelectSearch from 'react-select-search';
import {providerconfig} from "../../configs/providerConfig"

const AutoplaySlider = withAutoplay(AwesomeSlider);

class VirtualSports extends React.Component {
    static getDerivedStateFromProps(props, state) {
        if (props.dataList.data.length !== state.data.length || props.allData !== props.dataList.filteredData) {
            return {
            data: props.dataList.data,
            allData: props.dataList.filteredData,
        }
      }
      return null;
    }
    state = {
        livecasinoitems : [],
        index : 1,
        data: [],
        allData: [],
        value: "",
        bool : false
    }

    gameplay = () =>{
        if(!this.props.user.values){
            this.props.setloginpage({login : true, register : false});
        }else{
            this.props.playsaccount({email :this.props.user.values.email,},{gameType : "Roulette"})
        }
    }

    componentDidMount(){
        this.props.virtualgames_images();
        this.props.data_load(providerconfig.VIRTUALGAMES)
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }
    
    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll+350) / height;
        if(scrolled>=1){
            this.setState({index : this.state.index+1});
        }
    }

  

    handleFilter(e){
        this.setState({ value: e.target.value,index : 1 })
        this.props.filterData(e.target.value);

    }

    render() {
        let {
            data,
            allData,
            value
        } = this.state
        let indata=value.length ? allData.slice(0,this.state.index*24) : data.slice(0,this.state.index*24);
        if(this.state.bool === false && this.state.index*24 > indata.length){
            this.setState({bool : true});
        }
        return(
            <React.Fragment>
                <Row className="fp-header p-0 m-0 w-100 ">
                    <Col lg="12" md="12" className="p-0 m-0 w-100">
                        <div className="fp-header-image p-0 m-0 w-100">
                            {
                                this.props.livecasinoSlider_images ?
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
										this.props.livecasinoSlider_images.map((item, i) => (
											<div className='livecasinopage-sliber-text' key={i} data-src={Root.imageurl+item.image}>
                                                {/* <Animated className="livecasinopage-sliber-text1" animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
													Live BlackJack<br/>
													Don’t miss your chance,feel the BlackJack in your hand
												</Animated>  */}
											</div>
										))
									}
								</AutoplaySlider>
                                ):(
                                    <div/>								
                                )
                            }
                        </div>
                            <div className="underlay-bg">
                                <div className="underlay-text">
                                    <h3>
                                        PLACE YOUR BET WITH
                                    </h3>
                                    <strong  style={{fontSize: '2vw'}}>LIVE ROULETTLE</strong><br/>
                                    <span>Lorem ipsum dolor sit amet</span>
                                </div>
                            </div>
                    </Col>
                </Row> 
                 <Row className="p-0 m-0 mt-1 w-100" >
                    <Col  md="3" sm="12">
                    </Col>

                    <Col  md="3" sm="12">

                        <div className="React casino-game-show-select m-1 ml-1">
                            <Search size={18} style={{    position: 'absolute',top: '1.8rem',marginLeft:"0.5rem"}} /> 
                            <Input  type="text" name="livecasino-game-search" style={{borderColor: '#18480c',border: '1px solid #18480c',paddingLeft:"2.5rem"}} onChange={e => this.handleFilter(e)} />
                        </div>
                    </Col>
                    <Col  md="3" sm="12">
                        <div className="React casino-game-show-select m-1">
                            <SelectSearch
                                options={this.props.provider} 
                                search
                                value={this.props.setprovider ? this.props.setprovider.name : "" }
                                onChange={(e)=>this.props.providerchange(e,providerconfig.VIRTUALGAMES)}
                                name="language" placeholder="Choose your Provider" 
                            />
                        </div>
                    </Col>
                    <Col  md="3" sm="12">
                        <div className="React casino-game-show-select m-1">
                            <SelectSearch
                                options={this.props.types} 
                                search
                                value={this.props.settype ? this.props.settype.name : "" }
                                onChange={(e)=>this.props.gametypechange(e,false)}
                                name="language" placeholder="Choose your Type" 
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="p-0 m-0   w-100" >
                    {
                        indata.length > 0 ?
                        indata.map((item,i) => (
                            <VirtualSportsItems key={i} data={item} me={this.props} />
                        )) : 
                    <div style={{width:"100%",height:"100px"}}></div>
                    }
                </Row>
                {/* <Row className="w-100 p-0 m-0 mb-1">
                  <Col className="text-center">
                    <Button style={{display : this.state.bool ? "none" : "inline-block"}}  color="success" onClick={()=>this.setState({index : this.state.index+1})}>Load More</Button>
                  </Col>
                </Row> */}
            </React.Fragment>
        )
    }
}

const get_game  = (state) =>{
    return { 
        user : state.auth.login,
        livecasinoSlider_images : state.auth.login.virtual_images,
        dataList: state.livecasinolist,
        provider : state.livecasinolist.providerData,
        types : state.livecasinolist.types,
        settype : state.livecasinolist.settype,
        setprovider : state.livecasinolist.setprovider
    }
}

export default connect(get_game,{playsaccount,setloginpage,providerchange,gametypechange,filterData,data_load,playsaccountguest,virtualgames_images})(VirtualSports)