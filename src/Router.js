import React, { Suspense, lazy } from "react"
import { Router, Switch, Route,Redirect } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { ContextLayout } from "./utility/context/Layout"
import {setloginpage,session_checked,menuload,load_fp_data,} from "./redux/actions/auth/loginActions"
import {get_userinfor} from "./redux/actions/auth/ProfileActions"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./assets/scss/plugins/extensions/toastr.scss"
import {is_session,getSession,fake_session} from "./redux/actions/auth/index"
import ReactGA from 'react-ga';
import Payler from './views/PlayGame/player';

const FirstPage = lazy(() =>  import("./views/firstpage/FirstPage"))
const Sports = lazy(() => import("./views/Sports/Sports"))
const SportsInplay = lazy(() => import("./views/Sports/SportsInplay"))
const SportsUpcoming = lazy(() => import("./views/Sports/SportsUpcoming"))
const SportEvents = lazy(() => import("./views/Sports/Events"))
const SportBetHistory = lazy(() => import("./views/Sports/BetHistory"))
const VirtualSports = lazy(() => import("./views/vircuralSports/virtualSpots"))
const Casino = lazy(() => import("./views/Casino/Casino"))
const LiveCasino = lazy(() => import("./views/LiveCasino/LiveCasino"))
const SlotsSkill = lazy(() => import("./views/SlotsSkill/SlotsSkill"))
const Tournaments = lazy(() => import("./views/Tournaments/Tournaments"))
const Fantasy = lazy(() => import("./views/Fantasy/Fantasy"))
const Promo = lazy(() => import("./views/Promo/Promo"))

const QpayResponse = lazy(()=>import("./views/PaymentGatway/qpayResponse"));
const YaarResponse = lazy(()=>import("./views/PaymentGatway/YaarResponse"));
const netcentsResponse = lazy(()=>import("./views/PaymentGatway/netcentsResponse"));

const Emailverify = lazy(()=>import("./views/profile/Emailverify/index"));

const error404 = lazy(() => import("./views/pages/misc/error/404"));

const Wlt_deposit = lazy(() => import("./views/profile/MyWallet/Deposit"));
const Wlt_withdraw = lazy(() => import("./views/profile/MyWallet/Withdraw"));
const Wlt_balancehistory = lazy(() => import("./views/profile/MyWallet/Balencehistory"))

const Pro_profileinfo = lazy(() => import("./views/profile/MyProfile/MyProfile"));
const Pro_changepassword = lazy(() => import("./views/profile/MyProfile/ChangePassword"));
const Pro_security = lazy(() => import("./views/profile/MyProfile/Security"));
const Pro_news = lazy(() => import("./views/profile/MyProfile/Newsletter"));

const Messages = lazy(() => import("./views/profile/Messages/Messages"))
const FAQ = lazy(() => import("./views/FAQ/FAQ"))

const Bet_sports = lazy(() => import("./views/profile/Mybets/SportsBook"));
const Bet_casinos = lazy(() => import("./views/profile/Mybets/Casino"));

const Bns_sports = lazy(() => import("./views/profile/MyBonuses/SportsBook"));
const Bns_casinos = lazy(() => import("./views/profile/MyBonuses/Casino"));

const Welcometobonuspage = lazy(() => import("./views/pages/welcometobonus"));

const Porker = lazy(() => import("./views/porker"))

