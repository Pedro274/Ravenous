import React from 'react';
import './BusinessList.css'
import Business from '../Business/Business';

export default class BusinessList extends React.Component {
    render = () =>
        <div className="BusinessList">
            {this.props.businesses.map(business => <Business business={business} key={business.id}/>)}
        </div>  
};

