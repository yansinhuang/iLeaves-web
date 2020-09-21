import styled, { createGlobalStyle } from 'styled-components';
import Button from "@material-ui/core/Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import icon from '../components/image/icon.png';

export const BOX = styled.div`

  padding: 0px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TITLE = styled.h1`
  display: flex;  
  color: #191414;
  font-family: Candara;
  text-align: center;
`;
export const TEXT = styled.h4`
  display: flex;
  color: #191414;
  font-family: Candara;
  text-align: center;
`;
export const CONTAINER = styled.div`
  display: flex;
  height: auto;
  width: 75vw;
  padding: 10px;
  margin: 4px;
  background-color: #FFFFFF;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
export const BUTTON = styled(Button)`
&& {
  display: flex;
  variant: contained;
  width: 100%;
  background-color: #1DB954;
  color: #FFFFFF;
}
`;

export const MYFORM = styled(Form)`
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const FIELD = styled(Field)`
  display: flex;
  width: 70vw;
  margin: auto;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background: #191414;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const DATEPICKER = styled(DatePicker)`
  display: flex;
  width: 70vw;
  margin: auto;
`;

export const AppLogo = styled.img`
  display: flex;
  width: 40vw;
  height: 40vw;
`;

export default BOX;