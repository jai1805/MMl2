import React, { Component } from 'react'
import Graph1 from './components/common/graph1';
import Graph2 from './components/common/graph2';
import Graph3 from './components/common/graph3';
import Graph4 from './components/common/graph4';
import Graph5 from './components/common/graph5';
import Select from 'react-select';
import Navbar from './components/common/navbar';

class GraphPage extends Component { 
    
    state = {
         movies: [],
         dataset: [],
         selectedValue: '2007',
     };
    
    list = [  
        { value: "2007", label: "2007" },
        { value: "2008", label: "2008" },
        { value: "2009", label: "2009" },
        { value: "2010", label: "2010" },
        { value: "2011", label: "2011" },
        { value: "2012", label: "2012" },
        { value: "2013", label: "2013" },
        { value: "2014", label: "2014" },
        { value: "2015", label: "2015" },
        { value: "2016", label: "2016" },
        { value: "2017", label: "2017" }
    ];

    handleChange = e => { 
        this.setState({ selectedValue: e.label })
    }

    render() {
        return (
            <React.Fragment >
                <Navbar/>
                <center>
                    <div style={{ width: 700 }}>
                        <Graph1 />
                    </div>
                    <div>
                        {
                            <Select
                                options={this.list}
                                className="select"
                                defaultValue={{ label: '2007', value: '2007' }}
                                onChange={ this.handleChange }
                            />
                        }
                    </div>
                    <div style={{ width: 700 }}>
                        <Graph2 selectedValue={ this.state.selectedValue }/>
                    </div>
                    <div style={{ width: 700 }}>
                        <Graph3 />
                    </div>
                    <div style={{ width: 700 }}>
                        <Graph4 />
                    </div>
                    <div style={{ width: 700 }}>
                        <Graph5 />
                    </div>
                </center>
            </React.Fragment>
        ); 
            
        }
    
}
export default GraphPage