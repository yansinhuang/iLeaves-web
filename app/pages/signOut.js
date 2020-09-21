// Render Prop
import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import fetch from 'isomorphic-unfetch';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Head from 'next/head';
import window from 'global';
import { Select } from 'material-ui-formik-components/Select';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
require( "react-datepicker/dist/react-datepicker.css");
var dateFormat = require('dateformat');

const liff = window.liff;
import { 
  BOX, 
  TITLE, 
  TEXT, 
  CONTAINER, 
  BUTTON,
  GlobalStyle
} from './component'


export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        userId : null,
        isSubmitting: false,
        isExist: false
      };
    }

    componentDidMount() {
      this.liffInit();
    }
  
    liffInit() {
      try {
        liff.init(data => {
            const userId = data.context.userId;
            //const accessToken = liff.getAccessToken();
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
              this.setState({
                userId: userId
              })
              if (result) {
                this.setState({
                  isExist: true
                })
              }
            })
        }, err => {
            alert(err.message);
        });
      } catch (err) {
            next(err);
      }
    }
    
    signOut (userId)  {
      try {
        this.setState({
          isSubmitting: true
        })
        const url = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/signOut";
        const body = {
            userId: userId
        };
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((res) => {
            this.setState({
              isSubmitting: false
            })
            const messages = [
              {
              type: "text",
              text: "登出成功"
              }
          ]; 
            liff.sendMessages(messages);
            liff.closeWindow();
            return res.json();
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
            <CONTAINER>
              <BOX>
                {this.state.userId?
                  this.state.isExist?
                  <BUTTON
                    fontFamily= "Candara"
                    variant="contained"
                    color="secondary"
                    disabled={this.state.isSubmitting}
                    onClick={() => { this.signOut(this.state.userId) }}
                    >
                    登出
                  </BUTTON> :

                  <label>已登出</label> :

                  <BOX>
                    <Loader type="ThreeDots" color="#1DB954" height={80} width={80} />
                  </BOX>         
                }
              </BOX>
            </CONTAINER>
          </body>
        </BOX>   
      );
    }
  }