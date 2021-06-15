import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  addUrl = (newUrl) => {
    this.setState({urls:[...this.state.urls, newUrl]})
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({urls: data.urls}))
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl} urls={this.state.urls}/>
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
