// Render Prop
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import window from 'global';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyC7jUeuFb_ujONIHAG-HKhyXggyd6hvz8s");
Geocode.setLanguage("zh-tw");
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
        latitude : null,
        longitude : null
      };
    }

    componentDidMount() {
      this.liffInit();
      this.getLocation();
      setInterval( () => {
        this.setState({
          curTime : new Date().toLocaleTimeString('zh-TW')
        })
      },1000)
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
                alert("請登入以使用");
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
            this.getPunch();

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

    getLocation() {
        try{
            //alert("getLocation");
            let self = this;
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    //alert(position.coords.latitude);
                    //alert(position.coords.longitude);
                    self.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    //alert("end!!")
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                      response => {
                          var address = response.results[0].formatted_address;
                          self.setState({
                            address: address
                          });
                      },
                      error => {
                          alert("無法取得位置資訊");
                          next(error);
                      }
                  );                 
                    
                }, (error) => alert(error.message)
            );
            
        } catch (err) {
            alert(err);
            next(err);
      }
    }

    getPunch () {
        try {
          const URL_GETPUNCH = `https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/getToday?ubn=${this.state.ubn}&query=email&value=${this.state.email}`;
          fetch(URL_GETPUNCH, {
            method: 'get',
            headers: {
              "Authorization": this.state.Authorization
            }
          }).then((res) => {
            return res.json();
          }).then(result => {
            let self = this;
            self.setState({
              punch: result
            });
            if (result.length == 0) {
              alert("請先簽到");
            } else if (result.length == 1){
              // able to punch out
            } else if (result.length == 2){
              alert("今日已簽退");
            } else {
              alert("error: too much punch data in a day");
            }
          }).catch(function (error) {
            alert(error.message);
          })
        } catch (err) {
          next(err);
        }
      }
   
      createPunch () {
        try {
          let self = this;
          self.setState({
              punched: true
          });
          const URL_CREATEPUNCH = "https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create";
          fetch(URL_CREATEPUNCH, {
            method: 'post',
            headers: {
              "Authorization": this.state.Authorization,
              "ubn": this.state.ubn,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "latitude": this.state.latitude,
                "longitude": this.state.longitude,
                "address": this.state.address,
                "type": "簽退",
                "email": this.state.email
              })
          }).then((res) => {
            return res.text();
          }).then(result => {
            if (result) {
              //liff.closeWindow();
                  alert("簽退成功");
            } else {
                alert("punch error");
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
        <div>
          <GlobalStyle />
          <Head>
            <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
          </Head>
          <body>
              <CONTAINER>
                {(this.state.email&&this.state.punch&&this.state.address)?
                    <div>
                      <BOX>
                        <TITLE> {this.state.curTime} </TITLE>
                      </BOX>

                      <BOX>
                        <TEXT>現在位置： {this.state.address}</TEXT>
                      </BOX>

                      <BOX>
                        <BUTTON
                            fontFamily= "Candara"
                            variant="contained"
                            disabled={!(this.state.latitude && this.state.longitude && this.state.address && (this.state.punch.length == 1) && !this.state.punched)}
                            onClick={() => { 
                                this.createPunch();
                            }}
                        >
                        簽退
                        </BUTTON>
                      </BOX>
                    </div> :

                    <BOX>
                        <Loader type="ThreeDots" color="#1DB954" height={80} width={80} />
                    </BOX>

                } 
              </CONTAINER>
          </body>
        </div>   
      );
    }
  }