import React, { Component } from 'react';
import './SearchBox.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="opacity py-1 px-3 mt-2">
        <h1 className="text-center">Search Jobs</h1>
        <div className="input-group">
          <div className="row">
            <div className="col-md-2">
              <div className="input-group-btn">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Jobs
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Jobs</a>
                  <a className="dropdown-item" href="#">Companies</a>
                  <a className="dropdown-item" href="#">Salaries</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <input type="text" className="form-control text-white" aria-label="Text input with dropdown button" size="30" placeholder="Jobs Title or Keyword" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group has-feedback">
              <input type="text" className="form-control" aria-label="Text input for location" size="30" placeholder="Location" />
              <span className="fa fa-facebook form-control-feedback"></span>
            </div>
          </div>
          <div className="col-md-2">
            <div className="input-group-btn">
              <button className="btn btn-success form-inline">Search</button>
            </div>
          </div>
          </div>





        {/*<div className="row py-3 mx-auto">*/}
          {/*<div className="col-md-2"></div>*/}
          {/*<div className="col-md-8">*/}
            {/*<div className="button-container">*/}
            {/*<ul className="nav nav-pills nav-justified btn-group inline pull-lg-left" id="ul">*/}
              {/*<li><a data-toggle="pill" href="#home" className="btn btn-block btn-white text-danger" >Jobs</a></li>*/}
              {/*<li><a data-toggle="pill" href="#menu1" className="btn btn-block btn-white text-primary" >Companies</a></li>*/}
              {/*<li><a data-toggle="pill" href="#menu2" className="btn btn-block btn-white text-primary" >Salaries</a></li>*/}
            {/*</ul>*/}
            {/*</div>*/}

            {/*<div className="tab-content">*/}
              {/*<div id="home" className="tab-pane fade">*/}
                {/*<form>*/}
                  {/*<div className="input-group lrcInputs"><input className="form-control" id="search-text" name="lookfor" placeholder="Job Title or Keywords" type="text" />*/}
                    {/*<div className="input-group-btn"><button className="btn btn-success lrcSearchButton" type="submit"><i className="glyphicon glyphicon-search"></i>Search</button></div>*/}
                  {/*</div>*/}
                {/*</form>*/}
              {/*</div>*/}
              {/*<div id="menu1" className="tab-pane fade">*/}
                {/*<form>*/}
                  {/*<div className="input-group lrcInputs"><input className="form-control" id="search-text" placeholder="Company Name" type="text" name="title" />*/}
                    {/*<div className="input-group-btn"><button className="btn btn-success lrcSearchButton" type="submit"><i className="glyphicon glyphicon-search"></i>Search</button></div>*/}
                  {/*</div>*/}
                {/*</form>*/}
              {/*</div>*/}
              {/*<div id="menu2" className="tab-pane fade">*/}
                {/*<form>*/}
                  {/*<div className="input-group lrcInputs"><input className="form-control" id="search-text" placeholder="Job Title or Company" type="text" name="title" />*/}
                    {/*<div className="input-group-btn"><button className="btn btn-success lrcSearchButton" type="submit"><i className="glyphicon glyphicon-search"></i>Search</button></div>*/}
                  {/*</div>*/}
                {/*</form>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-2"></div>*/}
      </div>
    );
  }
}

export default SearchBar;