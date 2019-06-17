import React, { Component } from 'react';
//import { Link, Redirect } from 'react-router-dom';
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

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${this.state.searchName}`)
            .then((data) => {
                console.log("DATA:")
                console.log(data.data.results);

                this.props.history.push(`/product/${data.data.results[0].id}`)
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