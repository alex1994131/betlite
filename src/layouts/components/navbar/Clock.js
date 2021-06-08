import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

class Clock_com extends Component{
_isMounted = false;
    constructor(props) {
		super(props)
		this.state = {
			time: new Date()
		}
	}
	
	componentDidMount() {
        this._isMounted = true;
		setInterval(this.update, 1000)
	}
	
	update = () => {
        if (this._isMounted) {
            this.setState({
                time: new Date()
            })
            
        }
    };componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        const h = this.state.time.getHours();
        const m = this.state.time.getMinutes();
        const s = this.state.time.getSeconds();
        const y = this.state.time.getFullYear();
        const mm = String(this.state.time).split(" ")[1]
        const d = this.state.time.getDate();
        return(
            <div className="header-time-bar">
                <div className="header-clock-time">
                    <FontAwesomeIcon color="#1a9a65" icon={faClock} />
                    <h1 className='header-clock-hour'>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)}&nbsp;</h1><span className="header-clock-def">{h < 12 ? 'am' : 'pm'}&nbsp;</span>
                </div>
                <div className="header-clock-date">
                    <div className="header-clock-year">
                        <span>{d}&nbsp;</span>
                        <span>{mm}&nbsp;</span>
                        <span>{y}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock_com