// Render Prop
import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import window from 'global';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { 
  BOX, 
  TITLE, 
  TEXT, 
  CONTAINER, 
  BUTTON,
  MYFORM,
  FIELD,
  GlobalStyle
} from './component'
const liff = window.liff;

export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        userId : null,
        Authorization: null,
        ubn: null,
        leaveId: null,
        leave: null,
        status: null
      };
    }

    componentDidMount() {
      this.getQuery();
      this.liffInit();
    }

    getQuery() {
        let urlParams = new URLSearchParams(window.location.search);
        urlParams = urlParams.toString().split("&");
        const ubn = urlParams[0].split("=")[1];
        const leaveId = urlParams[1].split("=")[1];
        this.setState({
            leaveId: leaveId
        })
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
                    this.setState({
                        userId: userId
                    })
                    this.lineAuth(userId, accessToken);
                } else {
                    alert("請登入以查看假單");
                    window.location.replace("https://teddybear-dev.firebaseapp.com/signIn");
                }
            })
        }, err => {
            alert(err.message);
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
                const idToken = result.token.idToken;
                this.setState({
                    Authorization: idToken,
                    ubn: ubn
                })
                this.checkStatus(idToken, ubn, this.state.leaveId);
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

    checkStatus (Authorization, ubn, id) {
        try {
            const URL_GETLEAVE = `https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/target?ubn=${ubn}&id=${id}`;
            fetch(URL_GETLEAVE, {
                method: 'get',
                headers: {
                    Authorization: Authorization
                }
            }).then((res) => {
                if(res.ok) {
                return res.json();  
                }
                throw new Error('checkStatus response was not ok.');
            }).then(result => {
                if (result.status != "同意 (代理人)") {
                    this.setState({
                      status: "signed"
                    })
                } else {
                  this.getStaff(Authorization, ubn, result.email);
                  this.setState({
                    status: "not signed"
                  })
                }
            }).catch(function (error) {
                alert(error.message);
            })
        } catch (err) {
            next(err);
        }
    }

    getStaff (Authorization, ubn, email) {
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
          this.setState({
            userId_self: result.userId
          })
        })
      } catch (err) {
            next(err);
      }
    }
    
    updateLeave (values) {
      try {
        const URL_UPDATELEAVE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/update";
        fetch(URL_UPDATELEAVE, {
            method: 'post',
            headers: {
                "Authorization": this.state.Authorization,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        }).then((res) => {
            if(res.ok) {
                return res.json();  
            }
            throw new Error('updateLeave response was not ok.');
        }).then(result => {
            this.setState({
                leave: result
            })
            const messages = [
                {
                type: "text",
                text: "拒絕成功"
                }
            ];
            this.pushMessage(this.state.userId, messages);
            const substituteInfo = JSON.parse(result.substitute);
            const messages_self = {
              "type": "flex",
              "altText": "主管已拒絕假單",
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
                      "text": "主管",
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
                          "text": "拒絕(主管)",
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
            };
            this.pushMessage(this.state.userId_self, [messages_self]);
            liff.closeWindow();
        }).catch(function (error) {
            alert(error.message);
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
            }
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
            }).then(result => {
                //liff.closeWindow();
            }).catch(function (error) {
                alert(error.message);
            })
        } catch (err) {
            next(err);
        }
    }
  
    render() {
      return (
        <BOX>
          <GlobalStyle />
          <Head>
            <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
          </Head>
          <body>
            <BOX>
              <Formik
                initialValues={{ rejectReason: '' }}
                validate={values => {
                  const errors = {};
                  // check for rejectReason
                  if (!values.rejectReason) {
                      errors.rejectReason = 'Required';
                  }                 
                  return errors;                 
                }}
                onSubmit={(values, { setSubmitting }) => {
                  values.status = "拒絕 (主管)";
                  values.leaveId = this.state.leaveId;
                  values.ubn = this.state.ubn;
                  this.updateLeave(values);
                    setSubmitting(false);
                }}
              >
              {({ isSubmitting, values, setFieldValue}) => (
                <CONTAINER>
                  {this.state.userId && this.state.Authorization && this.state.ubn && this.state.leaveId && (this.state.status == "not signed") ?
                    <MYFORM>
                      <FIELD 
                        type="rejectReason" 
                        name="rejectReason" 
                        label = "拒絕原因" 
                        component = { TextField }
                      />

                      <br></br>
                      <br></br>

                      <BUTTON
                        type="submit"
                        fontFamily= "Candara"
                        variant="contained"
                        disabled={isSubmitting}
                      >
                      送出
                      </BUTTON>
                      
                    </MYFORM> :

                    this.state.userId && this.state.Authorization && this.state.ubn && this.state.leaveId && (this.state.status == "signed") ?
                    <MYFORM>
                        <label>此張假單已簽核</label>                    
                    </MYFORM> :

                    <BOX>
                      <Loader type="ThreeDots" color="#1DB954" height={80} width={80} />
                    </BOX>
                  }
                </CONTAINER>
              )}
              </Formik>
            </BOX>
          </body>
        </BOX>   
      );
    }
  }