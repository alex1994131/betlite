import React from "react"
import { Table } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
    {
      name: "SUBJECT",
      selector: "subject",
      sortable: true
    },
    {
      name: "DATE",
      selector: "date",
      sortable: true
    },
  ]
  
  const data = [
    // {
    //   subject: "Information",
    //   date: "13 Jun, 2020 | 21:40",
    //   content: 'Dear customer Greetings, In order to verify your account, please send a copy of the document you have registered with. If you have not registered any document, please send a copy of either your Passport or ID Card. We will also require a copy of a document verifying your registered address (a utility bill or similar) in your name. Once you have these files, please send them, from your registered email address to docs@vbet.com along with your Customer ID and with "Scan for Verification" as the subject. Please be informed, that your withdrawal request has been canceled, in order to withdraw the sum , you should send the related documents for verification. Sincerely, Support Team'
    // },
    // {
    //   subject: "Notification",
    //   date: "12 Jun, 2020 | 10:23",
    //   content: 'Hi, To have your account verified kindly provide - A digital photo of your ID (passport, ID) showing your name and date of birth. - A digital photo of a recent (last 3 months) posted paper utility bill. Please note that this must be an official invoice/bill (electricity/water/telephone/bank statement etc. Address needs to be visible and match the details in your betting account. Sincerely, Support Team!'
    // },
    // {
    //   subject: "Ain't no losing. Your chance to win from the 11K Prize Pool.",
    //   date: "08 Jun, 2020 | 06:01",
    //   content: "Big is for big wins, Hi is for high chances, and Lo is for low risks.There is no way to lose. Our new € 11,000 Prize Pool tournament even has credits for those who lose.To get into the hype of Hi-Lo, join in the tournament from June the 1st to June the 28th.All you have to do is to pick your lucky card. Whether you want to bet Hi or Lo, Red or Black, or want to go big on a single card, we have all the options for you.Save the dates! Play VBET's fun, easy-to-follow Hi-Lo, and gain some nice wins.VBET Play for fun!"
    // },
  ]
  
  const ExpandableTable = ({ data }) => {
    return (
      <Table responsive striped>
        <tbody>
          <tr>
            <td>{data.content}</td>
          </tr>
        </tbody>
      </Table>
    )
  }

class Inbox extends React.Component {
    render(){
        return (
            <div>
                <DataTable
                    data={data}
                    columns={columns}
                    noHeader
                    expandableRows
                    expandOnRowClicked
                    expandableRowsComponent={<ExpandableTable />}
                />
            </div>
        )
    }
}
export default Inbox
