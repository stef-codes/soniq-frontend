import React from 'react';
const SearchResults = (results) => {
    debugger
  return(
      <div>
        {results.map(result =>
            <div data-id={result.trackId}>
                <a id={result.trackId} href="#">{result.trackName}</a> 
                <button id={result.trackId} onClick={this.props.handleOnClick}>Add</button>                   
            </div>
        )}
      </div>
  )
}

export default SearchResults;
