import React from 'react'

const GridRow = (props) => {

  // result structure is: [searchTerm, [array of image results]]

  const renderGridRow = () => {

    // map through the second element
    let imageList = props.result[1].map((imgDetails, i) => {
      console.log(imgDetails)
      return(
        <div key={`${props.row} img ${i}`} className="gridImage">
          <img className="" src={imgDetails.urls.regular} alt=""/>
        </div>
      );
    })
    // Add the search heading to the front of the list
    imageList.unshift(
      <span className="seacrhHeading" key={`${props.row} ${props.result[0]}`}>
        Search results for: <span className="searchTerm">{props.result[0]}</span>
      </span>
    );
    return imageList
  }

  return(
    <div className="gridRow">
      {renderGridRow()}
    </div>
  );
}

export default GridRow
