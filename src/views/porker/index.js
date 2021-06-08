import React from "react"
import { Row, Col, Input, Button} from "reactstrap"
import { connect } from "react-redux";
import {providerchange,gametypechange,filterData,data_load} from "../../redux/actions/porker" 
import {setloginpage,porkergames_images,playsaccount,playsaccountguest} from "../../redux/actions/auth/loginActions"
import CasinoItems from "./childitem"
import {Root} from "../../authServices/rootconfig"
import {Search} from "react-feather"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';
import SelectSearch from 'react-select-search';
import {providerconfig} from "../../configs/providerConfig"

const AutoplaySlider = withAutoplay(AwesomeSlider);

class Casino extends React.Component {

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
          casinoItems : [],
          index : 1,
          data: [],
          allData: [],
          value: "",
          bool : false
        }

    componentDidMount(){
      this.props.porkergames_images();
      this.props.data_load(providerconfig["PORKER"]);
      window.addEventListener('scroll', this.listenToScroll)
    }
    
    componentWillUnmount() {
      window.removeEventListener('scroll', this.listenToScroll)
    }

    componentDidUpdate(prevProps, prevState){
      if(prevState.index !== this.state.index){
        let {data,allData,value} = this.state
        let indata=value.length ? allData.slice(0,this.state.index*24) : data.slice(0,this.state.index*24);
        if(this.state.index*24 > indata.length){
          this.setState({bool:true})
        }else{
          this.setState({bool:false})
        }
      }
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
      this.setState({ value: e.target.value })
      this.props.filterData(e.target.value)
    }

    play = (item) =>{
      if(!this.props.user.values){
        this.props.setloginpage({login : true, register : false});
      }else{
        this.props.playsaccount(this.props.user.values,item.gamedata,true);
      }
    }


    render() {
      let {data,allData,value} = this.state
      let indata=value.length ? allData.slice(0,this.state.index*24) : data.slice(0,this.state.index*24);
        return(
            <React.Fragment>

                <Row className="fp-header  p-0 m-0 w-100">
                    <Col lg="12" md="12" className="p-0 m-0 w-100">
                        <div className="fp-header-image p-0 m-0 w-100">
                        {
                          this.props.casinoSlider_images ?
                            (
                              <AutoplaySlider
                                play={true}
                                cancelOnInteraction={false}
                                interval={6000}
                                organicArrows={false}
                                animation="scaleOutAnimation"
                                bullets={true}
                              >
                                {
                                    this.props.casinoSlider_images.map((item, i) => (
                                      <div  className='firstpage-sliber-text' key={i} data-src={Root.imageurl+item.image}>
                                        <div style={{zIndex:50}} className="fp-header-def">
                                        <div className='fp-header-def-h'>
                                          <h1><strong>{item.data.text1}</strong></h1>
                                        </div>
                                        <div className="fp-header-def-c" style={{maxWidth:'250px', overflow:'hidden', border:'none'}}>
                                          <h5>{item.data.text2}</h5>
                                        </div>
                                        <div className="fp-header-def-c" style={{padding:'10px', top:'65%', right: '2vw'}}>
                                          <Button color="success" onClick={()=>this.play(item.data)}>&nbsp;Play&nbsp;</Button>
                                        </div>
                                        </div>
                                      </div>
                                    ))
                                }
                            </AutoplaySlider>
                            ):(
                              <div/>
                            )
                        }
                          </div>
                          {/* <div className="underlay-bg">
                                <div className="underlay-text">
                                    <h3>
                                        PLACE YOUR BET WITH
                                    </h3>
                                    <strong>CASINO</strong><br/>
                                    <span>Lorem ipsum dolor sit amet</span>
                                </div>
                            </div> */}
                    </Col>
                </Row>
                 <Row className="p-0 m-0 mt-1 w-100">
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

                          onChange={(e)=>this.props.providerchange(e,providerconfig["CASINO/SLOTS"])}
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
                          onChange={(e)=>this.props.gametypechange(e)}
                          name="language" placeholder="Choose your Type" 
                        />
                      </div>
                    </Col>
                </Row>
                
                <Row  className="w-100 p-0 m-0 mb-1">
                    {
                        indata.length > 0 ?
                        indata.map((item,i) => (
                            <CasinoItems key={i} data={item} me={this.props} />
                        )) : 
                        <div style={{width:"100%",height:"100px"}}></div>
                    }
                </Row>
            </React.Fragment>
        )
    }
}

const get_game  = (state) =>{

    return { 
      user : state.auth.login,
      casinoSlider_images : state.auth.login.poker_images,
      dataList: state.porkerlist,
      provider : state.porkerlist.providerData,
      types : state.porkerlist.types,
      settype : state.porkerlist.settype,
      setprovider : state.porkerlist.setprovider
    }
}

export default connect(get_game,{setloginpage,porkergames_images,providerchange,gametypechange,filterData,playsaccount,data_load,playsaccountguest})(Casino)