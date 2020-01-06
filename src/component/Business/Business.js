import React from 'react';
import './Business.css';


class Business extends React.Component {
    constructor(props){
        super(props);
        this.business = this.props.business
    }
   
    render(){
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.business.imageSrc} alt={this.business.name}/>
                </div>
                <h2>{this.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.business.address}</p>
                        <p>{this.business.city}</p>
                        <p>{this.business.state + this.business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{this.business.category}</h3>
                        <h3 className="rating">{this.business.rating}</h3>
                        <p>{this.business.reviewCount}</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Business;