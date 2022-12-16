import React, { Component } from 'react'
import moment from 'moment';
import axios from 'axios'
import { Link , Navigate, Route, Router, useNavigate } from "react-router-dom";
import DetailPage from '../../DetailPage';
import "./home.css"
require.context('./images', false, /\.(png|jpe?g|svg)$/)


 const MovieCard = (props) => {
    const { movies } = props;
    let navigate = useNavigate();

    function toDetailPage(movie_id, genre) { 
        const path = `/detailPage/${movie_id}/${genre}`
        navigate(path, {state:{movie_id:movie_id, genre:genre}});
    }

    function importAll(r) {
        const images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
     
     const getImgName = movie_id => {
         const param = `${movie_id}.png`;
         let img_name = images[param];
        if (img_name === undefined || img_name === null) { 
            img_name = images["placeholder.webp"]
        }
        else{
            img_name = images[param];
        }

        return img_name
     }


    return (
        <React.Fragment>
            <div>
                <div className='container'>
                    <div className='row'>
                        {movies.map(
                            movie =>
                                <div key={movie.movie_id} className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={getImgName(movie.movie_id)} alt="Card image cap" ></img>
                                    <div className="card-body d-flex flex-column">
                                        <div className="card-info">
                                            <h3>{movie.original_title}</h3>
                                            <p> Rating: {movie.averageRating}</p>
                                            <p> Date: {moment(movie.release_date).format('MMMM Do YYYY')} </p>
                                            <p> Genres: {movie.genres}</p>
                                        </div>
                                        <div className='info'>
                                            <button onClick={() => toDetailPage(movie.movie_id, movie.genres)} className="btn btn-primary mt-auto ">Get Info</button>
                                            </div>
                                    </div>
                                </div>
        
                        )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    }
 
export default MovieCard;