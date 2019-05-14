import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            isLoading: true,
            data: {},
        }
        //console.log(props.match.params.id);
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}`)
            .then(({ data }) => {
                //console.log(data);

                this.setState({
                    data,
                    isLoading: false
                });
            });
    }
    /*
        then((data) => {
            console.log(data);
        });*/

    renderContent() {
        const dataInfo = this.state.data;
        //const {data} = this.state; //it gets the data from state and creates a variable with its value

        return (
            <Fragment>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--6-col">
                        <img src={dataInfo.pictures[0].url} />
                    </div>

                    <div className="mdl-cell mdl-cell--6-col">
                        <h2> {dataInfo.title} </h2>
                        <h4> Price: R$ {dataInfo.base_price},00 </h4>
                        <h4> Quantity: {dataInfo.available_quantity} </h4>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            COMPRAR
                        </button>
                    </div>


                </div>
            </Fragment>
        );
    }

    render() {
        //console.log(this.state)
        const { isLoading } = this.state;
        return isLoading ? <div>Carregando...</div> : this.renderContent()
        // <Fragment>
        //     <div> Product </div>
        //     <div> {dataInfo.title} </div>
        //     <div> Quantity: {dataInfo.available_quantity} </div>
        //     <div> Price: {dataInfo.base_price} </div>
        //     <div> Product ID: {dataInfo.id} </div>
        // </Fragment>

    }
}

export default Product;//Used to allow import from other files