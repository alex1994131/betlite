import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"
import classnames from "classnames"
import EditProfile from "./EditProfile";
import Document from "./Documents";
import Notification from "./Notifications";

class MyProfile extends React.Component{
    constructor(){
        super()
        this.state = {
            active: '1'
        }
    }

    toggle = (tab) => {
        if (this.state.active !== tab) {
          this.setState({ active: tab })
        }
    }
    
    render(){
        return(
            <div>
                <Nav tabs className="nav-justified">
                    <NavItem>
                        <NavLink
                        className={classnames({
                            active: this.state.active === "1"
                        })}
                        onClick={() => {
                            this.toggle("1")
                        }}
                        >
                        Edit Profile
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({
                            active: this.state.active === "3"
                        })}
                        onClick={() => {
                            this.toggle("3")
                        }}
                        >
                        Documents
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({
                            active: this.state.active === "8"
                        })}
                        onClick={() => {
                            this.toggle("8")
                        }}
                        >
                        Notifications
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.active}>
                    <TabPane tabId="1"  style={{maxHeight:'900px', overflow:'auto'}}>
                        <EditProfile />
                    </TabPane>
                    <TabPane tabId="3"  style={{maxHeight:'900px', overflow:'auto'}}>
                        <Document />
                    </TabPane>
                    <TabPane tabId="8"  style={{maxHeight:'900px', overflow:'auto'}}>
                        <Notification />
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default MyProfile
