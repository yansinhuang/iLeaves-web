import Head from 'next/head';
import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import window from 'global'
import MonthPickerInput from 'react-month-picker-input';
import Loader from "./loader";
import { 
  BOX, 
  TITLE, 
  TEXT, 
  CONTAINER, 
  BUTTON,
  MYFORM,
  FIELD,
  GlobalStyle,
  DATEPICKER,
  AppLogo
} from './component'
require('react-month-picker-input/dist/react-month-picker-input.css');
const liff = window.liff;
var leaves;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
      loading: true
    };
  }

  componentDidMount() {
    this.liffInit();
  }

  liffInit() {
    try {
      liff.init(data => {
        const userId = data.context.userId;
        const accessToken = liff.getAccessToken();
        const URL_CHECKEXIST = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist";
        const body = {
          userId: userId
        };
        fetch(URL_CHECKEXIST, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).then((res) => {
          return res.text();
        }).then(result => {
          if (result) {
              this.lineAuth(userId, accessToken);
          } else {
              alert("請登入以查看假單");
              window.location.replace("https://teddybear-dev.firebaseapp.com/signIn");
          }
        })
      }, err => {
        alert("error");
      });
    } catch (err) {
      next(err);
    }
  }
  
  lineAuth (userId, accessToken)  {
    try {
      const url = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth";
      const body = {
          userId: userId,
          accessToken: accessToken
        };
      fetch(url, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).then((res) => {
          return res.json();
        }).then(result => {
          if (result) {
              const ubn = result.staff.ubn;
              const email = result.staff.email;
              const idToken = result.token.idToken;
              this.getLeaves(ubn, email, idToken);
          } else {
              alert("lineAuth no result");

          }
        }).catch(function (error) {
          alert(error.message);
        })
      } catch (err) {
        next(err);
      }
  }

  getLeaves (ubn, email, idToken) {
    try {
      const url_pre = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/get";
      const url = url_pre + `?ubn=${ubn}&query=email&value=${email}`;
      const header = {
          Authorization: idToken
        };
      fetch(url, {
          method: 'get',
          headers: header
      }).then((res) => {
          return res.json();
      }).then(result => {
          if (result) {
            this.convertData(result.list);
      } else {
          alert("getLeaves no result");
      }
      }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
      next(err);
    }
  }

  convertData (list)  {
    try {
      var newList = [];
      for (var i = 0; i < list.length; i++) {
        const data = {
          "startDate": list[i].startDate,
          "endDate": list[i].endDate,
          "leaveType": list[i].leaveType,
          "substitute": JSON.parse(list[i].substitute).name,
          "status": list[i].status,
          "leaveReason": list[i].leaveReason,
          "rejectReason": list[i].rejectReason
        };
        newList.push(data);
      }
      this.setState({
        data: newList,
        data_origin: newList,
        loading: false
      })
    } catch (err) {
      next(err);
    }
  }

  handleChange = event => {
    try{
      this.setState({ searchInput: event, loading: true }, () => {
        this.globalSearch();
      });
    } catch (err) {
      next(err);
    }
  };

  globalSearch = () => {
    try {
      let { searchInput } = this.state;
      var date_array = searchInput.split("/");
      var date_select = new Date(date_array[1], date_array[0]);
      var year_select = date_select.getFullYear();
      var month_select = date_select.getMonth();

      let filteredData = this.state.data_origin.filter(value => {
        var date = new Date(value.startDate);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        return (      
          year === year_select &&
          month === month_select  
        );
      });
      this.setState({ data: filteredData, loading: false });
    } catch (err) {
      next(err);
    }
  };
  
  render() {
    const MyLoader = () => <Loader loading={this.state.loading} />;
    let months = ['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let makeText = m => {
      if (m && m.year && m.month) return (months[m.month-1] + '. ' + m.year)
      return '?'
    };
    let mvalue = {year: 2015, month: 11};
    const columns = [{
      Header: '開始日期',
      accessor: 'startDate',
      width: 90
    },{
      Header: '結束日期',
      accessor: 'endDate',
      width: 90
    },{
      Header: '假勤類別',
      accessor: 'leaveType',
      width: 90
    },{
      Header: '代理人',
      accessor: 'substitute',
      show: false
    },{
      Header: '簽核狀態',
      accessor: 'status',
      width: 90
    },{
      Header: '請假原因',
      accessor: 'leaveReason',
      show: false
    },{
      Header: '拒絕原因',
      accessor: 'rejectReason',
      show: false
    }];

    return (
      <BOX>
        <GlobalStyle />
        <meta name="viewport" content= "width=device-width, user-scalable=no"></meta>
        <Head>
          <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
        </Head>
        <body>
        <CONTAINER style = {{
          "background-color":"transparent",
          "padding": "0px",
          "margin": "0px",
          width: "100%"}}>
          <CONTAINER style = {{
            "background-color":"transparent", 
            "flex-flow": "row nowrap",
            "padding": "0px",
            "margin": "0px"}}>
            <TEXT style = {{color: "#FFFFFF"}}>請選擇年月：</TEXT>
            <BOX>
              <MonthPickerInput 
                onChange={this.handleChange}  
              />
            </BOX>
          </CONTAINER>
          <BOX style = {{"background-color": "#FFFFFF", "margin": "0px", width: "100％"}}>
            {this.state.data ?
              <ReactTable
                LoadingComponent={MyLoader}
                data={this.state.data}
                getTrProps={(state, rowInfo, column, instance) => ({
                  onClick: e => alert(
                `開始日期：${rowInfo.row.startDate}\n結束日期：${rowInfo.row.endDate}\n假勤類別：${rowInfo.row.leaveType}\n代理人：${rowInfo.row.substitute}\n簽核狀態：${rowInfo.row.status}\n拒絕原因：${rowInfo.row.rejectReason}`)
                })}
                columns={columns}
                defaultPageSize = {10}
                pageSizeOptions = {[10, 15]}
                className="-striped -highlight"
              /> :
              <ReactTable
                LoadingComponent={MyLoader}
                data={leaves}
                columns={columns}
                defaultPageSize = {10}
                pageSizeOptions = {[10, 15]}
                className="-striped -highlight"
              />
            }
          </BOX> 
        </CONTAINER>
        </body>
      </BOX>    
    );
  }
}

