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
        console.log(this.state.searchName);

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${this.state.searchName}`)
            .then((data) => {

                console.log(data);

                //<Link to={`/product/${data.id}`} />
                //<Link to={`/product/MLB1165400089`} />
            });
    }

    onEdit(event) {
        console.log("sss");

        this.setState({
            searchName: event.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                            type="text"
                            id="searchName"
                            onChange={this.onEdit} />
                        <label className="mdl-textfield__label" htmlFor="searchName">
                            Buscar...
                        </label>
                    </div>
                </form>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                    onClick={this.onSearch}>
                    BUSCAR
                </button>
            </div>
        );
    }
}

export default Search;//Used to allow import from other files