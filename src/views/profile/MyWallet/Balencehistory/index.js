import React from "react"
import {Card,CardHeader,CardBody,CardTitle,TabContent,TabPane,Nav,NavItem,NavLink} from "reactstrap"
import classnames from "classnames"
import All from "./All"
import SportsBook from "./SportsBook"
import Casino from "./Casino"

class TabsBasic extends React.Component {
  state = {
    activeTab: "1",
    active: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle className='ml-1 mt-1'>My Wallet</CardTitle>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Nav tabs>
                  <NavItem>
                    <NavLink className={classnames({active: this.state.active === "1"})} onClick={() => {this.toggle("1")}}>
                      All
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({active: this.state.active === "2"})} onClick={() => {this.toggle("2")}}>
                      Sportsbook
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({active: this.state.active === "3"})} onClick={() => {this.toggle("3")}}>
                      Casino
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="py-50" activeTab={this.state.active}>
                  <TabPane tabId="1">
                    <All {...this.props}/>
                  </TabPane>
                  <TabPane tabId="2">
                    <SportsBook {...this.props}/>
                  </TabPane>
                  <TabPane tabId="3">
                    <Casino {...this.props}/>
                  </TabPane>
                </TabContent>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TabsBasic
