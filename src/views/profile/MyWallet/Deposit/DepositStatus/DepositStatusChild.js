import React, { Component } from "react"
import {Col,Row,FormGroup,Button} from "reactstrap"
import DataTable from "react-data-table-component"
import ReactPaginate from "react-paginate"
import { history } from "../../../../../history"
import { connect } from "react-redux"
import { ChevronDown,  ChevronLeft,  ChevronRight} from "react-feather"
import { transactionHistoryLoad,pagenationchange} from "../../../../../redux/actions/paymentGateWay"
import { get_users} from "../../../../../redux/actions/profile"
import "../../../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../../../assets/scss/pages/data-list.scss"
import "../../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import "../../../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../../../assets/scss/pages/data-list.scss"
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr"; 
const selectedStyle = {
    rows: {
      selectedHighlighStyle: {
          backgroundColor: "rgba(115,103,240,.05)",
          color: "#7367F0 !important",
          boxShadow: "0 0 1px 0 #7367F0 !important",
          "&:hover": {
          transform: "translateY(0px) !important"
          }
      }
    },
}

const CustomHeader = props => {
  return (
    <div>
      <Row>
        <Col xs="12" sm='6' className='pt-1'>
          {/* <UncontrolledDropdown className="data-list-rows-dropdown d-block">
            <DropdownToggle color="" className="sort-dropdown">
              <span className="align-middle mx-50">
                  {`${props.index[0] ? props.index[0] : 0} - ${props.index[1] ? props.index[1] : 0} of ${props.total}`}
              </span>
              <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu tag="div" right>
              <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(4)}>
                  4
              </DropdownItem>
              <DropdownItem tag="a" onClick={() => props.handleRowsPerPage(8)}>
                  8
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Col>
        <Col xs="12" sm='4' className='pt-2'>
          <FormGroup>
            <Flatpickr
              data-enable-time
              value={props.date}
              className="form-control"
              options={{  mode: "range"  }}
              onChange={date => {
                props.setDate(date)
              }}
            />
          </FormGroup>
        </Col>
        <Col xs="12" sm='2' className='pt-1'>
          <Button.Ripple  outline color="primary" onClick={()=>props.dateLoad()}>Apply</Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

class DepositStatusChild extends Component {
    static getDerivedStateFromProps(props, state) {
        if (
            props.dataList.data.length !== state.data.length ||
            state.currentPage !== props.parsedFilter.page
        ) {
        return {
            data: props.dataList.data,
            allData: props.dataList.filteredData,
            totalPages: props.dataList.totalPages,
            currentPage: parseInt(props.parsedFilter.page) - 1,
            rowsPerPage: parseInt(props.parsedFilter.perPage),
            totalRecords: props.dataList.totalRecords,
            sortIndex: props.dataList.sortIndex
        }
    }
    return null;
  }

    state = {
        data: [],
        totalPages: 0,
        currentPage: 0,
        columns: [
          {
            name: "amount",
            selector: "amount",
            sortable: true,
            cell: row => (
                <span>
                  {row.currency+' '+row.amount}
                </span>
            )
          },
          {
            name: "status",
            selector: "status",
            sortable: true
          },
          {
            name: "paymentType",
            selector: "paymentType",
            sortable: true,
          },
          {
            name: "Bank Name",
            selector: "ps_name",
            sortable: true,
          },
          {
            name: "transactionDate",
            selector: "transactionDate",
            sortable: true,
            cell: row => (
                <span>
                   {(new Date(row.transactionDate)).toLocaleString((new Date()).getTimezoneOffset(),{hour12 : false}).replace(",", "")}
                </span>
            )
          },
        ],
        allData: [],
        value: "",
        rowsPerPage: 7,
        sidebar: false,
        currentData: null,
        selected: [],
        totalRecords: 0,
        sortIndex: [],
        addNew: "",
        modal: false,
        title : "",
        icon : "",
        navLink : "",
        update : false,
        rowid : "",
        isChecked : false,
        tooltipOpen : false,
        date : [
          new Date(new Date()-86400000),
          new Date(),
        ],
        user:{}
    }
    thumbView = this.props.thumbView;

    componentDidMount(){
      var user =  get_users();
      this.setState({user:user});
    if(user){
        this.props.transactionHistoryLoad(
        {
            email:user.email,
            start: this.state.date[0],
            end: this.state.date[1],
        },this.props.parsedFilter)
      }
    }

    handleFilter = e => {
      this.setState({ value: e.target.value })
      this.props.filterData(e.target.value)
    }

    handleRowsPerPage = value => {
        let { parsedFilter, pagenationchange } = this.props
        let page = parsedFilter.page !== undefined ? parsedFilter.page : 1
        history.push(`${history.location.pathname}?page=${page}&perPage=${value}`)
        this.setState({ rowsPerPage: value })
        pagenationchange({ page: parsedFilter.page, perPage: value })
    }

    handlePagination = page => {
        let { parsedFilter, pagenationchange } = this.props
        let perPage = parsedFilter.perPage !== undefined ? parsedFilter.perPage : 7
        let urlPrefix = this.props.thumbView
            ? "/data-list/thumb-view/"
            : history.location.pathname
        history.push(
            `${urlPrefix}?page=${page.selected + 1}&perPage=${perPage}`
        )
        pagenationchange({ page: page.selected + 1, perPage: perPage })
        this.setState({ currentPage: page.selected })
    }


  render() {
    let {
      columns,
      data,
      allData,
      totalPages,
      value,
      rowsPerPage,
      totalRecords,
      sortIndex
    } = this.state;
    return (
      <div
      id="admindata_table"

        className={`data-list ${
          this.props.thumbView ? "thumb-view" : "list-view"
        }`}>
          
        <DataTable
          columns={columns}
          data={value.length ? allData : data}
          pagination
          paginationServer
          paginationComponent={() => (
            <ReactPaginate
              previousLabel={<ChevronLeft size={15} />}
              nextLabel={<ChevronRight size={15} />}
              breakLabel="..."
              breakClassName="break-me"
              pageCount={totalPages}
              containerClassName="vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2"
              activeClassName="active"
              forcePage={
                this.props.parsedFilter.page
                  ? parseInt(this.props.parsedFilter.page - 1)
                  : 0
              }
              onPageChange={page => this.handlePagination(page)}
            />
          )}
          noHeader
          subHeader
          responsive
          pointerOnHover
          selectableRowsHighlight
          onSelectedRowsChange={data =>
            this.setState({ selected: data.selectedRows })
          }
          customStyles={selectedStyle}
          subHeaderComponent={
            <CustomHeader
              date={this.state.date}
              setDate={(e)=>this.setState({date:e})}
              handleRowsPerPage={this.handleRowsPerPage}
              rowsPerPage={rowsPerPage}
              total={totalRecords}
              index={sortIndex}
              dateLoad={()=>this.props.transactionHistoryLoad({
                email:this.state.user.email,
                start: this.state.date[0],
                end: this.state.date[1],
              },this.props.parsedFilter)}
            />
          }
          sortIcon={<ChevronDown />}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataList: state.paymentGateWay
  }
}

export default connect(mapStateToProps, {transactionHistoryLoad,pagenationchange})(DepositStatusChild)