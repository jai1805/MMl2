import React, { Component } from "react";
import axios from "axios";
import './details.css'

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
            console.log(response.data);
            this.setState({ movie: response.data });
        });
        
        
    }
    render() { 
        const movie = this.state.movie;
        // "primaryTitle": "The Shawshank Redemption",
        // "release_date": "1994-09-23T04:00:00.000+00:00",
        // "averageRating": 9.3,
        // "runtimeMinutes": 142,
        // "budget": 25000000,
        // "revenue": 28341469,
        const overview = movie.map(mov => mov.overview);
        const budget = movie.map(mov => mov.budget);
        const averageRating = movie.map(mov => mov.averageRating);
        const runtimeMinutes = movie.map(mov => mov.runtimeMinutes);
        const revenue = movie.map(mov => mov.revenue);
        const release_date = movie.map(mov => mov.release_date);
        const primaryTitle = movie.map(mov => mov.primaryTitle);
        return (
                    <div>
                        <div class="main-container">
                            <h1>{primaryTitle}</h1>
                    <h4>{this.props.genre} &emsp; {moment(movie.release_date).format('YYYY')} &emsp; {runtime} &emsp; {averageRating} &emsp; {runtimeMinutes} mins</h4>
                            <div class="movie-media-container">
                                <div class="poster-div"></div>
                        <div class="overview"><b>Overview</b><br />{overview}
                                    <br /><br /><b>Starring:</b> &nbsp; Khiladi Kumar &nbsp; Chikni Chameli
                            <br /><b>Budget:</b> ${budget}
                            <br /><b>Revenue:</b> ${revenue}
                                </div>
                            </div>
                        </div>

                        <div>
                            <footer class="bg-light text-center text-lg-start">
                                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                                    © 2022 Copyright: MyMovieList
                                </div>
                            </footer>
                        </div>
                    </div>
        );
    }
}

export default Page;