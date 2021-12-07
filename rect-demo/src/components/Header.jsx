import React, { Component } from 'react';
class Header extends Component {
    
    render() {
        return (
            <div className="alert alert-primary">
                <div className="container">
                   <div className="row">
                       <div className="col-md-5">
                           <h3>Movie Mania</h3> 
                       </div>
                       <div className="col-md-7">
                          <input type="search" placeholder="Search for a movie...." className="form-control" />
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default Header;