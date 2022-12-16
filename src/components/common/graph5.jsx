import axios from "axios";
import { React, Component } from "react";
import Chart from 'chart.js/auto';
import {
  Bar
} from 'react-chartjs-2';

class Graph5 extends Component { 
     state = {
         movies: [],
         dataset:[]
    };
    componentDidMount() { 
        const GRAPH5_URL = "http://localhost:8080/api/v1/eachYD"
        axios.get(GRAPH5_URL).then((response) =>
            this.setState({
                movies: response.data.map((label) => label.original_title),
                dataset: response.data.map((data)=>data.profit)
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
                    label: 'TOP MOVIES EVERY YEAR IN A DECADE 2017-2007',
                    data: this.state.dataset,
                },
                ],
            }}/>
        );
    }

}

export default Graph5;