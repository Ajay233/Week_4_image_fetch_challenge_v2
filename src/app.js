import React from 'react'
import ImageSearch from './imgSearch/imgSearch'
import './stylesheets/index.css'
import './stylesheets/app.css';
import './stylesheets/grid.css'
import './stylesheets/imageSearch.css'
import './stylesheets/searchForm.css'
import './stylesheets/inputs.css'
import './stylesheets/buttons.css'

const App = () => {
  return(
    <div className="app">
      <ImageSearch />
    </div>
  );
}

export default App
