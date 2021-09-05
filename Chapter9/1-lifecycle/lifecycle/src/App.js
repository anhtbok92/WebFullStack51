import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Lifecycle from './components/lifecycle';
import newJson from './new.json';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
         lifeCycleActive: true,
         footerText: 'I am footer text',
         news: newJson,
         filtered: newJson
     }
  }

  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
        return item.title.indexOf(keywords) > -1;
    });
    this.setState({ filtered });
  }

  render() {
      const { filtered, footerText, lifeCycleActive } = this.state;
      return(
          <>
              <Header onChangeKeyword={this.getKeywords} />
              {/* BTVN_1 */}
              {/*<News news={filtered} />*/}
              {lifeCycleActive ? <Lifecycle /> : null}
              <button onClick={() => this.setState({ lifeCycleActive: !this.state.lifeCycleActive })}>
                  Action
              </button>
              <Footer footerText={footerText} />
          </>
      )
  }
};

export default App;
