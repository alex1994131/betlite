import React from "react"
import {Card,CardHeader,CardBody,CardTitle,TabContent,TabPane,Nav,NavItem,NavLink} from "reactstrap"
import classnames from "classnames"
import WithdrawMenu from "./WithdrawMenu"
import WithdrawStatus from "./WithdrawStatus"

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
                    <NavLink className={classnames({ active: this.state.active === "1"})} onClick={() => {this.toggle("1")}}>
                      Withdraw Methods
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.active === "2" })} onClick={() => { this.toggle("2") }}>
                      Withdraw Status
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="py-50" activeTab={this.state.active}>
                  <TabPane tabId="1" style={{overflowY:'auto',maxHeight: '800px',overflowX:'hidden'}}>
                    <WithdrawMenu  {...this.props}/>
                  </TabPane>
                  <TabPane tabId="2" style={{overflowY:'auto',maxHeight: '800px',overflowX:'hidden'}}>
                    <WithdrawStatus  {...this.props}/>
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
