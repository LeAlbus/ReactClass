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
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)
        ])
            .then(([item, description]) => {
                //console.log(data);
                console.log(description)
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
    /*
        then((data) => {
            console.log(data);
        });*/

    renderContent() {
        const dataInfo = this.state.data;
        //const {data} = this.state; //it gets the data from state and creates a variable with its value
        console.log("wwww")
        console.log(Window)
        // const dimensions = Dimensions.get('window');
        // const imageWidth = dimensions.width;

        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--6-col">
                    <img src={dataInfo.pictures[0].url} width="100%" />
                </div>

                <div className="mdl-cell mdl-cell--6-col">
                    <h2> {dataInfo.title} </h2>
                    <h4 style={{ backgroundColor: "#959595" }}> Preço: R$ {dataInfo.base_price},00 </h4>
                    <h4 style={{ backgroundColor: "#959595" }}> Disponíveis: {dataInfo.available_quantity} </h4>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        COMPRAR
                        </button>
                </div>
                <p>
                    <h5>
                        Descrição:
                    </h5>
                    {dataInfo.description}
                </p>
            </div >

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