import React from 'react'

const SearchForm = (props) => {

  let searchRef = React.createRef();
  let inputRef = React.createRef();

  return(
    <div>
      <form ref={searchRef} onSubmit={props.search} >
        <input
          ref={inputRef}
          type='text'
          className="input"
          placeholder="Enter a search word e.g. space or planets"
          onChange={() => { props.updateSearchTerm(inputRef) }}
        />
        <button className="button" type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchForm
