import Head from 'next/head';
import React, { Component } from 'react';
import ReactTable from "react-table";
import styled from 'styled-components';
import "react-table/react-table.css";
import window from 'global'
import Geocode from "react-geocode";

import MonthPickerInput from 'react-month-picker-input';
import Loader from "./loader";
//import 'react-month-picker-input/dist/react-month-picker-input.css';
//var MonthPickerInput = require('react-month-picker-input');
require('react-month-picker-input/dist/react-month-picker-input.css');
const liff = window.liff;
const BOX = styled.div`
  margin: 5.5em auto;
`;

var leaves;
Geocode.setApiKey("AIzaSyC7jUeuFb_ujONIHAG-HKhyXggyd6hvz8s");
Geocode.setLanguage("zh-tw");



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
              this.getPunches(ubn, email, idToken);
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

  getPunches (ubn, email, idToken) {
    try {
      const url_pre = "https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/get";
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
          alert("getPunches no result");
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
        var date = new Date(list[i].createTime*1000).toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
        const data = {
            "createTime": list[i].createTime,
            "date": date,
            "address": list[i].address,
            "type": list[i].type
          };
        newList.push(data);
        this.setState({
            data: newList,
            data_origin: newList,
            loading: false
        })
      }
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
        var date = new Date(value.createTime*1000);
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
      Header: '日期',
      accessor: 'date',
      minWidth: 170
    },{
      Header: '地址',
      accessor: 'address',
      minWidth: 300
    },{
      Header: '類型',
      accessor: 'type',
      maxWidth: 60
    }];

    return (
      <div>
        <meta name="viewport" content= "width=device-width, user-scalable=no"></meta>
        <Head>
          <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
        </Head>
        <p>年/月</p>
        <MonthPickerInput 
          onChange={this.handleChange}
        />
        <br></br>
        <div>
          {this.state.data ?
            <ReactTable
              LoadingComponent={MyLoader}
              data={this.state.data}

              columns={columns}
              defaultPageSize = {10}
              pageSizeOptions = {[10, 15]}
            /> :
            <ReactTable
              LoadingComponent={MyLoader}
              data={leaves}
              columns={columns}
              defaultPageSize = {10}
              pageSizeOptions = {[10, 15]}
            />
          }
        </div> 
      </div>    
    );
  }
}

