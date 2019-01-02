import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

import * as config from '../../static/config';
const apiUrl = config.url;

export default class ProductPage extends React.Component {

    static async getInitialProps({query}){

        let result = await fetch(apiUrl + "/product/"+query.id);
        let product = await result.json();
        return {
            "product": product
        }
    }

    componentWillMount(){
        this.setState({
            'titleInput': this.props.product.name,
            'priceInput': this.props.product.price,
        });
    }

    handleProductNameUpdate(evt){
        let currentState = this.state;
        currentState['titleInput'] = evt.target.value
        this.setState(currentState);
    }


    handlePriceUpdate(evt){
        let currentState = this.state;
        currentState['priceInput'] = evt.target.value;
        this.setState(currentState);
    }

    async updateProduct(){
        let productId = this.props.product.id


        let updatedProduct = {
            id: productId,
            name: this.state['titleInput'],
            price: this.state['priceInput']
        }

        let result = await fetch(apiUrl + "/product/"+productId, {
            method: 'PUT',
            body: JSON.stringify( { product: updatedProduct } ),
            headers: { "Content-Type": "application/json" }
        });

        //TODO: error handling
        Router.push('/admin/dashboard')
        
    
    }

    render(){
        return(
            <div className="section container">
                <h1 className="product-details-title"> <input type="text"  value={ this.state.titleInput } onChange={evt => this.handleProductNameUpdate(evt)} /></h1>
                <h2 className="product-details-price"> <input type="text" value={ this.state.priceInput } onChange={evt => this.handlePriceUpdate(evt)} /> Rupees</h2>
                <button className="btn btn-primary product-details-submit" onClick={ () => { this.updateProduct()} }>Save</button>
            </div>
        );
    }

}