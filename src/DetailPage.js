import React, { Component } from 'react'
// import the_dark_knight from "./components/common/images/the_dark_knight.jpeg"
import moment from 'moment';
import axios from 'axios'
import Navbar from './components/common/navbar';
import { useParams, useLocation } from "react-router-dom";
import Page from './components/common/page';

const DetailPage = (props)=> {

    let { movie_id, genre } = useParams();
    console.log(movie_id, genre);
        return (
            <React.Fragment>
                <Navbar />
                <Page
                    movie_id={movie_id}
                    genre={genre}
                />
            </React.Fragment>
            
        );
    }
 
export default DetailPage;