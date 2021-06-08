import React from "react"
import { connect } from "react-redux"
import { FormGroup, Input , Row , Col , Button} from "reactstrap"
import { Search } from "react-feather"
import {get_sports_lists,get_odds} from "../../../redux/actions/sports"
import SportsTab from './SportsTab';
import {history} from "../../../history";

class Sports extends React.Component{
    constructor(){
        super()
        this.state={
            id:1,
            Item:{},
        }
    }

    componentDidMount(){
        this.props.get_sports_lists();
        
    }

    async position(Item){
        await this.setState({ id : Item.sport_id, Item : Item });
        this.props.get_odds(Item);
    }

    render(){
        return(
            <div style={{height:"100%"}} className='sports-background'>
                <Row>
                    <Col lg="11" md="11" sm="8">
                        <FormGroup className="position-relative has-icon-left">
                            <Input type="text" className="round" placeholder='Search' 
                                value={this.state.value}
                                onChange={e => this.setState({ value: e.target.value })}
                            />
                            <div className="form-control-position px-1">
                                <Search size={15} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg="1" md="1" sm="4">
                        <Button style={{width : "100%"}} className = "sports-read-me" onClick = {() => history.push("/mybet")}> Go to My bets </Button>            
                    </Col>
                </Row>
                <div style={{overflow:'auto',}}>
                    <div style={{ margin:'5px', display:'flex', flex:1, alignItems:'center'}}>
                        {this.props.sport_list && this.props.sport_list.length > 0 ? this.props.sport_list.map( (Item,i) => (
                            <div
                                key={i} 
                                onClick={()=>this.position(Item)}
                                style={{display:'inline-block', width:'57px', height:'90px', marginLeft:'5px', cursor:'pointer'}}
                            >
                                {
                                    Item.sport_id === this.state.id ? (
                                        <div className='sports-tab-active-background' style={{}}>{''}</div>
                                    ) : null
                                }
                                <div className='sports-tab-background' style={{borderRadius:'25%',marginTop:'0px'}}>
                                    <svg style={{color:Item.color, margin:'1.2rem'}} width="22" height="22" viewBox={Item.viewBox}>
                                        <path d={Item.icon} fill="currentColor"/>
                                    </svg>
                                </div>
                                <div 
                                    style={{padding:'2px', textAlign:'center', wordBreak: 'break-all', fontSize:'0.7rem'}}
                                    className={
                                        (Item.sport_id === this.state.id ? 'font-color-2':'font-color-1')
                                    }
                                >
                                    {Item.sport_name}
                                </div>
                            </div>
                        )) : null}
                    </div>
                </div>
                {
                    this.state.id && this.props.fp_images1 ? (
                        this.state.id === 1 ? 
                            <SportsTab defalt = {true} data={this.props.fp_images1[0]} Item={this.state.Item} fp_images={this.props.fp_images1}/> 
                            : 
                            <SportsTab data = {this.props.search_odds_data} Item={this.state.Item} fp_images={this.props.fp_images1}/>
                    ) : ""
                }
            </div>
        )
    }
}

const load_fp_data = (state) => {
	return {
		fp_images : state.auth.login.fpImage,
        fp_images1 : state.auth.login.fpImage1,
        sport_list : state.sports.sports_list,
        search_odds_data : state.sports.search_odds_data
	}
}
export default connect(load_fp_data,{get_sports_lists,get_odds})(Sports)