// Render Prop
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import window from 'global';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import firebase from 'firebase'
const config = {
    databaseUrl: 'https://teddybear-dev.firebaseio.com',
    authUrl: 'https://identitytoolkit.googleapis.com/v1',
    secureUrl: 'https://securetoken.googleapis.com/v1',
    apiKey: 'AIzaSyDhqqn1bFuw7mpHKQDdRPQZrc2HfmKb-l8',
  }
const liff = window.liff;
import { 
  BOX, 
  TITLE, 
  TEXT, 
  CONTAINER, 
  BUTTON,
  GlobalStyle
} from './component';

export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        userId : null,
        email: null
      };
    }

    componentDidMount() {
      this.liffInit();
    }
  
    liffInit() {
      try {
        firebase.initializeApp(config);
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
                alert("請登入");
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

    forgotPassword (email) {
        try {
          firebase.auth().sendPasswordResetEmail(email)
            .then(function () {
              alert('請查看信箱：' + email)
              const messages = [
                {
                type: "text",
                text: "已發送密碼重設信"
                }
              ]; 
              liff.sendMessages(messages);
              liff.closeWindow();
            })
        } catch (err) {
          alert(err);
          next(err);
        }
      }
  
  
    render() {
      return (
        <BOX>
          <GlobalStyle />
          <Head>
            <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
            <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
            <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
          </Head>
          <body>
            <CONTAINER>
              <BOX>
                  {this.state.email?
                      <BUTTON
                          fontFamily= "Candara"
                          variant="contained"
                          color="secondary"
                          onClick={() => {                    
                              this.forgotPassword(this.state.email);
                          }}
                          >
                          發送密碼重設信
                      </BUTTON> :
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