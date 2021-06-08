import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import { YaarPayResults } from "../../redux/actions/paymentGateWay"
import { history } from "../../history";
import { connect } from "react-redux"
import "../../assets/scss/plugins/extensions/sweet-alerts.scss"

class YaarPayResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            alertState : false, 
            alertTitle : '',
            alertType : null,
            text : '',
        }
    }
    
    componentDidMount(){
        var order_no = history.location.pathname.split(':')[1];
        this.props.YaarPayResults(order_no);
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.PayResultsData!==prevProps.PayResultsData){
            var status = this.props.PayResultsData.resultData.status;
            if(status==='1'){
                this.setState({
                    alertState:true,
                    alertTitle:'Processing',
                    alertType:'info',
                    text:this.props.PayResultsData.amount+" "+this.props.PayResultsData.resultData.currency
                })
            }else if(status==='2'){
                this.setState({
                    alertState:true,
                    alertTitle:'Success',
                    alertType:'success',
                    text:this.props.PayResultsData.amount+" "+this.props.PayResultsData.resultData.currency
                })
            }else if(status==='3'){
                this.setState({
                    alertState:true,
                    alertTitle:'Failed',
                    alertType:'error',
                    text:this.props.PayResultsData.amount+" "+this.props.PayResultsData.resultData.currency
                })
            }
        }
    }

    handleAlert = (state, value) => {
        this.setState({ [state] : value });
        history.push('/mywallet/deposit');
    }
    
    render (){
        return (
            this.props.PayResultsData? (
                <React.Fragment>
                    {
                        this.props.PayResultsData ? 
                        (()=> {
                            if(this.state.alertType==='success'){
                                return(
                                    <SweetAlert success title={this.state.alertTitle}
                                        show={this.state.alertState} 
                                        onConfirm={() => this.handleAlert("alertState", false)}
                                    >
                                        <p className="sweet-alert-text">{this.state.text}</p>
                                    </SweetAlert>
                                )
                            }else if(this.state.alertType==='info'){
                                return(
                                    <SweetAlert info title={this.state.alertTitle}
                                        show={this.state.alertState} 
                                        onConfirm={() => this.handleAlert("alertState", false)}
                                    >
                                        <p className="sweet-alert-text">{this.state.text}</p>
                                    </SweetAlert>
                                )
                            }else if(this.state.alertType==='error'){
                                return(
                                    <SweetAlert error title={this.state.alertTitle}
                                        show={this.state.alertState} 
                                        onConfirm={() => this.handleAlert("alertState", false)}
                                    >
                                        <p className="sweet-alert-text">{this.state.text}</p>
                                    </SweetAlert>
                                )
                            }
                        })():null
                    }
                </React.Fragment>
            ) :(
                <div/>
            )
        )
    }
}

const paymentGateWayData = (state) =>{
    return {
        PayResultsData : state.paymentGateWay.PayResultsData,
    }
}
export default connect(paymentGateWayData,{YaarPayResults})(YaarPayResponse)