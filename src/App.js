import React,{ Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {


state = {

}

  componentDidMount(){
    this._getMovies();
 }


  _renderMovies = () =>{
        const Movies = this.state.Movies.map(movie  => {
        return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key ={movie.id} 
        genres = {movie.genres}
        synopsis = {movie.synopsis}
         />
        })

        return Movies
  }

   _getMovies = async () =>{
    const Movies = await this._callApi()
    this.setState({
      Movies
    }) 
  }

  _callApi = () =>{
   return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
      const { Movies } = this.state;
    return (
      <div className={Movies ? "App" : "App--loading"}>
        {this.state.Movies ? this._renderMovies(): "Loading......"}
      </div>
    );
  }
}

export default App;
