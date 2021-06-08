import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand,} from "mdbreact";
import {Dropdown,Button,DropdownMenu,DropdownItem,DropdownToggle,} from "reactstrap"
import { Link } from "react-router-dom"
import UserLogin from "../../auth/Login"
import UserRegister from "../../auth/Register"
import {logoutWithJWT,menuload} from "../../../redux/actions/auth/loginActions"
import {getSession,is_session} from "../../../redux/actions/auth/index"
import { connect } from "react-redux"
import avatar from "../../../assets/avatar.png"
import 'mdbreact/dist/css/mdb.css'
import {Root} from "../../../authServices/rootconfig"
import {history} from "../../../history"
import {get_userinfor} from "../../../redux/actions/auth/ProfileActions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const handleNavigation = (e, path) => {
    e.preventDefault()
    history.push(path)
  }

class NavbarPage extends Component {

    state={
        activeIndex:null,
        langDropdown: false,
        users : {},
        isAuthenticated : false,
        dropclassname : "header-dropdown-user nav-item dropdown",
        dropdownclass : "header-user-dropdown-menu dropdown-menu",
        bal : {balance : 0}
    }

    handleResize = () => {
    }

    async componentWillMount(){
        if(is_session()){
            var user = await getSession();
            await this.setState({users : user,isAuthenticated : true});
            await this.props.get_userinfor(user.email);    
        }
    }

    logout = () => {
        this.props.logoutWithJWT();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize, false)
    }

    handleLangDropdown = () =>{
        this.setState({ langDropdown: !this.state.langDropdown })
    }

    async componentWillUpdate(prevProps, prevState){

        if(!this.props.user.values)
        {
            if(prevState.isAuthenticated === true){
                this.setState({isAuthenticated : false});
            }
        }else{
            if(prevState.isAuthenticated === false){
                this.setState({isAuthenticated : true});
            }
        }
        if(prevProps.user.values !== this.props.user.values){
            await this.setState({users : this.props.user.profile_user});
        }

        if(prevState.bal !== this.props.bal){
            await this.setState({bal : this.props.bal});
        }
    }

render(){
    const guestLinks = (
        <div style={{display:"flex"}}>
            <div className="header-user-info" id="usersinfor">
                <Button color="warning" onClick={()=>history.push("/mywallet/deposit")} >Deposit</Button>
                <div className="header-user-balance">
                    <h5>{this.state.bal ?isNaN(Number(this.state.bal.balance + this.state.bal.bonusbalance).toFixed(2) ) ? 0 :Number(this.state.bal.balance + this.state.bal.bonusbalance).toFixed(2)  + "INR":""}</h5>
                </div>
            </div>

            <Dropdown
                tag="li"
                className="dropdown-language nav-item "
                style={{listStyle : "none"}}
                isOpen={this.state.langDropdown}
                toggle={this.handleLangDropdown}
                onMouseEnter={this.handleLangDropdown}
                onMouseLeave={this.handleLangDropdown}
                data-tour="language"
              >
                <DropdownToggle
                  tag="a"
                     className="nav-link"
                     
                    onClick={e => handleNavigation(e, "/myprofile/profile-info")}
                    style={{overflow: 'hidden',
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"}}
                >
                    {
                        this.props.user.profile_user && this.props.user.profile_user.avatar ? (
                            <img src={Root.imageurl +this.props.user.profile_user.avatar} style={{width:"40px", borderRadius:'50%'}} alt=''/> 
                        ):(
                            <img src={avatar} style={{width:"40px", borderRadius:'50%'}} alt=''/>  
                        ) 
                    }
                </DropdownToggle>
                <DropdownMenu right className="user-dropdown-menu p-0">
                <DropdownItem
                style={{overflow:"hidden",whiteSpace:'nowrap',textOverflow:'ellipsis'}}
                    tag="a"
                    href="#" 
                    onClick={e => handleNavigation(e, "/myprofile/profile-info")}
                >
                    {
                        this.props.user.profile_user  ? (
                            <span  className="align-middle">{this.props.user.profile_user.firstname + " " + this.props.user.profile_user.lastname}</span>
                        ):(
                            <span>&nbsp;</span>
                        )
                    }
                </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/mywallet/deposit")}
                    >
                        <span className="align-middle">My Wallet</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/myprofile/profile-info")}
                    >
                        <span className="align-middle">My Profile</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/Mybets/casinos")}
                    >
                        <span className="align-middle">My Bets</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/Bonuses/casinos")}
                    >
                        <span className="align-middle">Bonuses</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/Messages/messages")}
                    >
                        <span className="align-middle">Messages</span>
                    </DropdownItem>
                    <DropdownItem className="border-bottom-0"
                        tag="div"
                        onClick={()=>this.logout()}
                    >
                        <span className="align-middle">Log Out</span>
                    </DropdownItem>
                </DropdownMenu>
              </Dropdown>
        </div>
      )
    return (
      <div>
        <MDBNavbar className="header-nav-bar pt-0 pb-0" expand='md' color="indigo"  style={{background:"#1d184e !important"}}>
            <MDBNavbarBrand className="header-nav-bar-brand">
                <Link to="/">
                {this.props.firstpagesettinglogoimg ?(
                        <LazyLoadImage
                            alt='logo'
                            style={{width:'170px'}}
                            effect="blur"
                            src ={Root.imageurl + this.props.firstpagesettinglogoimg.content}
                        />
                    ):null}
                    {/* <img  style={{width:"170px"}} src={!this.props.firstpagesettinglogoimg ? "" :Root.imageurl + this.props.firstpagesettinglogoimg.content} alt="logo" /> */}
                    {
                        this.props.firstpagesettinglogoimg ? 
                        (()=> {
                            let link = document.querySelector('link[rel="shortcut icon"]') ||
                            document.querySelector('link[rel="icon"]');
    
                            if (!link) {
                                link = document.createElement('link');
                                link.id = 'favicon';
                                link.rel = 'shortcut icon';
                                document.head.appendChild(link);
                            }
    
                            link.href = Root.imageurl + this.props.firstpagesettinglogoimg.content;
                        })():null
                    }
                </Link>
            </MDBNavbarBrand>
            <div className="header-nav-bar-menu align-items-center" expand="md" style={{height:'100%'}}>
                <div className="header-nav-bar-item-group">
                {
                    !this.props.navigationConfig ? "" :
                    this.props.navigationConfig.map((item,i) => (
                        <Link to={item.navLink}  key={i}>
                            <div className={"header-nav-bar-item"+(this.state.activeIndex===i?' header-nav-bar-item_active':'')} onClick={()=>this.setState({activeIndex : i})}>
                                <FontAwesomeIcon color="#8f99a3" icon={Icons[item.icon]}/>{'  '}
                                <span>{item.title}</span>
                            </div>
                        </Link>
                    ))
                }
                </div>
            </div>
            <div className="header-nav-bar-user imtem-center">
                {
                    this.state.isAuthenticated?
                        guestLinks
                    :(
                        <>
                            <UserRegister />
                            <UserLogin /> 
                        </>
                    )
                }
            </div>
        </MDBNavbar>
      </div>
    );
  }
}
const getusers = (state) =>{
    return {
        navigationConfig : state.auth.login.menuload,
        user : state.auth.login,
        bal : state.balance.value,
        firstpagesettinglogoimg : state.auth.login.firstpagesettinglogoimg,
    }
  }
export default connect(getusers,{logoutWithJWT,menuload,get_userinfor})(NavbarPage)
