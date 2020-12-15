import React from 'react'
import { baseUrl, unsplashKey } from '../properties/properties'
import ImgGrid from './grid'
import SearchForm from './searchForm'

class ImageSearch extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      randomImg: "",
      searchTerm: '',
      searchResults: []
    }
  }

  getRandomImg = () => {
    fetch(`${baseUrl}/photos/random`, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${unsplashKey}`,
        'Accept-Version': 'v1'
      }
    }).then((response) => {
      // also need to clear the searchTerm in state
      return response.json()
    }).then((data) => {
      console.log(data)
      this.setState({ randomImg: data.urls.regular })
    }).catch((error) => {
      console.log(error.json())
    })
  }

  renderRandomImg = () => {
    const { randomImg } = this.state
    return randomImg === "" ? null : <img id="randomImg" src={randomImg} alt="" />
  }

  search = (event) => {
    event.preventDefault()
    fetch(`${baseUrl}/search/photos?query=${this.state.searchTerm}`, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${unsplashKey}`,
        'Accept-Version': 'v1'
      }
    })
    .then(response => response.json())
    .then((data) => {
      let currentState = this.state.searchResults;
      let newElement = [this.state.searchTerm, data.results]
      this.setState({ searchResults: [...currentState, newElement ] })
    })
  }

  updateSearchTerm = (ref) => {
    console.log(ref)
    this.setState({ searchTerm: ref.current.value })
  }

  render(){
    const { randomImg, searchResults, searchTerm } = this.state
    return(
      <div id="imgSearch">
        {console.log(this.state)}
        <div id="imgSearchTitle" className=""><i className="fas fa-camera-retro titleIcon"></i> Image Search</div>
        <div>
          {this.renderRandomImg()}
        </div>
        <button className="button" onClick={this.getRandomImg}>Get a random image</button>
        <ImgGrid searchResults={searchResults} searchTerm={searchTerm}/>
        <SearchForm updateSearchTerm={this.updateSearchTerm} search={this.search} />
      </div>
    );
  }
}

export default ImageSearch
