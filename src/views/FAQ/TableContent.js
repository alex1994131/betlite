import React from "react"
import { Card } from "reactstrap"

class TableContent extends React.Component {
  render() {
    return (
      <Card>
        <div style={{color:'wihte', padding:'2rem'}}>
          <h1 className='text-left font-weight-bold' style={{fontSize:'3rem'}}>FAQ</h1>
          <br/>
          <div className="font-weight-bold" style={{color:'white', fontSize:'1.3rem'}}>
            CONTACT US<br/>LIVE CHAT<br/>
            <small>
              Our 24/7 Live Support service is always happy to help you.
            </small>
            <br/><br/>
          </div>
          <div className="font-weight-bold" style={{color:'white', fontSize:'1rem'}}>
            EMAIL<br/>
            <small>
              For all customer queries, please email us at support@kasagames.com and quote your name and account number.
            </small>
            <br/><br/>
            <small>
              For all other offers and inquiries, please email us your request at info@kasagames.com.
            </small>
            <br/><br/>
            <small>
              Please, email your verification documents to docs@kasagames.com.
            </small>
            <br/><br/>
          </div>
          <div className="font-weight-bold" style={{color:'white', fontSize:'1rem'}}>
            Phone number<br/>
            <small>+91000 00 00 00</small>
          </div>
        </div>
      </Card>
    )
  }
}
export default TableContent
