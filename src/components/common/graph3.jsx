import axios from "axios";
import { React, Component } from "react";
import Chart from 'chart.js/auto';
import {
  Bar
} from 'react-chartjs-2';

class Graph3 extends Component { 
     state = {
         movies: [],
         dataset:[]
    };
    componentDidMount() { 
        const GRAPH3_URL = "http://localhost:8080/api/v1/top5budget"
        axios.get(GRAPH3_URL).then((response) =>
            this.setState({
                movies: response.data.map((label) => label.original_title),
                dataset: response.data.map((data)=>data.budget)
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
                    label: 'TOP MOVIES WITH HIGHEST BUDGET OF ALL TIME',
                    data: this.state.dataset,
                },
                ],
            }}/>
        );
    }

}

export default Graph3;