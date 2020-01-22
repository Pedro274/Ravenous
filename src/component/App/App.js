import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import {yelp} from '../../util/Yelp';


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {businesses:[]};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy)
  {yelp.search(term,location,sortBy).then(yelpArraySearch => {
    this.setState({businesses:yelpArraySearch})
    console.log(yelpArraySearch)
    console.log(sortBy)})}

  render = () =>
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
}
