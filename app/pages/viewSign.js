import Head from 'next/head';
import React, { Component } from 'react';
import ReactTable from "react-table";
import styled from 'styled-components';
import "react-table/react-table.css";
import window from 'global'
import Loader from "./loader";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress'


require('react-month-picker-input/dist/react-month-picker-input.css');

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fullWidth: true,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const BUTTON = styled(Button)`
  width: 20%;
  variant: contained;
  background-color: #1DB954;
`;

const liff = window.liff;

var leaves;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
      data_origin : null,
      role : "substitute",
      status: "not signed",
      loading: true,
      userId: null,
      ubn: null,
      idToken: null,
      loading_button : new Object,
      finish_button : new Object,
      status_button : new Object
    };
  }

  componentDidMount() {
    this.liffInit();
  }

  liffInit() {
    try {
      liff.init(data => {
        const userId = data.context.userId;
        this.setState({ userId: userId });
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
      throw(err);
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
              const name = result.staff.name;
              const idToken = result.token.idToken;
              this.setState({
                ubn: ubn,
                name: name,
                email: email,
                idToken: idToken
              })
              if (this.state.role == "substitute") {
                this.getLeavesSub(this.state.ubn, this.state.name, this.state.email, this.state.idToken);
              } else if (this.state.role == "supervisor") {
                this.getLeavesSuper(this.state.ubn, this.state.email, this.state.idToken);
              }
          } else {
              alert("lineAuth no result");

          }
        }).catch(function (error) {
          alert(error.message);
        })
      } catch (err) {
        throw(err);
      }
  }

  getLeavesSub (ubn, name, email, idToken) {
    try {
      this.setState({ loading: true });
      const URL_GETLEAVES = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/get";
      const url = URL_GETLEAVES + `?ubn=${ubn}&query=substitute&value={"name":"${name}","email":"${email}"}`;
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
          alert("getLeavesSub no result");
      }
      }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
      throw(err);
    }
  }

  getLeavesSuper (ubn, email, idToken) {
    try {
      this.setState({ loading: true });
      const URL_GETLEAVES = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/get";
      const url = URL_GETLEAVES + `?ubn=${ubn}&query=supervisor&value=${email}`;
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
          alert("getLeavesSuper no result");
      }
      }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
      throw(err);
    }
  }

  convertData (list)  {
    try {
      var newList = [];
      for (var i = 0; i < list.length; i++) {
        const data = {
          "id": list[i].id,
          "name": list[i].name,
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
        data_origin: newList 
      })
      this.globalSearch();
    } catch (err) {
      throw(err);
    }
  }

  handleRoleChange = event => {
    try{
      this.setState({ role: event.target.value }, () => {
        if (event.target.value == "substitute") {
          this.getLeavesSub(this.state.ubn, this.state.name, this.state.email, this.state.idToken);
        } else if (event.target.value == "supervisor") {
          this.getLeavesSuper(this.state.ubn, this.state.email, this.state.idToken);
        }
      });
    } catch (err) {
      throw(err);
    }
  };

  handleStatusChange = event => {
    try{
      this.setState({ status: event.target.value }, () => {
        //console.log(event.target.value);
        this.globalSearch();
      });
    } catch (err) {
      throw(err);
    }
  };

  globalSearch = () => {
    try {
      this.setState({ loading: true });
      let role_select = this.state.role;
      let status_select = this.state.status;

      let filteredData = this.state.data_origin.filter(value => {
        if (role_select == "substitute") {
          switch (status_select) {
            case "signed":
              return (  
                value.status != "等待簽核"    
              );
            case "not signed":
              return (  
                value.status == "等待簽核"    
              );
            default:
              throw 'Option not supported';
          }
        } else if (role_select == "supervisor") {
          switch (status_select) {
            case "signed":
              return (  
                value.status == "同意 (主管)" || value.status == "拒絕 (主管)"    
              );
            case "not signed":
              return (  
                value.status == "同意 (代理人)"   
              );
            default:
              throw 'Option not supported';
          }
        }
      });
      this.setState({ data: filteredData, loading: false });
    } catch (err) {
      throw(err);
    }
  };

  approveLeave (Authorization, ubn, leaveId, role) {
    try {
      if (role == "substitute") {
        const URL_APPROVELEAVESUB = "https://us-central1-teddybear-dev.cloudfunctions.net/api/message/approveLeaveSub";
        const body = {
          ubn: ubn,
          leaveId: leaveId,
        };
        fetch(URL_APPROVELEAVESUB, {
          method: 'post',
          headers: {
            "Authorization": Authorization,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }).then((res) => {
          if(res.ok) {
            let loading = this.state.loading_button;
            let finish = this.state.finish_button;
            loading[leaveId] = false;            
            finish[leaveId] = true;
            this.setState({ 
              loading_button : loading,
              finish_button : finish 
            }); 
            this.getLeavesSub(this.state.ubn, this.state.name, this.state.email, this.state.idToken);
          }
          return res.json();
        }).then(result => {
          if (result) {
          
          } else {
              alert("approveLeave error");
          }
        })
      } else if (role == "supervisor") {
        const URL_APPROVELEAVESUPER = "https://us-central1-teddybear-dev.cloudfunctions.net/api/message/approveLeaveSuper";
        const body = {
          ubn: ubn,
          leaveId: leaveId,
        };
        fetch(URL_APPROVELEAVESUPER, {
          method: 'post',
          headers: {
            "Authorization": Authorization,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }).then((res) => {
          if(res.ok) {
            let loading = this.state.loading_button;
            let finish = this.state.finish_button;
            loading[leaveId] = false;            
            finish[leaveId] = true;
            this.setState({ 
              loading_button : loading,
              finish_button : finish 
            });  
            this.getLeavesSuper(this.state.ubn, this.state.email, this.state.idToken); 
          }
          return res.json();
        }).then(result => {
          if (result) {
          } else {
              alert("approveLeave error");
          }
        })

      }
      
      
    } catch (err) {
      next(err);
    }
  }

  updateLeave (Authorization, ubn, leaveId, role, rejectReason) {
    try {
      const URL_UPDATELEAVE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/update";
      var values = {
        ubn: ubn,
        leaveId: leaveId,
        rejectReason: rejectReason
      }
      if (role == "substitute") {
        values.status = "拒絕 (代理人)";
      } else if (role == "supervisor") {
        values.status = "拒絕 (主管)";
      }
      fetch(URL_UPDATELEAVE, {
          method: 'post',
          headers: {
              "Authorization": Authorization,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
      }).then((res) => {
          if(res.ok) {
              let loading = this.state.loading_button;
              let finish = this.state.finish_button;
              loading[leaveId] = false;            
              finish[leaveId] = true;
              this.setState({ 
                loading_button : loading,
                finish_button : finish 
              }); 
              if (role == "substitute") {
                this.getLeavesSub(this.state.ubn, this.state.name, this.state.email, this.state.idToken);
              } else if (role == "supervisor") {
                this.getLeavesSuper(this.state.ubn, this.state.email, this.state.idToken);
              }
              return res.json();  
          }
          throw new Error('updateLeave response was not ok.');
      }).then(result => {
        const substituteInfo = JSON.parse(result.substitute);
        const messages_self = {
            "type": "flex",
            "altText": "代理人已拒絕假單",
            "contents": {
                "type": "bubble",
                "styles": {

                },
                "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                    "type": "text",
                    "text": "代理人",
                    "weight": "bold",
                    "color": "#1DB446",
                    "size": "sm"
                    },
                    {
                    "type": "text",
                    "text": "已拒絕假單",
                    "weight": "bold",
                    "size": "xxl",
                    "margin": "md"
                    },
                    {
                    "type": "separator",
                    "margin": "xxl"
                    },
                    {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "xxl",
                    "spacing": "sm",
                    "contents": [
                        {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                            "type": "text",
                            "text": "開始日期",
                            "size": "sm",
                            "color": "#555555"
                            },
                            {
                            "type": "text",
                            "text": result.startDate,
                            "size": "sm",
                            "color": "#111111",
                            "align": "end"
                            }
                        ]
                        },
                        {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                            "type": "text",
                            "text": "結束日期",
                            "size": "sm",
                            "color": "#555555"
                            },
                            {
                            "type": "text",
                            "text": result.endDate,
                            "size": "sm",
                            "color": "#111111",
                            "align": "end"
                            }
                        ]
                        },
                        {
                        "type": "separator",
                        "margin": "xxl"
                        },
                        {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "xxl",
                        "contents": [
                            {
                            "type": "text",
                            "text": "假別",
                            "size": "sm",
                            "color": "#555555"
                            },
                            {
                            "type": "text",
                            "text": result.leaveType,
                            "size": "sm",
                            "color": "#111111",
                            "align": "end"
                            }
                        ]
                        },
                        {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                            "type": "text",
                            "text": "請假原因",
                            "size": "sm",
                            "color": "#555555"
                            },
                            {
                            "type": "text",
                            "text": result.leaveReason,
                            "size": "sm",
                            "color": "#111111",
                            "align": "end"
                            }
                        ]
                        },
                        {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [
                            {
                            "type": "text",
                            "text": "代理人",
                            "size": "sm",
                            "color": "#555555"
                            },
                            {
                            "type": "text",
                            "text": substituteInfo.name,
                            "size": "sm",
                            "color": "#111111",
                            "align": "end"
                            }
                        ]
                        }
                    ]
                    },
                    {
                    "type": "separator",
                    "margin": "xxl"
                    },
                    {
                    "type": "box",
                    "layout": "horizontal",
                    "margin": "md",
                    "contents": [
                        {
                        "type": "text",
                        "text": "簽核狀態",
                        "size": "xs",
                        "color": "#555555"
                        },
                        {
                        "type": "text",
                        "text": "拒絕(代理人)",
                        "color": "#ff0000",
                        "size": "xs",
                        "align": "end"
                        }
                    ]
                    },
                    {
                    "type": "box",
                    "layout": "horizontal",
                    "margin": "md",
                    "contents": [
                        {
                        "type": "text",
                        "text": "拒絕原因",
                        "size": "xs",
                        "color": "#555555"
                        },
                        {
                        "type": "text",
                        "text": result.rejectReason,
                        "color": "#111111",
                        "size": "xs",
                        "align": "end"
                        }
                    ]
                    }
                ]
                }
            }
        };;
        this.getStaff(Authorization, ubn, result.email, messages_self);
        //this.pushMessage(this.state.userId_self, [messages_self]);
    }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
          next(err);
    }
  }

  getStaff (Authorization, ubn, email, messages) {
    try {
      const URL_GETSTAFF = `https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/target?email=${email}&ubn=${ubn}`;
      fetch(URL_GETSTAFF, {
          method: 'get',
          headers: {
              "Authorization": Authorization
          }
      }).then((res) => {
          if(res.ok) {
              return res.json();  
          }
          throw new Error('getStaff response was not ok.');
      }).then(result => {
        this.pushMessage(result.userId, [messages]);
      })
    } catch (err) {
          next(err);
    }
  }

  pushMessage (userId, messages) {
    try {
      const URL_PUSHMESSAGE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/message/pushMessage";
      const body = {
          userId: userId,
          messages: messages
      };
      fetch(URL_PUSHMESSAGE, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
      }).then((res) => {
          if(res.ok) {
            return res.json();  
          }
          throw new Error('pushMessage response was not ok.');
      })
    } catch (err) {
        next(err);
    }
  }
  
  render() {
    const MyLoader = () => <Loader loading={this.state.loading} />;
    const columns = [{
      Header: 'id',
      accessor: 'id',
      show: false
    },{
      Header: '請假者',
      accessor: 'name',
      width: 90
    },{
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
      show: false
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
      <div>
        
        <Head>
          <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
        </Head>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={3}>
              <Grid key={1} item>
                <FormControl margin="normal" style={{minWidth: 150}} >
                  <InputLabel id="role-label">簽核身份</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    value={this.state.role}
                    onChange={this.handleRoleChange}
                  >
                    <MenuItem value={"substitute"}>代理人</MenuItem>
                    <MenuItem value={"supervisor"}>主管</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              
              <Grid key={2} item>
                <FormControl margin="normal" style={{minWidth: 150}}>
                  <InputLabel id="status-label">簽核狀態</InputLabel>
                  <Select
                    labelId="status-label"
                    id="status"
                    value={this.state.status}
                    onChange={this.handleStatusChange}
                  >
                    <MenuItem value={"not signed"}>未簽核</MenuItem>
                    <MenuItem value={"signed"}>已簽核</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
             
              <Grid key={3} item>
                <div>
                  {this.state.data ?
                    <ReactTable
                      LoadingComponent={MyLoader}
                      data={this.state.data}
                      columns={columns}
                      className="-striped -highlight"
                      SubComponent={row => {
                        //row.loading = false;
                        //this.state.loading_button[row.original.id] = false;
                        //alert(row.original.status);
                        return (
                          <div style={{ 
                            "padding-left": "30px", 
                            "padding-right": "30px", 
                            "padding-top": "10px",
                            "padding-bottom": "10px",
                            display:"flex",
                            "align-items":"center",
                            }}>
                            <div style={{ display: "inline-block", "margin-right": "2vw" }}>
                              {row.original.rejectReason ?
                                <div style={{ display: "table-cell", "vertical-align": "middle" }}> 
                                  <div>假勤類別：{row.original.leaveType}</div>
                                  <div>請假原因：{row.original.leaveReason}</div>
                                  <div>代理人：{row.original.substitute}</div>
                                  <div>拒絕原因：{row.original.rejectReason}</div>
                                </div> :
                                <div style={{ display: "table-cell", "vertical-align": "middle" }}>
                                  <div>假勤類別：{row.original.leaveType}</div>
                                  <div>請假原因：{row.original.leaveReason}</div>
                                  <div>代理人：{row.original.substitute}</div>
                                </div>
                              }
                            </div>
                            <div style={{ display: "inline-block" ,float: "right" }}>
                              {this.state.status == "not signed" && !this.state.finish_button[row.original.id] ?
                                <div>
                                  <div style={{ display: "inline", "margin-right": "2vw"}}>
                                    <BUTTON
                                      fontFamily= "Candara"
                                      variant="contained"
                                      color="secondary"
                                      disabled={this.state.loading_button[row.original.id]}
                                      onClick={() => {                                   
                                        let loading = this.state.loading_button;
                                        loading[row.original.id] = true;
                                        this.setState({ loading_button: loading });
                                        this.approveLeave(this.state.idToken, this.state.ubn, row.original.id, this.state.role);
                                      }}
                                    >                               
                                    {this.state.loading_button[row.original.id] && <CircularProgress size={16} />}
                                    {!this.state.loading_button[row.original.id] && '批准'}
                                    </BUTTON> 
                                  </div>
                                  
                                  <div style={{ display: "inline"}}>
                                    <BUTTON
                                      fontFamily= "Candara"
                                      variant="contained"
                                      color="secondary"
                                      disabled={this.state.loading_button[row.original.id]}
                                      onClick={() => { 
                                        var rejectReason = prompt("請輸入拒絕原因", "");
                                        if(rejectReason != null && rejectReason != "") {
                                          let loading = this.state.loading_button;
                                          loading[row.original.id] = true;
                                          this.setState({ loading_button: loading });
                                          this.updateLeave(this.state.idToken, this.state.ubn, row.original.id, this.state.role, rejectReason)
                                          row.original.rejectReason = rejectReason;  
                                        }
                                      }}
                                    >
                                    {this.state.loading_button[row.original.id] && <CircularProgress size={16} />}
                                    {!this.state.loading_button[row.original.id] && '拒絕'}
                                    </BUTTON>
                                  </div>
                                </div> :
                                <div></div>
                              }
                            </div>
                          </div>
                        )
                      }}
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
      </div>    
    );
  }
}

