import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Search extends Component {

    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
        this.onEdit = this.onEdit.bind(this);

        this.state = {
            searchName: '',
        }
    }

    onSearch(event) {
        const searchedValue = this.state.searchName
        console.log(searchedValue);

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${this.state.searchName}`)
            .then((data) => {

                console.log(data);

                //<Link to={`/product/${data.id}`} />
                //<Link to={`/product/MLB1165400089`} />
            });
    }

    onEdit(event) {

        this.setState({
            searchName: event.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onEdit} />
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.onSearch}>
                    BUSCAR
                </button>
            </div>
        );
    }
}

export default Search;//Used to allow import from other files