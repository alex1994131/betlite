import React from "react"
import DataTable from "react-data-table-component"
import { Input, Table } from "reactstrap"
import { Search } from "react-feather"
import Select from "react-select"

const dataOptions = [
    { value: "1 Days", label: "1 Day" },
    { value: "3 Days", label: "3 Days" },
    { value: "7 Days", label: "7 Days" },
    { value: "1 Month", label: "1 Month" },
]

const CustomHeader = props => {
    return (
        <div className="w-100">
            <span className="d-block align-left mt-1 mb-1">Data range</span>
            <div className="d-flex flex-wrap justify-content-between">
                <Select
                    className="React w-25"
                    classNamePrefix="select"
                    defaultValue={dataOptions[0]}
                    name="color"
                    options={dataOptions}
                    />
                <div className="position-relative has-icon-left mb-1">
                <Input value={props.value} onChange={e => props.handleFilter(e)} />
                <div className="form-control-position">
                    <Search size="15" />
                </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    // {
    //     gameName: "Take the bank",
    //     startDate: "11.06.2020 14:20",
    //     endDate: "11.07.2020 14:20",
    //     stake: "52",
    //     totalWin: "+97",
    //     spins : [
    //         {
    //             date : '11.07.2020 14:20',
    //             stake : "1",
    //             totalWin : "+11"
    //         },
    //         {
    //             date : '11.07.2020 14:20',
    //             stake : "1",
    //             totalWin : "+11"
    //         },
    //         {
    //             date : '11.07.2020 14:20',
    //             stake : "1",
    //             totalWin : "+11"
    //         },
    //     ]
    // },
    // {
    //     gameName: "Live Roulette A",
    //     startDate: "14.06.2020 14:20",
    //     endDate: "18.07.2020 14:20",
    //     stake: "43",
    //     totalWin: "+34",
    //     spins : [
    //         {
    //             date : '18.07.2020 11:20',
    //             stake : "1",
    //             totalWin : "+18"
    //         },
    //         {
    //             date : '18.07.2020 11:20',
    //             stake : "1",
    //             totalWin : "+18"
    //         },
    //         {
    //             date : '18.07.2020 11:20',
    //             stake : "1",
    //             totalWin : "+18"
    //         },
    //     ]
    // },
]

const ExpandableTable = ({ data }) => {
    return (
        <Table responsive striped>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Spin Date</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.spins.map((item, i) => (
                        <tr key={i}>
                            <td></td>
                            <td></td>
                            <td>{item.date}</td>
                            <td>{item.stake}</td>
                            <td>{item.totalWin}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

class Messages extends React.Component {
    constructor(){
        super()
        this.state={
            active : "1",
            columns: [
                {
                    name: "StartDate",
                    selector: "startdate",
                    sortable: true,
                    cell: row => (<p className="text-bold-500 text-truncate mb-0">{row.startDate}</p>)
                },
                {
                  name: "EndDate",
                  selector: "enddate",
                  cell: row => (
                    <p className="text-bold-500 text-truncate mb-0">{row.endDate}</p>
                  )
                },
                {
                  name: "GameName",
                  selector: "gamename",
                  cell: row => (
                    <p className="text-bold-500 text-truncate mb-0">{row.gameName}</p>
                  )
                },
                {
                  name: "Stake(%)",
                  selector: "stake",
                  maxWidth: "50px",
                  cell: row => <p className="text-bold-500 mb-0">{row.stake}</p>
                },
                {
                  name: "Total Wins(%)",
                  selector: "totalwins",
                  cell: row => <p className="text-bold-500 mb-0">{row.totalWin}</p>
                }
            ],
            value: "",
            filteredData: [],
        }
    }
    handleFilter = e => {
        let value = e.target.value
        let data = this.state.data
        let filteredData = this.state.filteredData
        this.setState({ value })
    
        if (value.length) {
            filteredData = data.filter(item => {
                let startsWithCondition =
                item.startDate.toLowerCase().startsWith(value.toLowerCase()) ||
                item.endDate.toLowerCase().startsWith(value.toLowerCase()) ||
                item.gameName.toLowerCase().startsWith(value.toLowerCase()) ||
                item.stake.toLowerCase().startsWith(value.toLowerCase()) ||
                item.totalWins.toLowerCase().startsWith(value.toLowerCase())
                let includesCondition =
                item.startDate.toLowerCase().includes(value.toLowerCase()) ||
                item.endDate.toLowerCase().includes(value.toLowerCase()) ||
                item.gameName.toLowerCase().includes(value.toLowerCase()) ||
                item.stake.toLowerCase().includes(value.toLowerCase()) ||
                item.totalWins.toLowerCase().includes(value.toLowerCase())
        
                if (startsWithCondition) {
                return startsWithCondition
                } else if (!startsWithCondition && includesCondition) {
                return includesCondition
                } else return null
            })
            this.setState({ filteredData : filteredData })
        }
    }
    render(){
        let { columns, value, filteredData } = this.state
        return (
            <div className="mr-1 ml-1">
                <DataTable
                    className="dataTable-custom"
                    data={value.length ? filteredData : data}
                    columns={columns}
                    noHeader
                    subHeader
                    subHeaderComponent={
                        <CustomHeader value={value} handleFilter={this.handleFilter} />
                    }
                    expandableRows
                    expandOnRowClicked
                    expandableRowsComponent={<ExpandableTable />}
                />
            </div>
        )
    }
}
export default Messages
