import React from 'react';
import './SearchBar.css';


export default class SearchBar extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            term:'',
            location:'',
            sortBy: 'best_match'};

        this.sortByOptions = {
            "Best Match": 'best_match',
            "Highest Rated": 'rating',
            "Most Reviewed": 'review_count',}; 

        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    handleTermChange(event)
        {this.setState({term: event.target.value})};
    handleLocationChange(event)
        {this.setState({location:event.target.value})};
    handleSortByChange(sortByOption)
        {this.setState({sortBy: sortByOption})};
    getSortByClass(sortByOption)
    {if(this.state.sortBy === sortByOption){return 'active'}
    else{return ""}};

    renderSortByOptions()
        {return Object.keys(this.sortByOptions).map(sortByOption => {
            const sortByOptionValue = this.sortByOptions[sortByOption];
                return <li key={sortByOptionValue} 
                        className={this.getSortByClass(sortByOptionValue)} 
                        onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>
                        {sortByOption}</li>})};
    render = () =>
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
};

