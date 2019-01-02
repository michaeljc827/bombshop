import fetch from 'isomorphic-unfetch'

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

    render(){
        return(
            <div className="section container">
                <h1 className="product-details-title"> { this.props.product.name} </h1>
                <h2 className="product-details-price"> {this.props.product.price} Rupees</h2>
            </div>
        );
    }

}