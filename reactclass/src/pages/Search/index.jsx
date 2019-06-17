import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

    constructor() {
        super();

        this.onSearch = this.onSearch.bind(this);
        this.onEdit = this.onEdit.bind(this);

        this.state = {
            searchName: '',
            listRetrieved: [],
            isLoadingList: false
        }
    }

    onSearch(event) {

        this.setState({ isLoadingList: true });

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${this.state.searchName}`)
            .then((data) => {

                this.setState({
                    listRetrieved: data.data.results
                })
                this.forceUpdate()
            });
    }

    onEdit(event) {

        this.setState({
            searchName: event.currentTarget.value
        });
    }

    goToItem(itemID) {
        console.log(itemID)
        this.props.history.push(`/product/${itemID}`)

    }

    listResults() {
        let resultItems = [];
        for (let i = 0; i < (this.state.listRetrieved.length) - 1; i++) {
            resultItems.push(

                <li className="mdl-list__item"
                    key={this.state.listRetrieved[i].id}
                    onClick={() => this.goToItem(this.state.listRetrieved[i].id)}>
                    <hr
                        style={{
                            color: "#999999",
                            backgroundColor: "#999999",
                            height: 1
                        }}
                    />
                    <span className="mdl-list__item-primary-content" >
                        <img src={this.state.listRetrieved[i].thumbnail} />
                        {this.state.listRetrieved[i].title}
                    </span>
                </li>

            )
        }

        return resultItems
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
                <div>
                    {this.listResults()}
                </div>
            </div>

        );
    }
}

export default Search;//Used to allow import from other files