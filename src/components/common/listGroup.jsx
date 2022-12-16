import React from 'react';

const ListGroup = (props) => {
    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Thriller</a>
                <a class="dropdown-item" href="#">Drama</a>
                <a class="dropdown-item" href="#">Horror</a>
                <a class="dropdown-item" href="#">Romance</a>
            </div>
        </div>
    );

};


export default ListGroup;