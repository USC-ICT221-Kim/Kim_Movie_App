import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';


function Movie ({title, poster, genres, synopsis}){
    return(
             <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt ={title}/>
                </div>
                <div className="Movie__Column">
                    <h1>{title}</h1>
                    <div className="Movie_Genres">
                        {genres.map((genres, index) => <MovieGenres genres={genres} key = {index}/> )}
                    </div>
                    <div className="Movie_Synopsis">
                        <LinesEllipsis
                            text = {synopsis}
                            maxLine="4"
                            ellipsis=' ...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
                    </div>
                </div>
    )
}

//Same
function MoviePoster({poster, alt})
{
    return(
        <img src={poster} alt= {alt} title = {alt} className="Movie_Poster" /> 
    )
}

function MovieGenres({genres})
{
    return (
        <span className="Movie_Genres">
        {genres}
        </span>
    )
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}

MovieGenres.propTypes = {
    genres: propTypes.string.isRequired
}

export default Movie;








//Dump component
// class MoviePoster extends Component
// {
//     static propTypes = 
//     {
//         poster: propTypes.string.isRequired
//     }

//     render()
//     {
//         return(
//             <img src={this.props.poster} alt= "Movie Poster" /> 
//         )
//     }
// }