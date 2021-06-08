import React, { Component } from "react"
import {jwt_de} from "../../redux/actions/auth/index"
import * as Icon from "react-feather"
import { Link } from "react-router-dom";

class SidebarHeader extends Component {

	state = {
        user : {}
    }

	componentWillMount () {
		if(localStorage.playerstoken && localStorage.playerstoken !== "undefined"){
            this.state.user = jwt_de(localStorage.playerstoken);
        }
	}

	render() {
		return (
			<div className="navbar-header" style={{padding:"0.35rem 1rem 0.3rem 1.11rem"}}>
				<ul className="nav navbar-nav flex-row">
				
				<li className="nav-item nav-toggle d-block">
					<div className="nav-link">
						<Link to="/profile" className="d-flex">
							<Icon.UserCheck color="white" className="m-1" size="35px" />
							<h3 className="d-table text-center m-0 mt-1">{this.state.user.name}<small className="d-table-row" style={{fontSize:"12px"}}>{this.state.user.email}</small></h3>
						</Link>
					{/* <X
						onClick={sidebarVisibility}
						className={classnames(
						"toggle-icon icon-x d-block d-xl-none font-medium-4",
						{
							"text-primary": activeTheme === "primary",
							"text-success": activeTheme === "success",
							"text-danger": activeTheme === "danger",
							"text-info": activeTheme === "info",
							"text-warning": activeTheme === "warning",
							"text-dark": activeTheme === "dark"
						}
						)}
						size={20}
					/> */}
					</div>
				</li>
				</ul>
				{/* <div
					className={classnames("shadow-bottom", {
						"d-none": menuShadow === false
					})}
				/> */}
			</div>
		)
	}
}

export default SidebarHeader
