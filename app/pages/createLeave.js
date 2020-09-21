// Render Prop
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import window from 'global';
import { Select } from 'material-ui-formik-components/Select';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
require( "react-datepicker/dist/react-datepicker.css");
var dateFormat = require('dateformat');
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
  GlobalStyle,
  DATEPICKER
} from './component'
const liff = window.liff;



export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        substitutes : [],
        userId : null
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
            const department = result.staff.department;
            const email = result.staff.email;
            const idToken = result.token.idToken;
            this.setState({
              Authorization: idToken,
              ubn: ubn,
              email: email
            })
            this.getSubstitutes(ubn, department, idToken);
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
  
    getSubstitutes (ubn, department, idToken) {
      try {
        const URL_GETSUBSTITUTES = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/getSubstitutes";
        const url = URL_GETSUBSTITUTES + `?ubn=${ubn}&query=department&value=${department}`; 
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
              this.createOptions(result.list)
            } else {
                alert("getSubstitutes no result");
      
            }
          }).catch(function (error) {
            alert(error.message);
          })
        } catch (err) {
          next(err);
        }
      }
  
    createOptions (arr) {
      try {
        var newList = [];
        for (var i = 0; i < arr.length; i++) {
          var obj = arr[i];
          obj.value = JSON.stringify({
            "name": obj.name,
            "email": obj.email
          });
          obj.label = obj.name;
          delete obj.email;
          delete obj.name;
          //push to list
          newList.push(obj);
          // set substitutes
          if(i == arr.length-1) {
            this.setState({
                substitutes: newList
            })
          }
        }
      } catch (err) {
        next(err);
      }
    }
    
    submitForm (values) {
      try {
        const URL_CREATELEAVE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/create";
        fetch(URL_CREATELEAVE, {
          method: 'post',
          headers: {
            "Authorization": this.state.Authorization,
            "ubn": this.state.ubn,
            "userId": this.state.userId,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        }).then((res) => {
          return res.text();
        }).then(result => {
          if (result) {
            liff.closeWindow();
          } else {
              alert("submitForm error");
          }
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
                initialValues={{ startDate: dateFormat(new Date(), "yyyy-mm-dd"), endDate: dateFormat(new Date(), "yyyy-mm-dd"), leaveType: '', leaveReason: '', substitute: '' }}
                validate={values => {
                  const errors = {};
                  // check for startDate
                  if (!values.startDate) {
                    errors.startDate = 'Required';
                  }
                  // check for endDate
                  if (!values.endDate) {
                    errors.endDate = 'Required';
                  } 
                  // check for leaveType
                  if (!values.leaveType) {
                    errors.leaveType = 'Required';
                  }
                  // check for leaveReason
                  if (!values.leaveReason) {
                      errors.leaveReason = 'Required';
                  }
                  
                  // check for substitute
                  if (!values.substitute) {
                      errors.substitute = 'Required';
                  }
                  
                  return errors;
                  
                }}
                onSubmit={(values, { setSubmitting }) => {
                  values.email = this.state.email;
                  this.submitForm(values);
                    setSubmitting(false);
                  //console.log('submitting', values);
                }}
              >
              {({ isSubmitting, values, setFieldValue}) => (
                <CONTAINER>
                  {this.state.substitutes.length ?
                    <MYFORM>
                      <MuiPickersUtilsProvider utils={LuxonUtils}>
                        <DATEPICKER 
                          name="startDate" label = "開始日期" 
                          format="yyyy-MM-dd" value={values.startDate} 
                          onChange={date => setFieldValue('startDate', dateFormat(date, "yyyy-mm-dd"))}/>
                      </MuiPickersUtilsProvider>

                      
                    <br></br>
                    <br></br>

                      <MuiPickersUtilsProvider utils={LuxonUtils}>
                        <DATEPICKER 
                          name="endDate" label = "結束日期" 
                          format="yyyy-MM-dd" value={values.endDate} 
                          onChange={date => setFieldValue('endDate', dateFormat(date, "yyyy-mm-dd"))} />
                      </MuiPickersUtilsProvider>

                      <BOX>
                        <FIELD
                          type="leaveType"
                          name="leaveType"
                          label="假勤類別"
                          options={[
                            { value: '病假', label: '病假' },
                            { value: '事假', label: '事假' },
                            { value: '喪假', label: '喪假' },
                            { value: '公假', label: '公假' },
                            { value: '生理假', label: '生理假' },
                            { value: '婚假', label: '婚假' },
                            { value: '產假', label: '產假' },
                            { value: '陪產假', label: '陪產假' },
                            { value: '特休假', label: '特休假' }
                          ]}
                          component={ Select }
                        />
                      </BOX>

                      <FIELD 
                        type="leaveReason" 
                        name="leaveReason" 
                        label = "假勤事由" 
                        component = { TextField }
                      />
                      
                      <BOX>
                        <FIELD
                          type="substitute"
                          name="substitute"
                          label="職務代理人"
                          options={this.state.substitutes}
                          component={ Select }
                        />
                      </BOX>



                      <br></br>


                      <BUTTON
                        type="submit"
                        fontFamily= "Candara"
                        variant="contained"
                        disabled={isSubmitting}
                      >
                      送出假單
                      </BUTTON>
                      
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