import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FetchData from './Servise/FetchData.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Features from './components/Features/Features.js';
import Footer from './components/Footer/Footer.js';
import Calendar from './components/Calendar/Calendar.js';
import Details from './components/Details/Details.js';
import './style.css';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    allRockets: [],
    companyInfo: null,
  };

  componentDidMount() {
    this.updateState();
    this.updateCompanyInfo();
  };

  updateState() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState( {allRockets: data.map(item => item.name)} )

        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState( {rocketFeatures} ));
  };

  rocketSwitch = rocket => {
    this.setState({
      rocket
    }, this.updateState);
  };

  updateCompanyInfo = () => {
    this.fetchData.getCompanyInfo()
      .then(companyInfo => this.setState( {companyInfo} ));
  };

  render() {

    return (
      <BrowserRouter>
        <Header allRockets={this.state.allRockets} rocketSwitch={this.rocketSwitch} />

        <Route exact path='/'
              render={() => this.state.companyInfo && <Home companyInfo={this.state.companyInfo} /> } /> 

        <Route path='/rocket'
              render={() => this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />} />

        <Route path='/calendar' component={Calendar} />

        <Route path='/details/:id' component={Details} />

        {this.state.companyInfo && <Footer {...this.state.companyInfo} />}
      </BrowserRouter>
    );

  };

};

export default App;
