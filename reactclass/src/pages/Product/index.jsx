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
    }

    componentDidMount() {
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])
            .then(([item, description]) => {
                this.setState({
                    data: {
                        ...item.data,
                        description: description.data.plain_text,
                    },
                    isLoading: false
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    renderContent() {
        const dataInfo = this.state.data;

        return (
            <div className="mdl-grid" style={{ backgroundColor: "#99999930" }}>
                <div className="mdl-cell mdl-cell--6-col">
                    <img src={dataInfo.pictures[0].url} width="100%" />
                </div>

                <div className="mdl-cell mdl-cell--6-col">
                    <h3> {dataInfo.title} </h3>
                    <h4> R$ {dataInfo.base_price},00 </h4>
                    <h6 style={{ backgroundColor: "#FFFFFF" }}>
                        Quantidade: {dataInfo.available_quantity}
                    </h6>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        COMPRAR
                        </button>
                </div>

                <h5>
                    Descrição
                </h5>
                <p style={{ marginLeft: "5%" }}>
                    {dataInfo.description}
                </p>
            </div >

        );
    }

    render() {

        const { isLoading } = this.state;
        return isLoading ? <div>Carregando...</div> : this.renderContent()
    }
}

export default Product;//Used to allow import from other files