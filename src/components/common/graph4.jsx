import axios from "axios";
import { React, Component } from "react";
import Chart from 'chart.js/auto';
import {
  Bar
} from 'react-chartjs-2';

class Graph4 extends Component { 
     state = {
         movies: [],
         dataset:[]
    };
    componentDidMount() { 
        const GRAPH4_URL = "http://localhost:8080/api/v1/top5GP"
        axios.get(GRAPH4_URL).then((response) =>
            this.setState({
                movies: response.data.map((label) => label.original_title),
                dataset: response.data.map((data)=>data.gross_PROFIT)
            })
        );
        console.log(this.state.movies);
        console.log(this.state.dataset);
    }

    render() { 
        return (
            <Bar  datasetIdKey='id'
            data={{
                labels:  this.state.movies,
                datasets: [
                {
                    id: 1,
                    label: 'TOP Rated MOVIES WITH THEIR GROSS PROFIT',
                    data: this.state.dataset,
                },
                ],
            }}/>
        );
    }

}

export default Graph4;