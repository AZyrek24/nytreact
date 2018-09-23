import React from "react";


const Search = () => (
  <div>
    <div className="row">
      <div className="col-sm-12">
        

        <div className="card">
          <div className="card-header">
            <strong>
              <i className="fa fa-list-alt"></i> Search Parameters</strong>
          </div>
          <div className="card-body">

            <form>

              <div className="form-group">
                <label for="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" />
              </div>

              <div className="form-group">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year" />
              </div>

              <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year" />
              </div>

              <button type="submit" className="btn btn-default" id="run-search">
                <i className="fa fa-search"></i> Search</button>
              <button className="btn btn-default" id="clear-all">
                <i className="fa fa-trash"></i> Clear Results</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Search;

