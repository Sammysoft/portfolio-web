/* eslint-disable */
import React, { Component } from 'react';
import Navbar from '../Components/Navbar/index';
import Header from '../Components/Header/index';
import Portfolio from '../Components/Portfolio/index';
import Footer from '../Components/Footer/index'


export default class Homepage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header/>
        <Portfolio />
        <Footer />
      </>
    );
  }
}
