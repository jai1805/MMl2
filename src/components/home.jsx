import React, { Component } from 'react'
import MovieCard from './common/movieCard';
import Navbar from './common/navbar';
import { paginate } from './utils/paginate';
import UserService from './utils/UserService';
import Pagination from './common/pagination';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

class Home extends Component {
    state = {
        movies: [],
        currentPage: 1,
        pageSize: 12,
        genres: [],
        sortColumn: { path: 'title', order: 'asc' },
        searchValue:''
    };

    componentDidMount(){
        UserService.get250movies().then((response) => {
            this.setState({movies:response.data});
        });
        }
    
    handlePageChange = page => { 
        console.log(page);
        this.setState({ currentPage: page });
    }

    handleChange = e=> { 
        console.log(e.target.value);
        const value = e.target.value;
        this.setState({
         searchValue: value
        });
    }

    getSearchedMovie= ()=> { 
        console.log(this.state);
        const SEARCH_URL = `http://localhost:8080/api/v1/movieSearch?query=${this.state.searchValue}`
        axios.get(SEARCH_URL).then((response) => {
            console.log(response.data);
            this.setState({ movies: response.data });
        });
    }
    
    filterGenre = str => { 
        console.log(this.state.movies);
        const filter_movies = this.state.movies.filter((movie) => movie.genres.includes(str));
        this.setState({ movies: filter_movies });
    }

    render() {
        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);
        return (
            <React.Fragment>
                <Navbar movies={movies} />
                <div className="main-container">
                    <div className="searchbar">
                        <div className="input-group mb-3 mar-2">
                            <input type="text" className=" w-1" placeholder="Movie Name" aria-label="name"
                                name='movieName' value={this.value}
                                onChange={this.handleChange} aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={this.getSearchedMovie}>Button</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                GENRE
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => this.filterGenre("Action")}>Action</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Drama")}>Drama</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Adventure")}>Adventure</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Comedy")}>Comedy</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Crime")}>Crime</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Horror")}>Horror</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Mystery")}>Mystery</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Romannce")}>Romance</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Sci-Fi")}>Sci-Fi</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.filterGenre("Thriller")}>Thriller</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div>
                    <p></p>
                    <p>{this.state.value}</p>
                </div>
                <center>
                    <div className="moviecard">
                        <MovieCard movies={movies}/>

                        <Pagination
                            itemsCount={this.state.movies.length}
                            pageSize={this.state.pageSize}
                            currentPage={this.state.currentPage}
                            onPageChange={this.handlePageChange}
                            />
                    </div>
                </center>
            </React.Fragment>
        );
    }
}
 
export default Home;