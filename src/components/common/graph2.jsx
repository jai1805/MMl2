import axios from "axios";
import { React, Component } from "react";
import Chart from 'chart.js/auto';
import {
  Bar
} from 'react-chartjs-2';
import Select from 'react-select';

class Graph2 extends Component {
    
    constructor(props) { 
        super(props);
    }

     state = {
         movies: [],
         dataset: [],
         selectedValue: '2007',
     };
    
    componentDidMount() { 
        const GRAPH2_URL = `http://localhost:8080/api/v1/top5yearly?query=${this.props.selectedValue}`
        axios.get(GRAPH2_URL).then((response) =>
            this.setState({
                movies: response.data.map((label) => label.original_title),
                dataset: response.data.map((data)=>data.gross_PROFIT)
            })
        );
    }

    componentDidUpdate(){ 
        const GRAPH2_URL = `http://localhost:8080/api/v1/top5yearly?query=${this.props.selectedValue}`
        axios.get(GRAPH2_URL).then((response) =>
            this.setState({
                movies: response.data.map((label) => label.original_title),
                dataset: response.data.map((data)=>data.gross_PROFIT)
            })
        );
    }

    render() { 
        return (
                <Bar datasetIdKey='id'
                    data={{
                        labels: this.state.movies,
                        datasets: [
                            {
                                id: 1,
                                label: 'TOP 5 GROSSING MOVIES IN A YEAR',
                                data: this.state.dataset,
                            },
                        ],
                    }} />
        );
    }

}

export default Graph2;