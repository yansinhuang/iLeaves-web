// Render Prop
import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Head from 'next/head';

const BOX = styled.div`
  margin: 5.5em auto;
`;
const TITLE = styled.h2`
  color: #F8F9F9;
  font-family: Candara;
  text-align: center;
  margin-bottom:-2em;
`;
const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  label {
    font-family: Candara;
    color: #1C2833;
    font-size: 1.2em;
    font-weight: 400;
  }
`;
const MYFORM = styled(Form)`
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;


export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <BOX>
          <body style={{background:'#34495E'}}>
            <BOX>
              <Formik>
                {({ isSubmitting, values, setFieldValue}) => (
                    <CONTAINER>
                    <MYFORM>
                        <label>此張假單已簽核</label>                    
                    </MYFORM>
                    </CONTAINER>
                )}
              </Formik>
            </BOX>
          </body>
        </BOX>   
      );
    }
  }