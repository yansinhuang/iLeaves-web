// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import fetch from 'isomorphic-unfetch';
import icon from '../components/image/icon.png';
import Head from 'next/head';
import window from 'global'
import firebase from 'firebase'
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
const liff = window.liff;
var userId;
const config = {
  databaseUrl: 'https://teddybear-dev.firebaseio.com',
  authUrl: 'https://identitytoolkit.googleapis.com/v1',
  secureUrl: 'https://securetoken.googleapis.com/v1',
  apiKey: 'AIzaSyDhqqn1bFuw7mpHKQDdRPQZrc2HfmKb-l8',
}

function submitForm (data, userId) {
  data.userId = userId;
  fetch('https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/signIn', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    //res.status === 200 ? this.setState({ submitted: true }) : '';
    if(res.ok) {
      return res.json();
    }
    throw new Error('Sign in Error');
  }).then(result => {
    if (result.userId) {
      alert("登入成功")
    } else {
      alert("首次登入成功，請至信箱收取重設密碼信")
      firebase.auth().sendPasswordResetEmail(result.email);
    }
    liff.closeWindow();
  }).catch(function (error) {
    alert(error.message);
  })
}

const liffInit = async () => {
  firebase.initializeApp(config);
  liff.init(data => {
    userId = data.context.userId;
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
        document.write("Already connected");
      }
    })
    

  }, err => {
    alert("error");
  });
}

liffInit();

function forgotPassword (email) {
  try {
    firebase.auth().sendPasswordResetEmail(email)
      .then(function () {
        alert('Please check your email...')
      })
  } catch (err) {
    alert(err);
    next(err);
  }
}
const Basic = () => (
  <BOX>
  <GlobalStyle />
  <Head>
    <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
  </Head>
  <body>

    <CONTAINER style = {{"background-color":"transparent"}}>
      <AppLogo src = {icon}/>
      <TITLE style = {{ color: "#FFFFFF", "margin-top": 10, "margin-bottom": 0, "padding": 0 }}>
        歡迎來到
      </TITLE>
      <TITLE style = {{ color: "#FFFFFF", "margin-top": 0, "margin-bottom": 10, "padding": 0 }}>
        iLeaves
      </TITLE>
      
      <Formik
        initialValues={{ ubn: '', email: '', password: '' }}
        validate={values => {
          const errors = {};
          // check for ubn
          if (!values.ubn) {
            errors.ubn = 'Required';
          }
          // check for email
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          // check for password
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            submitForm(values, userId);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <CONTAINER>
            <MYFORM>
              <FIELD type="ubn" name="ubn" label = "UBN" component = { TextField }/>
              <FIELD type="email" name="email" label = "Email" component = { TextField }/>
              <FIELD type="password" name="password" label = "Password" component = { TextField }/>
              <br></br>
              <br></br>
              <BOX>
                <BUTTON
                  type="submit"
                  fontFamily= "Candara"
                  variant="contained"
                  disabled={isSubmitting}
                >
                    登入
                </BUTTON>
              </BOX>
              <BOX>
                <BUTTON
                  fontFamily= "Candara"
                  onClick={() => { 
                    var email = prompt("請輸入Email", "");
                    if(email != null && email != "") {
                      forgotPassword(email);
                    }
                  }}
                  >
                  忘記密碼
                </BUTTON>
              </BOX>
            </MYFORM>          
          </CONTAINER>
        )}
      </Formik>
      </CONTAINER>

  </body>
  </BOX> 
);


export default Basic;