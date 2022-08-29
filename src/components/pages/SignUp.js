import React from 'react';
import '../../App.css';
import './SignUp.css'
import Scroll2Top from '../scroll'
import { BrowserRouter as Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from '../SignUp/Form'

export default function SignUp() {
  return (
  <>
    <Scroll2Top></Scroll2Top>
    <Form/>
  </>
  );
}