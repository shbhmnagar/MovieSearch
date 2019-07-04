import React from 'react'

class MovieRow extends React.Component {

    viewMovie() {
        // console.log("Trying to view movei")
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <table key={this.props.movie.id} className="table">
        <tbody>
          <tr>  
            <td>  
              <img alt="poster" width='120' src={this.props.movie.poster_src}/>
            </td>
            <td style={{padding:20}}></td>
            <td>
              <h4>{this.props.movie.title}</h4>
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow