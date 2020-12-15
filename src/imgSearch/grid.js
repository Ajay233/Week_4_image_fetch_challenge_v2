import React from 'react'
import GridRow from './gridRow'

const ImgGrid = (props) => {
  // [[searchTerm,[...results]], [searchTerm,[...results]]]

  const renderImages = () => {
    console.log(props.searchResults)
    let grid = props.searchResults.map((result, i) => {
      // Unfortunately key can not be used as a prop so have had to pass in a row prop to use in the image keys
      return <GridRow key={`row ${i}`} result={result} row={`row ${i}`}/>
    })
    return grid
  }

  const renderPlaceholder = () => {
    return <div className="placeholder">No images, try a search of the Unsplash image library</div>
  }

  const populateGrid = () => {
    return props.searchResults.length > 0 ? renderImages() : renderPlaceholder()
  }

  return(
    <div>
      <div className="grid">
        {populateGrid()}
      </div>
    </div>
  );
}

export default ImgGrid
