import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  performSearch(searchTerm) {
       
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=380f66d488a9e6c0bdd4c39dfb055c87&language=en-US&page=1&include_adult=true&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched Data Successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])
        var movieRows = []

        results.forEach((movie) => {
          // console.log(movie.poster_path)
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path 
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    // console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td style={{padding:20}}></td>
              <td>
              <img width="50" src={logo} className="" alt="logo" />
              </td>         
              <td style={{padding:5}}></td>     
              <td>
                <h2>MoviesDB Search</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="searchContainer">
  
          <input style={{
            fontSize: 20,
            display: 'block',
            width: '99%',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter movie name"/>
    
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
