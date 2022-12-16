import React, { Component } from "react";
import axios from "axios";
import moment from 'moment';
import './details.css';
require.context('./images', false, /\.(png|jpe?g|svg)$/)



class Page extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            movie:[]
        }

    }
    componentDidMount() { 
        const DETAIL_URL = `http://localhost:8080/api/v1/movieDetail?query=${this.props.movie_id}`
        axios.get(DETAIL_URL).then((response) => {
            this.setState({ movie: response.data });
        });
        
        
    }
    
    render() { 

        function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
        }

        const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

        const img_name = images[`${this.props.movie_id}.png`];

        if (img_name === undefined || img_name === null) { 
            img_name = images["placeholder.webp"]
        }

        const movie = this.state.movie;
        const overview = movie.map(mov => mov.overview);
        const budget = movie.map(mov => mov.budget);
        const averageRating = movie.map(mov => mov.averageRating);
        const runtimeMinutes = movie.map(mov => mov.runtimeMinutes);
        const revenue = movie.map(mov => mov.revenue);
        const release_date = movie.map(mov => mov.release_date);
        const primaryTitle = movie.map(mov => mov.primaryTitle);
        
        return (
                    <div>
                        <div className="main-container">
                            <h1>{primaryTitle}</h1>
                    <h4>{this.props.genre} &emsp; {moment(release_date).format('MMMM Do YYYY')} &emsp; {averageRating}/10 &emsp; {runtimeMinutes} mins</h4>
                            <div className="movie-media-container">
                        <div className="poster-div">
                            <img className="img-poster" src={img_name} alt="img-poster"></img>
                        </div>
                        <div className="overview"><b>Overview</b><br />{overview}
                            
                           <br/> <br /><b>Budget:</b> ${budget}
                            <br/> <br /><b>Revenue:</b> ${revenue}
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <footer className="bg-light text-center text-lg-start">
                                <div className="text-center p-3 footer">
                                    © 2022 Copyright: MyMovieList
                                </div>
                            </footer>
                        </div> */}
                    </div>
        );
    }
}

export default Page;