const RouteConfig = ({ component: Component, fullLayout,VerticalLayout,SportsLayout, ...rest }) => {
  return(
    <Route
      {...rest}
      
      render={props => {
        return (
          <ContextLayout.Consumer>
            {context => {
              let LayoutTag =
                fullLayout === true ? context.fullLayout : SportsLayout === true ? context.SportsLayout : VerticalLayout === true ? context.VerticalLayout
                :context.horizontalLayout
              return (
                <LayoutTag {...props} permission={"props.user"} >
                  <Suspense fallback={<div />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
            }}
          </ContextLayout.Consumer>
        )
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps,{})(RouteConfig)

const RequireAuth = (data) => {
  if (!is_session()) {
    fake_session();
    return <Redirect to={"/"} />;
  }
  for(var i in data.children){
    if(data.children[i].props.path ===data.location.pathname){
      return data.children.slice(0, data.children.length-1);
    }
  }
  return data.children.slice(data.children.length-1, data.children.length);
};

class AppRouter extends React.Component {
  constructor(){
    super()
    this.state = {
    }   
  }
  componentDidMount(){
    this.props.load_fp_data();
    if(is_session()){
      const decoded = getSession();
      this.props.get_userinfor(decoded.email);
      this.props.session_checked(decoded);
    }else{
      fake_session();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.firstpagesettingtrackcode){
      if(prevProps.firstpagesettingtrackcode !== this.props.firstpagesettingtrackcode ){
        ReactGA.initialize(this.props.firstpagesettingtrackcode.content);
        ReactGA.pageview(history.location.pathname + history.location.search);
      }
    }
  }
  
  render() {
    history.listen( location =>  {
      this.props.setloginpage({login : false, register : false});
    });

    const { state, gamedata, gameurl, Ratio, token, mode } = this.props.player;

    return (
      <Router history={history}>
        {
          state ? (
            <Payler gamedata={gamedata} gameurl={gameurl} Ratio={Ratio} state = {state} token={token} mode={mode}/>
          ) : (
            null
          )
        }
        <Switch>
          <AppRoute exact path="/" component={FirstPage}  />
          <AppRoute  path="/sports" component={Sports} SportsLayout/>
          <AppRoute  path="/Inplay" component={SportsInplay} SportsLayout/>
          <AppRoute  path="/Upcoming" component={SportsUpcoming} SportsLayout/>
          <AppRoute  path="/sportsevent" component={SportEvents} SportsLayout/>
          <AppRoute  path="/mybet" component={SportBetHistory} SportsLayout/>
          
          <AppRoute  path="/virtual-sports" component={VirtualSports}/>
          {/* <AppRoute  path="/sport/football" component={Football} SportsLayout/> */}
          <AppRoute  path="/casino" component={Casino} />
          <AppRoute  path="/poker" component={Porker}/>

          <AppRoute  path="/live-casino" component={LiveCasino} />
          <AppRoute  path="/slots-skill" component={SlotsSkill} />
          <AppRoute  path="/tournaments" component={Tournaments} />
          <AppRoute  path="/fantasy" component={Fantasy} />
          <AppRoute  path="/promo" component={Promo} />
          <AppRoute  path="/paymentGateWay/netcents_receive" component={netcentsResponse} VerticalLayout />
          <AppRoute  path="/PaymentGateway/qpayResponse/:param1" component={QpayResponse} VerticalLayout />
          <AppRoute  path="/PaymentGateway/YaarResponse/:param1" component={YaarResponse} VerticalLayout />
          <AppRoute  path="/emailverify/:param1" component={Emailverify} />

          <RequireAuth>
            <AppRoute  path="/welcometobonuspage" component={Welcometobonuspage}   />
            {/* <AppRoute  path="/mywallet" component={Wlt_deposit}  VerticalLayout /> */}
            <AppRoute  path="/mywallet/deposit" component={Wlt_deposit}  VerticalLayout />
            <AppRoute  path="/mywallet/withdraw" component={Wlt_withdraw}  VerticalLayout />
            <AppRoute  path="/mywallet/balance-history" component={Wlt_balancehistory}  VerticalLayout />
            {/* <AppRoute  path="/myprofile" component={Pro_profileinfo}  VerticalLayout /> */}
            <AppRoute  path="/myprofile/profile-info" component={Pro_profileinfo}  VerticalLayout />
            <AppRoute  path="/myprofile/change-password" component={Pro_changepassword}  VerticalLayout />
            <AppRoute  path="/myprofile/security" component={Pro_security}  VerticalLayout />
            <AppRoute  path="/myprofile/news-letter" component={Pro_news}  VerticalLayout />
            <AppRoute  path="/Mybets/sports" component={Bet_sports}  VerticalLayout />
            <AppRoute  path="/Mybets/casinos" component={Bet_casinos}  VerticalLayout />
            <AppRoute  path="/Bonuses/sports" component={Bns_sports}  VerticalLayout />
            <AppRoute  path="/Bonuses/casinos" component={Bns_casinos}  VerticalLayout />
            <AppRoute  path="/Messages/messages" component={Messages}  VerticalLayout />
            <AppRoute  path="/FAQ" component={FAQ}/>
            <AppRoute component={error404} fullLayout />
          </RequireAuth>
        </Switch>
        <ToastContainer />
      </Router>
    )
  }
}

const mapstops = (state)=>{
  return {
    firstpagesettingtrackcode : state.auth.login.firstpagesettingtrackcode,
    player: state.player,

  }
}

export default connect(mapstops,{setloginpage,session_checked,menuload,load_fp_data,get_userinfor})(AppRouter)